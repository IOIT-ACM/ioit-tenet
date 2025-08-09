import Link from 'next/link';
import { Calendar, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function RegistrationFull() {
  return (
    <Card className='mx-auto h-fit w-full max-w-lg shadow-lg'>
      <CardHeader className='bg-primary text-primary-foreground'>
        <CardTitle className='text-center text-2xl font-bold'>
          Event Registration Closed
        </CardTitle>
      </CardHeader>
      <CardContent className='pt-6'>
        <p className='mb-4 text-center text-muted-foreground'>
          Thank you for your interest in our event. Due to overwhelming
          response, we have reached full capacity and are no longer accepting
          new registrations.
        </p>
        <p className='text-center text-muted-foreground'>
          We encourage you to explore our other upcoming events and speaker
          sessions
        </p>
      </CardContent>
      <CardFooter className='flex flex-col items-center space-y-4'>
        <p className='text-center text-sm font-medium'>
          Discover more at IOIT TENET:
        </p>
        <div className='flex space-x-4'>
          <Button asChild variant='outline'>
            <Link href='/24/speakers' className='flex items-center'>
              <Users className='mr-2 h-4 w-4' />
              Speakers
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href='/24/events' className='flex items-center'>
              <Calendar className='mr-2 h-4 w-4' />
              Events
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
