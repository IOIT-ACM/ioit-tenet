/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { env } from '@/env';

// Zod schema for validating ticket registration
const AttendeeDetailsSchema = z.object({
  name: z.string(),
  email_id: z.string().email(),
  phone_number: z.string().optional(),
  designation: z.string().optional(),
  organisation: z.string().optional(),
  consent: z.boolean(),
  whatsapp_number: z.string().optional(),
  wa_country_code: z.string().optional(),
  wa_dial_code: z.string().optional(),
  whatsapp_consent: z.boolean().optional(),
  referred_by: z.string().optional(),
  referral_mode: z.string().optional(),
  custom_forms: z.record(z.string()).optional(),
});

const RegistrationSchema = z.object({
  event_id: z.string(),
  registration_tz: z.string(),
  registration_details: z.record(z.array(AttendeeDetailsSchema)),
  utm: z
    .object({
      utm_source: z.string().optional(),
      utm_medium: z.string().optional(),
      utm_campaign: z.string().optional(),
    })
    .optional(),
  payment_id: z.string().optional(),
  order_id: z.string().optional(),
  coupon_code: z.string().optional(),
  group_discount_code: z.string().optional(),
});

type RegistrationData = z.infer<typeof RegistrationSchema>;

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json();
    const parsedData = RegistrationSchema.parse(data);

    const requestBody: any = {
      event_id: parsedData.event_id,
      registration_tz: parsedData.registration_tz,
      registration_details: parsedData.registration_details,
    };

    if (parsedData.utm) {
      requestBody.utm = parsedData.utm;
    }

    if (parsedData.coupon_code)
      requestBody.coupon_code = parsedData.coupon_code;
    if (parsedData.group_discount_code)
      requestBody.group_discount_code = parsedData.group_discount_code;

    if (parsedData.payment_id && parsedData.order_id) {
      requestBody.payment_id = parsedData.payment_id;
      requestBody.order_id = parsedData.order_id;
    }

    const apiKey = env.KONFHUB_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          status: 500,
          message: 'API key is missing from environment variables.',
        },
        { status: 500 },
      );
    }

    // KonfHub API
    const response = await fetch('https://api.konfhub.com/event/capture/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    // API response
    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json(
        {
          status: response.status,
          message: 'API request failed',
          error: errorResponse,
        },
        { status: response.status },
      );
    }

    const responseData = await response.json();
    return NextResponse.json({
      status: 200,
      message: 'Ticket successfully registered',
      data: responseData,
    });
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { status: 422, message: 'Invalid request data', errors: error.errors },
        { status: 422 },
      );
    }

    return NextResponse.json(
      { status: 500, message: 'Internal server error', error: error },
      { status: 500 },
    );
  }
}
