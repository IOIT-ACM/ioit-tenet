/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextRequest } from 'next/server';
import { z } from 'zod';
import { google } from 'googleapis';
import { env } from '@/env';
import { registerSchema } from '@/validators/ctf';

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = registerSchema.parse(data);

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data
    const rowData = [
      parsedData.email,
      parsedData.name1,
      parsedData.college1,
      parsedData.year1,
      parsedData.branch1,
      parsedData.whatsApp1,
      parsedData.name2,
      parsedData.college2,
      parsedData.year2,
      parsedData.branch2,
      parsedData.whatsApp2,
      parsedData.name3 ?? '',
      parsedData.college3 ?? '',
      parsedData.year3 ?? '',
      parsedData.branch3 ?? '',
      parsedData.whatsApp3 ?? '',
      parsedData.workingOn,
      parsedData.transactionId,
      parsedData.tnc ? 'Yes' : 'No',
    ];

    // Append the new row to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1:S1', // Adjusted to accommodate all fields
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    if (response.status === 200) {
      return new Response(
        JSON.stringify({
          status: 200,
          message: 'CTF registration recorded successfully',
          data: parsedData,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({
        status: 500,
        message: 'Failed to save to Google Sheet',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: 'Invalid registration data',
          errors: error.errors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    console.error('Registration error:', error);
    return new Response(
      JSON.stringify({
        status: 500,
        message: 'Failed to process registration',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
