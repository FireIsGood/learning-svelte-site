import type { ImgHTMLAttributes } from "@astrojs/image/components";

export type Item = {
  text: string;
  key: string;
  url: string;
  image: ImgHTMLAttributes;
  exactMatch?: boolean;
};
