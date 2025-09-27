/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextRequest } from 'next/server';
import { z } from 'zod';
import { google } from 'googleapis';
import { env } from '@/env';

const esportsSchema = z.object({
  timestamp: z.string(),
  teamName: z.string().min(1),
  leaderName: z.string().min(1),
  leaderIGN: z.string().min(1),
  leaderIGNId: z.string().min(1),
  leaderContact: z.string().regex(/^\d{10}$/),
  leaderEmail: z.string().email(),
  member1Name: z.string().min(1),
  member1IGN: z.string().min(1),
  member1IGNId: z.string().min(1),
  member1Contact: z.string().regex(/^\d{10}$/),
  member1Email: z.string().email(),
  member2Name: z.string().min(1),
  member2IGN: z.string().min(1),
  member2IGNId: z.string().min(1),
  member2Contact: z.string().regex(/^\d{10}$/),
  member2Email: z.string().email(),
  member3Name: z.string().min(1),
  member3IGN: z.string().min(1),
  member3IGNId: z.string().min(1),
  member3Contact: z.string().regex(/^\d{10}$/),
  member3Email: z.string().email(),
  transactionId: z.string().regex(/^\d{12}$/, 'Transaction ID must be exactly 12 digits'),
});

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = esportsSchema.parse(data);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const rowData = [
      parsedData.timestamp,
      parsedData.teamName,
      parsedData.leaderName,
      parsedData.leaderIGN,
      parsedData.leaderIGNId,
      parsedData.leaderContact,
      parsedData.leaderEmail,
      parsedData.member1Name,
      parsedData.member1IGN,
      parsedData.member1IGNId,
      parsedData.member1Contact,
      parsedData.member1Email,
      parsedData.member2Name,
      parsedData.member2IGN,
      parsedData.member2IGNId,
      parsedData.member2Contact,
      parsedData.member2Email,
      parsedData.member3Name,
      parsedData.member3IGN,
      parsedData.member3IGNId,
      parsedData.member3Contact,
      parsedData.member3Email,
      parsedData.transactionId,
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1:W1',
      valueInputOption: 'RAW',
      requestBody: { values: [rowData] },
    });

    if (response.status === 200) {
      return new Response(
        JSON.stringify({ status: 200, message: 'eSports registration recorded successfully', data: parsedData }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ status: 500, message: 'Failed to save to Google Sheet' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ status: 400, message: 'Invalid registration data', errors: error.errors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('Registration error:', error);
    return new Response(
      JSON.stringify({ status: 500, message: 'Failed to process registration' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};