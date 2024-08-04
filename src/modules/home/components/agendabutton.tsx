'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { GiTimeTrap } from 'react-icons/gi';
import { useIsMobile } from '@/hooks/useismobile';
import { IoCloseCircle } from 'react-icons/io5';

const Agenda = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex items-center justify-center'>
      {/* Background */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-10 h-screen w-screen bg-black/20'
          />
        )}
      </AnimatePresence>

      {/* Button */}
      <AnimatePresence>
        <motion.div
          className={`fixed z-50 flex cursor-pointer items-center justify-center ${(!isScrolled || isHovered) && 'gap-4'} overflow-hidden rounded-full border-2 border-black bg-green-500 px-8 py-4 text-xl font-bold text-white ring-2 ring-white transition-all duration-500 md:text-3xl`}
          initial={{ opacity: 0, bottom: 300 }}
          animate={{
            opacity: 1,
            bottom: isScrolled ? (isMobile ? 10 : 20) : isMobile ? 200 : 250,
          }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setActive(true)}
          layoutId='agenda-button'
        >
          <motion.div>
            <GiTimeTrap />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: !isScrolled || isHovered ? 1 : 0,
              bottom: isScrolled ? (isMobile ? 10 : 20) : isMobile ? 200 : 300,
              width: !isScrolled || isHovered ? 90 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={`m-0 p-0`}
          >
            Agenda
          </motion.h3>
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className='fixed inset-0 z-[100] grid place-items-center'>
            <motion.button
              key={`button-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full lg:hidden'
              onClick={() => setActive(false)}
            >
              <IoCloseCircle size={100} />
            </motion.button>
            <motion.div
              layoutId='agenda-button'
              ref={ref}
              className='flex h-full w-full max-w-[700px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[80%]'
            >
              <motion.div>
                <Image
                  priority
                  width={200}
                  height={200}
                  src='/agenda.jpg'
                  alt={'Agenda image'}
                  className='h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80'
                />
              </motion.div>

              <div>
                <div className='flex items-start justify-between p-4'>
                  <div className=''>
                    <motion.h3 className='font-bold text-neutral-700 dark:text-neutral-200'>
                      Complete Agenda
                    </motion.h3>
                    <motion.p className='text-neutral-600 dark:text-neutral-400'>
                      October 2024
                    </motion.p>
                  </div>

                  <motion.a
                    href={'/agenda'}
                    target='_blank'
                    className='rounded-full bg-blue-500 px-4 py-3 text-sm font-bold text-white'
                  >
                    View full Agenda
                  </motion.a>
                </div>
                <div className='relative px-4 pt-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base'
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis nostrum, sint aperiam eum unde doloremque nam
                    reprehenderit quos quia fuga obcaecati aspernatur tenetur
                    delectus, temporibus a error recusandae ducimus asperiores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem perferendis necessitatibus doloremque dignissimos id
                    illum totam quos, excepturi labore expedita. Laborum magnam
                    repellat, nisi quaerat, voluptas perspiciatis aperiam illum
                    quisquam maiores praesentium tempora itaque ipsum sapiente!
                    Consequuntur quidem ullam nemo harum quisquam deleniti eius
                    dicta repellendus placeat recusandae voluptate aliquam totam
                    natus magnam, exercitationem impedit modi quas, alias saepe
                    minima consectetur nostrum officia. Aut necessitatibus
                    explicabo dolores rem et veniam dolorem repudiandae cum
                    veritatis pariatur eum, libero delectus fugiat accusantium
                    aliquam. Autem vero assumenda debitis aperiam illo optio
                    fugit quos, modi magni ratione blanditiis aliquid totam
                    vitae in pariatur recusandae officia qui voluptas! Repellat
                    magnam, vero temporibus dicta ipsam reiciendis sint pariatur
                    sapiente possimus error placeat iste totam nobis itaque
                    harum quasi accusantium unde? Perspiciatis ea explicabo quod
                    excepturi obcaecati tempora ratione, labore officiis nulla
                    porro, tenetur repellat quas quidem laborum. Nostrum velit
                    eius laudantium maiores tenetur quod doloribus est, dicta
                    ipsa nam. Dolorum, nam repellendus, beatae non quisquam
                    provident neque at, iure deserunt dolor commodi adipisci
                    laborum fuga saepe? Recusandae inventore maxime, animi
                    consequuntur totam eius ut tempore minima sint quaerat
                    cupiditate corporis autem tempora vero perferendis officiis!
                    Aliquam repellat saepe velit voluptatum quidem fuga debitis
                    perferendis quibusdam quasi inventore dolores ad corporis,
                    maiores sapiente dicta accusantium eos incidunt?
                    Repellendus, quam at corrupti minus quidem reiciendis soluta
                    dicta reprehenderit voluptatum impedit quaerat molestiae
                    numquam omnis quibusdam adipisci officiis libero veritatis
                    eius est eos ducimus? Autem commodi tenetur ratione
                    molestias deserunt voluptatem dignissimos aperiam reiciendis
                    illo iste explicabo ipsa qui voluptate, recusandae, dicta
                    similique labore. Iusto obcaecati aut assumenda voluptatum
                    consequatur, ipsa voluptatem temporibus. Quos, explicabo
                    dolor similique sit accusantium voluptate officia rerum
                    aperiam libero. Ut ab, ex ipsam iure tempore tempora aperiam
                    exercitationem eum nihil sed fugit vero natus perspiciatis
                    impedit placeat, vitae architecto dignissimos suscipit
                    voluptate officia non!
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Agenda;
