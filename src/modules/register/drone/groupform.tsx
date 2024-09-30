/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import React, { useRef, useState, type ChangeEvent, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaUpload } from 'react-icons/fa';
import { IoMdCloudDone } from 'react-icons/io';
import Image from 'next/image';
import { Image as ANTImage } from 'antd';
import { Separator } from '@/components/ui/separator';
import confetti from 'canvas-confetti';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import CongratulationsModal from './modal';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@/components/ui/checkbox';
import { type DRONETeam } from '@/types/forms';
import { Plus, User } from 'lucide-react';
import { DRONE_FEE_GROUP, DRONE_FEE_INDIVIDUAL } from '@/config';

import {
  groupRegisterSchema as registerSchema,
  groupInitialFormData as initialFormData,
} from '@/validators/drone';

type FormInput = z.infer<typeof registerSchema>;
type AcceptedFileType = 'image/jpeg' | 'image/png';

export default function RegisterForm() {
  const form = useForm<FormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialFormData,
    mode: 'all',
  });

  async function onSubmit(values: DRONETeam) {
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
        const response = await fetch('/api/register/drone/group', {
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

  const user1 = {
    dirty:
      !form.getFieldState('year1').isDirty ||
      !form.getFieldState('name1').isDirty ||
      !form.getFieldState('whatsApp1').isDirty ||
      !form.getFieldState('college1').isDirty ||
      !form.getFieldState('branch1').isDirty,
    exists:
      form.watch('name1') &&
      form.watch('whatsApp1') &&
      form.watch('year1') &&
      form.watch('college1') &&
      form.watch('branch1'),
    name: form.watch('name1'),
    whatsApp: form.watch('whatsApp1'),
    year: form.watch('year1'),
    college: form.watch('college1'),
    branch: form.watch('branch1'),
  };

  const user2 = {
    dirty:
      !form.getFieldState('year2').isDirty ||
      !form.getFieldState('name2').isDirty ||
      !form.getFieldState('whatsApp2').isDirty ||
      !form.getFieldState('college2').isDirty ||
      !form.getFieldState('branch2').isDirty,
    exists:
      form.watch('name2') &&
      form.watch('whatsApp2') &&
      form.watch('year2') &&
      form.watch('college2') &&
      form.watch('branch2'),
    name: form.watch('name2'),
    whatsApp: form.watch('whatsApp2'),
    year: form.watch('year2'),
    college: form.watch('college2'),
    branch: form.watch('branch2'),
  };

  const user3 = {
    dirty:
      !form.getFieldState('year3').isDirty ||
      !form.getFieldState('name3').isDirty ||
      !form.getFieldState('whatsApp3').isDirty ||
      !form.getFieldState('college3').isDirty ||
      !form.getFieldState('branch3').isDirty,
    exists:
      form.watch('name3') &&
      form.watch('whatsApp3') &&
      form.watch('year3') &&
      form.watch('college3') &&
      form.watch('branch3'),
    name: form.watch('name3'),
    whatsApp: form.watch('whatsApp3'),
    year: form.watch('year3'),
    college: form.watch('college3'),
    branch: form.watch('branch3'),
  };

  const user4 = {
    dirty:
      !form.getFieldState('year4').isDirty ||
      !form.getFieldState('name4').isDirty ||
      !form.getFieldState('whatsApp4').isDirty ||
      !form.getFieldState('college4').isDirty ||
      !form.getFieldState('branch4').isDirty,
    exists:
      form.watch('name4') &&
      form.watch('whatsApp4') &&
      form.watch('year4') &&
      form.watch('college4') &&
      form.watch('branch4'),
    name: form.watch('name4'),
    whatsApp: form.watch('whatsApp4'),
    year: form.watch('year4'),
    college: form.watch('college4'),
    branch: form.watch('branch4'),
  };

  const user5 = {
    dirty:
      !form.getFieldState('year5').isDirty ||
      !form.getFieldState('name5').isDirty ||
      !form.getFieldState('whatsApp5').isDirty ||
      !form.getFieldState('college5').isDirty ||
      !form.getFieldState('branch5').isDirty,
    exists:
      form.watch('name5') &&
      form.watch('whatsApp5') &&
      form.watch('year5') &&
      form.watch('college5') &&
      form.watch('branch5'),
    name: form.watch('name5'),
    whatsApp: form.watch('whatsApp5'),
    year: form.watch('year5'),
    college: form.watch('college5'),
    branch: form.watch('branch5'),
  };

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

  // Confetti
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showconfetti, setShowconfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowconfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({
      particleCount: 160,
      spread: 100,
      startVelocity: 45,
      origin: { x: Math.random(), y: Math.random() * 0.6 },
      gravity: 0.7,
      scalar: 1.2,
      shapes: ['square'],
      ticks: 300,
      colors: [
        '#ff4d00',
        '#ff5e00',
        '#ff8000',
        '#ffa200',
        '#b23500',
        '#d84000',
        '#0d8dbf',
        '#0d77bf',
        '#0da1bf',
        '#6d4c41',
      ],
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      {showconfetti && (
        <canvas
          ref={canvasRef}
          className='fixed left-0 top-0 z-0 h-screen w-screen'
        />
      )}
      <h2 className='text-center text-2xl font-semibold text-gray-200'>
        Group Regestration
      </h2>
      <h2 className='text-center text-base font-semibold text-gray-300'>
        congratulations, you just saved 250₹
      </h2>
      <Separator className='my-10' />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='z-[99] w-full space-y-8 text-white'
        >
          <div className='py-4'>
            <div className='grid grid-cols-1 gap-4'>
              <Dialog>
                <DialogTrigger asChild>
                  {user1.exists ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>{user1.name}</span>
                      {user1.year !== 'na' && (
                        <span className='text-center text-sm'>
                          {user1.year}
                        </span>
                      )}
                      <span className='line-clamp-2 text-center text-sm'>
                        {user1.college}
                      </span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>Add member</span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='no-scroll-bar bg-gray-100 sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member 1</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='email1'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Participant Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                        <FormItem className='space-y-3'>
                          <FormLabel>Year of Study</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className='flex flex-col space-y-1'
                            >
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='first-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  First year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='second-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Second year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='third-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Third year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='fourth-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Fourth year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='final-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Final year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='na' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  NA
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
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
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Save and Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user2.exists ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>{user2.name}</span>
                      {user2.year !== 'na' && (
                        <span className='text-center text-sm'>
                          {user2.year}
                        </span>
                      )}
                      <span className='line-clamp-2 text-center text-sm'>
                        {user2.college}
                      </span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>
                        Add Second Member
                      </span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='no-scroll-bar bg-gray-100 sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member 2</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='email2'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Participant Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                            <>
                              <Input placeholder='College Name' {...field} />
                              {user1.college && !user2.college && (
                                <div
                                  className='line-clamp-1 cursor-pointer text-sm italic text-blue-700'
                                  onClick={() =>
                                    form.setValue('college2', user1.college)
                                  }
                                >
                                  Autocomplete: {user1.college}?
                                </div>
                              )}
                            </>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year2'
                      render={({ field }) => (
                        <FormItem className='space-y-3'>
                          <FormLabel>Year of Study</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className='flex flex-col space-y-1'
                            >
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='first-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  First year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='second-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Second year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='third-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Third year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='fourth-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Fourth year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='final-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Final year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='na' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  NA
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
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
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Save and Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user3.exists ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>{user3.name}</span>
                      {user3.year !== 'na' && (
                        <span className='text-center text-sm'>
                          {user3.year}
                        </span>
                      )}
                      <span className='line-clamp-2 text-center text-sm'>
                        {user3.college}
                      </span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>
                        Add Third Member
                      </span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='no-scroll-bar bg-gray-100 sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member 3</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='email3'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Participant Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                            <>
                              <Input placeholder='College Name' {...field} />
                              {user1.college && !user3.college && (
                                <div
                                  className='line-clamp-1 cursor-pointer text-sm italic text-blue-700'
                                  onClick={() =>
                                    form.setValue('college3', user1.college)
                                  }
                                >
                                  Autocomplete: {user1.college}?
                                </div>
                              )}
                            </>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year3'
                      render={({ field }) => (
                        <FormItem className='space-y-3'>
                          <FormLabel>Year of Study</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className='flex flex-col space-y-1'
                            >
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='first-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  First year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='second-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Second year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='third-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Third year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='fourth-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Fourth year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='final-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Final year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='na' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  NA
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
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
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Save and Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user4.exists ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>{user4.name}</span>
                      {user4.year !== 'na' && (
                        <span className='text-center text-sm'>
                          {user4.year}
                        </span>
                      )}
                      <span className='line-clamp-2 text-center text-sm'>
                        {user4.college}
                      </span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>
                        Add Fourth Member
                      </span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='no-scroll-bar bg-gray-100 sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member 4</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='email4'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Participant Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='name4'
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
                      name='college4'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College</FormLabel>
                          <FormControl>
                            <>
                              <Input placeholder='College Name' {...field} />
                              {user1.college && !user4.college && (
                                <div
                                  className='line-clamp-1 cursor-pointer text-sm italic text-blue-700'
                                  onClick={() =>
                                    form.setValue('college4', user1.college)
                                  }
                                >
                                  Autocomplete: {user1.college}?
                                </div>
                              )}
                            </>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year4'
                      render={({ field }) => (
                        <FormItem className='space-y-3'>
                          <FormLabel>Year of Study</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className='flex flex-col space-y-1'
                            >
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='first-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  First year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='second-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Second year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='third-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Third year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='fourth-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Fourth year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='final-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Final year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='na' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  NA
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='branch4'
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
                      name='whatsApp4'
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
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Save and Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  {user5.exists ? (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-4'>
                      <User className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>{user5.name}</span>
                      {user5.year !== 'na' && (
                        <span className='text-center text-sm'>
                          {user5.year}
                        </span>
                      )}
                      <span className='line-clamp-2 text-center text-sm'>
                        {user5.college}
                      </span>
                    </div>
                  ) : (
                    <div className='flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-600 p-4'>
                      <Plus className='mb-2 h-8 w-8' />
                      <span className='text-center text-sm'>
                        Add Fifth Member
                      </span>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className='no-scroll-bar bg-gray-100 sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Team Member 5</DialogTitle>
                    <DialogDescription>
                      Please enter the details for team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='max-h-[60vh] space-y-4 overflow-y-auto'>
                    <FormField
                      control={form.control}
                      name='email5'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Participant Email</FormLabel>
                          <FormControl>
                            <Input placeholder='Email' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='name5'
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
                      name='college5'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College</FormLabel>
                          <FormControl>
                            <>
                              <Input placeholder='College Name' {...field} />
                              {user1.college && !user5.college && (
                                <div
                                  className='line-clamp-1 cursor-pointer text-sm italic text-blue-700'
                                  onClick={() =>
                                    form.setValue('college5', user1.college)
                                  }
                                >
                                  Autocomplete: {user1.college}?
                                </div>
                              )}
                            </>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='year5'
                      render={({ field }) => (
                        <FormItem className='space-y-3'>
                          <FormLabel>Year of Study</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className='flex flex-col space-y-1'
                            >
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='first-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  First year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='second-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Second year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='third-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Third year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='fourth-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Fourth year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='final-year' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  Final year
                                </FormLabel>
                              </FormItem>
                              <FormItem className='flex items-center space-x-3 space-y-0'>
                                <FormControl>
                                  <RadioGroupItem value='na' />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                  NA
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='branch5'
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
                      name='whatsApp5'
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
                    <DialogClose className='rounded-lg bg-gray-500 px-4 py-2 text-gray-50'>
                      Save and Close
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className='my-10 grid gap-5 border-t py-10 shadow-md'>
            <div className='space-y-6'>
              <h1 className='flex items-center justify-center gap-5 text-center text-3xl font-bold text-white'>
                Payment{' '}
                {uploadedImage && form.watch('transactionId') && (
                  <IoMdCloudDone className='text-green-400' />
                )}
              </h1>
              <p className='my-0 text-center text-base text-white'>
                Please Pay the Fee Rs.{' '}
                <span className='line-through'>{DRONE_FEE_INDIVIDUAL * 5}</span>{' '}
                {DRONE_FEE_GROUP}₹ and Upload the Screenshot
              </p>

              <div className='flex flex-col gap-6 md:flex-row'>
                <div className='flex flex-col items-center space-y-4'>
                  <div className='relative flex h-48 w-48 items-center justify-center'>
                    <ANTImage
                      src='/tenet/ctf-payment-link.jpeg'
                      alt='UI ID screenshot'
                      height={200}
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

          <p className='rounded-xl bg-gradient-to-r from-indigo-500 to-blue-200 p-3 text-lg italic text-gray-950'>
            NOTE: Please remember to join the WhatsApp Group through the link
            provided after successfult regestration.
          </p>

          <Button
            disabled={submitting}
            type='button'
            onClick={() => {
              onSubmit(form.getValues() as DRONETeam);
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
