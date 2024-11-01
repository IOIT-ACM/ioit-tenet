export interface Card {
  title: string;
}

export type ImageItem = {
  id: number;
  url: string;
};

export type GalleryImageGroup = {
  label: string;
  imagedata: ImageItem[];
};
