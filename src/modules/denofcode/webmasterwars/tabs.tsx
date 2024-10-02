/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HTMLPreview } from './web';
import { Target } from './target';
import { useStore } from '@/store';

export const SwitchTabs = () => {
  const webmasterPS = useStore((state) => state.webmasterPS);

  if (webmasterPS)
    return (
      <Tabs defaultValue='target' className='flex flex-grow flex-col gap-3'>
        <TabsList className='text-dark w-48'>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='target'>Target Image</TabsTrigger>
        </TabsList>
        <TabsContent value='preview' className='h-full w-full'>
          <HTMLPreview />
        </TabsContent>
        <TabsContent value='target' className='h-full w-full overflow-hidden'>
          <Target imgSrc={webmasterPS.imageURL} />
        </TabsContent>
      </Tabs>
    );
};
