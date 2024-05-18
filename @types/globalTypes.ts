import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface propsTypesCARD {
  children?: React.ReactNode;
  onClick?: React.MouseEvent<HTMLDivElement>;
  index: number;
}

export interface navBarLinksTypes {
  name: string;
  href: string;
}

export interface projectDetailsType {
  startTime?: string;
  endTime?: string;
  title: string;
  description: string;
  descriptionTwo?: string;
  imgOne: string | StaticImport;
  ImgTwo: string | StaticImport;
  imgFour?: string | StaticImport;
  projectTitle?: string;
  miniImg: string;
}

export interface projectCardPropsTypes {
  startYear: string;
  endYear: string;
  title: string;
  description: string;
  descriptionTwo: string;
  index: number;
  imgOne: string | StaticImport;
  ImgTwo: string | StaticImport;
  imgFour: string | StaticImport;
}

export interface contactIconsTypes {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
}

export interface fromCTypes {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  register: string;
}
