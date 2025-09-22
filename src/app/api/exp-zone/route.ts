import { type NextRequest, NextResponse } from 'next/server';

interface FormData {
    name: string;
    college: string;
    contact: string;
    email: string;
    interests: string[];
}

const SHEETDB_API_URL = process.env.INTREST_FORM_API;
const BEARER_TOKEN = process.env.INTREST_FORM_API_BEARER;

export async function POST(req: NextRequest) {
    if (!BEARER_TOKEN) {
        console.error('SHEETDB_BEARER_TOKEN is not defined in environment variables.');
        return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
    }

    if (!SHEETDB_API_URL) {
        console.error('INTREST_FORM_API is not defined in environment variables.');
        return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
    }

    try {
        const formData = await req.json() as FormData;
        const response = await fetch(SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BEARER_TOKEN}`,
            },
            body: JSON.stringify({
                data: {
                    name: formData.name,
                    college: formData.college,
                    contact: formData.contact,
                    email: formData.email,
                    interests: formData.interests.join(', '),
                },
            }),
        });

        if (response.ok) {
            return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
        } else {
            const errorText = await response.text();
            console.error('SheetDB API Error:', response.status, errorText);
            return NextResponse.json({ message: 'Failed to submit data to SheetDB.' }, { status: response.status });
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
}