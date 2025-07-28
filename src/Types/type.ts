export interface Demo {
  id: number;
  title: string;
  description: string;
}

export interface Demo2 extends Demo {
  sub_title: string;
}

export type Card = {
  id: number;
  title: string;
  description: string;
};
