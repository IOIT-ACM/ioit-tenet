/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import React, { useRef, useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { FaUpload } from 'react-icons/fa';
import { IoMdCloudDone } from 'react-icons/io';
import {
  Form,
  FormControl,
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
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, initialFormData } from '@/validators/drone';
import { Checkbox } from '@/components/ui/checkbox';
import DroneWorkshopInfo from './intro';
import CongratulationsModal from './modal';
import { type DRONEUser } from '@/types/forms';

type FormInput = z.infer<typeof registerSchema>;
type AcceptedFileType = 'image/jpeg' | 'image/png';

export default function RegisterForm() {
  // Image upload
  const [showWhatsAppLink, setShowWhatsAppLink] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const acceptedFileTypes: AcceptedFileType[] = ['image/jpeg', 'image/png'];

  const handleBoxClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file && acceptedFileTypes.includes(file.type as AcceptedFileType)) {
      setUploadedImage(file);
    }
  };

  const form = useForm<FormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialFormData,
    mode: 'onChange',
  });

  async function onSubmit(values: DRONEUser) {
    setSubmitting(true);
    const timestamp = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    const toastId = toast.loading('Recording your submission...');

    if (!form.formState.isValid) {
      setSubmitting(false);
      toast.warning('Please fill all data and check terms and conditions', {
        id: toastId,
      });
      form.trigger();
      return;
    } else {
      if (!uploadedImage) {
        setSubmitting(false);
        toast.warning('Please upload the payment screenshot', { id: toastId });
        form.trigger();
        return;
      }
      try {
        const response = await fetch('/api/register/drone', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values, timestamp }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitting(false);
          toast.success('Your response has been successfully recorded.', {
            id: toastId,
          });
          setShowWhatsAppLink(true);
        } else {
          switch (response.status) {
            case 400:
              setSubmitting(false);
              toast.error(`Validation error: ${data.message}`, {
                id: toastId,
              });
              break;
            case 500:
              setSubmitting(false);
              toast.error(`Server error: ${data.message}`, {
                id: toastId,
              });
              break;
            default:
              setSubmitting(false);
              toast.error(`An unexpected error occurred: ${data.message}`, {
                id: toastId,
              });
          }
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitting(false);
        toast.error(
          'A network error occurred while submitting your response. Please check your internet connection and try again.',
          { id: toastId },
        );
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <DroneWorkshopInfo />
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
          <div className='space-y-4'>
            <h3>Your details</h3>
            <FormField
              control={form.control}
              name='name'
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
              name='college'
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
              name='year'
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
              name='branch'
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
              name='whatsApp'
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

          <div className='my-10 grid gap-5 border-t py-10 shadow-md'>
            <div className='space-y-6'>
              <h1 className='flex items-center justify-center gap-5 text-center text-3xl font-bold text-white'>
                Payment{' '}
                {uploadedImage && <IoMdCloudDone className='text-green-400' />}
              </h1>
              <p className='my-0 text-center text-base text-white'>
                Please Pay the Fee Rs. 550 and Upload the Screenshot
              </p>

              <div className='flex flex-col gap-6 md:flex-row'>
                <div className='flex flex-col items-center space-y-4'>
                  <div className='relative h-48 w-48'>
                    <Image
                      src='/tenet/ctf-payment-link.jpeg'
                      alt='UI ID screenshot'
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>

                  <a
                    href='/tenet/ctf-payment-link.jpeg'
                    download='/tenet/ctf-payment-link.jpeg'
                    className='flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700'
                  >
                    <span>Download QR Code</span>
                    <FiDownload className='h-4 w-4' />
                  </a>
                </div>

                <div
                  onClick={handleBoxClick}
                  className='flex h-64 flex-1 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-500 transition-colors hover:bg-gray-700'
                >
                  <input
                    type='file'
                    accept={acceptedFileTypes.join(',')}
                    onChange={handleFileChange}
                    className='hidden'
                    aria-label='Upload new image'
                    ref={fileInputRef}
                  />
                  {uploadedImage ? (
                    <div className='relative h-48 w-full md:h-full'>
                      <Image
                        src={URL.createObjectURL(uploadedImage)}
                        alt='UI ID screenshot'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  ) : (
                    <div className='text-center'>
                      <FaUpload className='mx-auto mb-4 h-12 w-12 text-gray-50' />
                      <p className='text-sm text-gray-50'>
                        Click to upload payment screenshot
                      </p>
                      <p className='mt-2 text-xs text-gray-100'>
                        Supported formats: JPEG, PNG
                      </p>
                    </div>
                  )}
                </div>
              </div>
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
                      illegal substances, hazardous materials, or prohibited
                      items to the workshop. Violation will result in immediate
                      expulsion without any refund.
                    </li>
                    <li>
                      Security checks will be performed before entry. Full
                      cooperation with the security team is mandatory for all
                      participants.
                    </li>
                    <li>
                      All participants must comply with the safety guidelines
                      provided during the workshop to ensure the safety and
                      well-being of everyone involved.
                    </li>
                    <li>
                      Professional and respectful conduct is required at all
                      times. Disruptive or disrespectful behavior towards fellow
                      participants or organizers will lead to removal from the
                      workshop.
                    </li>
                    <li>
                      Participants must follow the workshop schedule and attend
                      all sessions on time. Late arrivals may not be allowed to
                      enter the session.
                    </li>
                    <li>
                      The participation fee is strictly non-refundable, even in
                      case of non-attendance or cancellation.
                    </li>
                    <li>
                      By participating, you agree to comply with all the above
                      terms and conditions as well as any additional guidelines
                      provided during the event.
                    </li>
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
                      By checking this box, you agree to abide by our Terms of
                      Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          />

          <Button
            disabled={submitting}
            type='button'
            onClick={() => {
              onSubmit(form.getValues());
            }}
            className='bg-blue-500 hover:bg-blue-700'
          >
            Submit Registration
          </Button>
        </form>
      </Form>
      {showWhatsAppLink && <CongratulationsModal />}
    </div>
  );
}
