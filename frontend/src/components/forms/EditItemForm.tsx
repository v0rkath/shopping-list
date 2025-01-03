import { useState } from "react";
import { ItemDetails, updateItemInList } from "../../network/list_api";

export type UpdateItem = {
  name: string;
  quantity: number;
  link: string;
};

type FormProps = {
  name: string;
  quantity: number;
  link: string;
  identity: string;
  paramId: string;
  toggleDialog?: () => void;
};

export default function EditItemForm({
  name,
  quantity,
  link,
  identity,
  paramId,
  toggleDialog,
}: FormProps): JSX.Element {
  const [data, setData] = useState<UpdateItem>({
    name: name,
    quantity: quantity,
    link: link,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatedItem: string = event.target.value;
    if (event.target.name === "name") {
      setData({ name: updatedItem, quantity: data.quantity, link: data.link });
    } else if (event.target.name === "quantity") {
      setData({
        name: data.name,
        quantity: Number(updatedItem),
        link: data.link,
      });
    } else if (event.target.name === "link") {
      setData({ name: data.name, quantity: data.quantity, link: updatedItem });
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const itemData: ItemDetails = {};

    if (name !== data.name) {
      itemData.name = data.name;
    }
    if (quantity !== data.quantity) {
      itemData.quantity = data.quantity;
    }
    if (link !== data.link) {
      itemData.link = data.link;
    }

    if (!Object.keys(itemData).length) {
      return;
    }

    try {
      await updateItemInList(paramId, identity, itemData);
      if (toggleDialog) {
        toggleDialog();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mb-6 rounded-xl bg-neutral-100">
      <form className="max-w-sm flex-col py-2" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-md mb-2 text-left font-semibold text-neutral-700"
          >
            Product Name: <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Bread"
            value={data.name || name}
            onChange={handleChange}
            className="h-11 rounded-md border border-zinc-300 bg-white px-4 text-neutral-700"
            required
          />
          <label
            htmlFor="quantity"
            className="text-md mb-2 mt-4 text-left font-semibold text-neutral-700"
          >
            Quantity: <span className="text-rose-400">*</span>
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="e.g. 1"
            value={data.quantity || quantity}
            onChange={handleChange}
            className="h-11 rounded-md border border-zinc-300 bg-white px-4 text-neutral-700"
            required
          />
          <label
            htmlFor="link"
            className="text-md mb-2 mt-4 text-left font-semibold text-neutral-700"
          >
            Product Link:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            placeholder="https:/example.com"
            value={data.link || link}
            onChange={handleChange}
            className="mb-4 h-11 rounded-md border border-zinc-300 bg-white px-4 text-neutral-700"
          />
        </div>
        <button
          type="submit"
          className="md:text-md text-md mt-8 rounded-md bg-stone-950 px-4 py-2 text-right text-neutral-100 hover:bg-neutral-700 md:my-0"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}
