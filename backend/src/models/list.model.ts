import { Schema, model } from "mongoose";

export interface ListItem {
  _id?: object;
  name: string;
  marked: boolean;
  quantity: number;
  link?: string;
}

interface ListDocument extends Document {
  title: string;
  list: ListItem[];
}

const ItemsSchema = new Schema<ListItem>({
  name: {
    type: String,
    required: true,
  },
  marked: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  link: {
    type: String,
    required: false,
  },
});

const listSchema = new Schema<ListDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: [ItemsSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default model<ListDocument>("List", listSchema);
