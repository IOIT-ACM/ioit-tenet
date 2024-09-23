import Link from 'next/link';

export default function Intro() {
  return (
    <div className='w-full space-y-8 p-6 pb-20 text-white shadow-lg md:w-1/2'>
      <h1 className='text-2xl font-bold'>
        Be a part of <strong>TENET Tech-Fiesta</strong>
      </h1>
      <p>
        Join us at our immersive{' '}
        <strong>Jeopardy Style Capture the Flag (CTF)</strong> competition
        powered by Cybervault Securities.
      </p>
      <p>
        A cybersecurity challenge where participants compete to find and exploit
        vulnerabilities.
      </p>

      <ul className='list-inside list-disc space-y-2'>
        <li>
          <strong>Participate in a group of 2 or 3</strong> at just{' '}
          <strong>₹450/-</strong>
        </li>
        <li>
          <strong>Guaranteed internship opportunities</strong>
        </li>
        <li>
          <strong>Prizes and benefits worth ₹1 Lakh+</strong>
        </li>
      </ul>

      <div className='space-y-2'>
        <p>
          <strong>📍 Venue:</strong> AISSMS IOIT, Pune
        </p>
        <p>
          <strong>📅 Dates:</strong> 4th October, 2024
        </p>
      </div>

      <div className='space-y-2'>
        <p>
          <strong>For any queries, contact:</strong>
        </p>
        <Link href='tel:8669033795' className='text-blue-300 hover:underline'>
          Shreya Kulkarni: 8669033795
        </Link>
      </div>
    </div>
  );
}
