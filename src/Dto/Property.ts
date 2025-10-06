export interface PropertyProps {
  _id: string;
  name: string;
  value: number;
  img: string;
}

export interface DataProperties {
  ok: boolean;
  miInfo?: PropertyProps[];
}
