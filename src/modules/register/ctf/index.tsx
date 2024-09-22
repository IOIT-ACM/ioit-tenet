/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import type z from 'Zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, initialFormData } from '@/validators/ctf';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { type CTFUser } from '@/types/forms';

type FormInput = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<FormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialFormData,
  });

  function onSubmit(values: CTFUser) {
    const toastId = toast.loading('Recording your prefrence...');

    fetch('/api/register/ctf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          toast.success('Your response has been successfully recorded.', {
            id: toastId,
          });
        } else {
          toast.error('Failed to record your response. Please try again.', {
            id: toastId,
          });
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error submitting form:', error);
        toast.error(
          'An error occurred while submitting your response. Please try again.',
          { id: toastId },
        );
      });
  }

  return (
    <div className='text-white'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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

          <div className='space-y-4'>
            <h3>Team Member 1</h3>
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
                    <Input placeholder='10-digit WhatsApp number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='space-y-4'>
            <h3>Team Member 2</h3>
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
                    <Input placeholder='10-digit WhatsApp number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='space-y-4'>
            <h3>Team Member 3</h3>
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
                    <Input placeholder='10-digit WhatsApp number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

          <FormField
            control={form.control}
            name='tnc'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>I agree to the terms and conditions</FormLabel>
                  <FormDescription>
                    By checking this box, you agree to our Terms of Service and
                    Privacy Policy.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button type='submit' className='bg-blue-500 hover:bg-blue-700'>
            Submit Registration
          </Button>
        </form>
      </Form>
    </div>
  );
}
