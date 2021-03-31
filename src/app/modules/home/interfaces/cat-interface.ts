export interface Cat {
  id: string;
  name: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  description: string;
};