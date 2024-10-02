import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HTMLPreview } from './web';
import { Target } from './target';
import { useImageStore } from './ps';

import { useEffect } from 'react';

export const SwitchTabs = () => {
  

  const randomImage = useImageStore((state) => state.randomImage);
  const loadRandomImage = useImageStore((state) => state.loadRandomImage);

  useEffect(() => {
    loadRandomImage(); // Load random image when component mounts
  }, [loadRandomImage]);



  return (
    <Tabs defaultValue='preview' className='flex flex-grow flex-col gap-3'>
      <TabsList className='text-dark w-48'>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='target'>Target Image</TabsTrigger>
      </TabsList>
      <TabsContent value='preview' className='h-full w-full'>
        <HTMLPreview />
      </TabsContent>
      <TabsContent value='target' className='h-full w-full'>
        <Target imgSrc={randomImage} />
      </TabsContent>
    </Tabs>
  );
};
