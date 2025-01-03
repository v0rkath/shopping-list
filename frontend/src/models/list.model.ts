export type ListItem = {
  _id?: object;
  name: string;
  marked: boolean;
  quantity: number;
  link: string;
};

export type ListDocument = {
  _id: string;
  title: string;
  list: ListItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
