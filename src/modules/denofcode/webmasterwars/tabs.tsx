import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HTMLPreview } from './web';
import { Target } from "./target";

export const SwitchTabs = () => {
  return (
    <Tabs defaultValue='preview' className="flex flex-grow flex-col gap-5">
      <TabsList className="text-dark w-48">
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='target'>Target Image</TabsTrigger>
      </TabsList>
      <TabsContent value='preview' className="w-full h-full">
        <HTMLPreview />
      </TabsContent>
      <TabsContent value='target'>
        <Target imgSrc="/imgs/esports/fifa.jpg"/>
      </TabsContent>
    </Tabs>
  );
};
