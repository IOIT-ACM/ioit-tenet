/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, initialFormData } from '@/validators/ctf';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { type CTFUser } from '@/types/forms';
import { Plus } from 'lucide-react';
import { User } from 'lucide-react';

type FormInput = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<FormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialFormData,
    mode: 'onTouched',
  });

  async function onSubmit(values: CTFUser) {
    const timestamp = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    const toastId = toast.loading('Recording your submission...');

    try {
      const response = await fetch('/api/register/ctf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, timestamp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Your response has been successfully recorded.', {
          id: toastId,
        });
      } else {
        switch (response.status) {
          case 400:
            toast.error(`Validation error: ${data.message}`, {
              id: toastId,
              description: data,
            });
            break;
          case 500:
            toast.error(`Server error: ${data.message}`, {
              id: toastId,
            });
            break;
          default:
            toast.error(`An unexpected error occurred: ${data.message}`, {
              id: toastId,
            });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        'A network error occurred while submitting your response. Please check your internet connection and try again.',
        { id: toastId },
      );
    }
  }

  const user1 = {
    name: form.watch('name1'),
    whatsApp: form.watch('whatsApp1'),
    year: form.watch('year1'),
    college: form.watch('college1'),
    branch: form.watch('branch1'),
  };

  const user2 = {
    name: form.watch('name2'),
    whatsApp: form.watch('whatsApp2'),
    year: form.watch('year2'),
    college: form.watch('college2'),
    branch: form.watch('branch2'),
  };

  const user3 = {
    name: form.watch('name3'),
    whatsApp: form.watch('whatsApp3'),
    year: form.watch('year3'),
    college: form.watch('college3'),
    branch: form.watch('branch3'),
  };

  return (
    <div className='flex items-center justify-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-8 text-white md:w-1/2'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='your@email.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='py-4'>
            <div className='grid grid-cols-3 gap-4'>
              <Dialog>
                <DialogTrigger asChild>
                  {user1.name &&
                  user1.branch &&
                  user1.college &&
                  user1.whatsApp &&
                  user1.year ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-sm'>{user1.name}</span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-sm'>Add member 1</span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='name1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Full Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='college1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College</FormLabel>
                          <FormControl>
                            <Input placeholder='College Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Input placeholder='Year of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='branch1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Branch</FormLabel>
                          <FormControl>
                            <Input placeholder='Branch of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='whatsApp1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='10-digit WhatsApp number'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter className='flex w-full flex-row gap-5'>
                    <Button
                      onClick={() => {
                        if (
                          !form.getFieldState('year1').isDirty ||
                          !form.getFieldState('name1').isDirty ||
                          !form.getFieldState('whatsApp1').isDirty ||
                          !form.getFieldState('college1').isDirty ||
                          !form.getFieldState('branch1').isDirty
                        ) {
                          toast.warning('Invalid form data');
                        } else {
                          toast.success('Member 1 info saved');
                        }
                      }}
                      className='bg-blue-500'
                    >
                      Save Member
                    </Button>
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user2.name &&
                  user2.branch &&
                  user2.college &&
                  user2.whatsApp &&
                  user2.year ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-sm'>{user2.name}</span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-sm'>Add Second Meber</span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='name2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Full Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='college2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College</FormLabel>
                          <FormControl>
                            <Input placeholder='College Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Input placeholder='Year of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='branch2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Branch</FormLabel>
                          <FormControl>
                            <Input placeholder='Branch of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='whatsApp2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='10-digit WhatsApp number'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter className='flex w-full flex-row gap-5'>
                    <Button
                      onClick={() => {
                        if (
                          !form.getFieldState('year2').isDirty ||
                          !form.getFieldState('name2').isDirty ||
                          !form.getFieldState('whatsApp2').isDirty ||
                          !form.getFieldState('college2').isDirty ||
                          !form.getFieldState('branch2').isDirty
                        ) {
                          toast.warning('Invalid form data');
                        } else {
                          toast.success('Member 2 info saved');
                        }
                      }}
                      className='bg-blue-500'
                    >
                      Save Member
                    </Button>
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user3.name &&
                  user3.branch &&
                  user3.college &&
                  user3.whatsApp &&
                  user3.year ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-sm'>{user3.name}</span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-sm'>Add Third Member</span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='name3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Full Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='college3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College</FormLabel>
                          <FormControl>
                            <Input placeholder='College Name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Input placeholder='Year of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='branch3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Branch</FormLabel>
                          <FormControl>
                            <Input placeholder='Branch of Study' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='whatsApp3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='10-digit WhatsApp number'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter className='flex w-full flex-row gap-5'>
                    <Button
                      onClick={() => {
                        if (
                          !form.getFieldState('year3').isDirty ||
                          !form.getFieldState('name3').isDirty ||
                          !form.getFieldState('whatsApp3').isDirty ||
                          !form.getFieldState('college3').isDirty ||
                          !form.getFieldState('branch3').isDirty
                        ) {
                          toast.warning('Invalid form data');
                        } else {
                          toast.success('Member 3 info saved');
                        }
                      }}
                      className='bg-blue-500'
                    >
                      Save Member
                    </Button>
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <FormField
            control={form.control}
            name='workingOn'
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are you working on?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Describe your current project or area of focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='space-y-4'>
            <div className='mt-5 flex flex-col items-center space-y-2'>
              <Image
                src='/tenet/ctf-payment-link.jpeg'
                alt='QR Code for payment'
                width={150}
                height={150}
                className='rounded-lg'
              />

              <a
                href='/tenet/ctf-payment-link.jpeg'
                download='payment-qr-code.png'
                className='flex items-center gap-4 rounded-lg bg-gray-600 p-2 text-sm text-white'
              >
                <span className=''>Download QR Code for transaction</span>
                <FiDownload />
              </a>
            </div>
            <FormField
              control={form.control}
              name='transactionId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction ID</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your transaction ID' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='tnc'
            render={({ field }) => (
              <div className='flex flex-col items-center gap-5 rounded-md border p-4'>
                <div className='space-y-2'>
                  <label>Terms & Conditions for Participants:</label>
                  <ul className='list-inside list-disc space-y-1 text-sm text-gray-500'>
                    <li>
                      Participants are strictly prohibited from bringing any
                      illegal substances or hazardous materials to the workshop.
                      If any are found, the participant will be excommunicated
                      from the session without any refund.
                    </li>
                    <li>
                      Thorough security checks will be conducted before entry.
                      Cooperation with the security team is mandatory.
                    </li>
                    <li>
                      All participants must adhere to the safety protocols
                      outlined during the workshop to ensure a safe environment.
                    </li>
                    <li>
                      Respectful behavior towards fellow participants and
                      organizers is expected at all times. Disruptive behavior
                      will not be tolerated.
                    </li>
                    <li>
                      Participants are required to follow the decided schedule
                      and attend allotted sessions on time.
                    </li>
                    <li>
                      The participation fee is non-refundable. In case of
                      cancellation for attendance, no refunds will be issued.
                    </li>
                    <li>By attending, you agree to abide by these terms.</li>
                  </ul>
                </div>
                <div className='flex w-full items-center gap-3'>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <div className='leading-none'>
                    <FormLabel className='text-sm font-medium'>
                      I agree to the terms and conditions
                    </FormLabel>
                    <p className='text-xs text-gray-500'>
                      By checking this box, you agree to our Terms of Service
                      and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
          <Button type='submit' className='bg-blue-500 hover:bg-blue-700'>
            Submit Registration
          </Button>
          <Button
            type='button'
            className='bg-blue-500 hover:bg-blue-700'
            onClick={() => console.log(form.getValues())}
          >
            Log values
          </Button>
        </form>
      </Form>
    </div>
  );
}
