import { FormEvent, useState } from "react";

export interface AddItemInterface {
  name: string;
  quantity: number;
  link: string;
}

type ModalProps = {
  addItem: (event: FormEvent<HTMLFormElement>, data: AddItemInterface) => void;
};

export default function AddItemForm({ addItem }: ModalProps): JSX.Element {
  const [data, setData] = useState<AddItemInterface>({
    name: "",
    quantity: 1,
    link: "",
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

  return (
    <div className="mb-6 rounded-xl bg-neutral-100">
      <form
        className="flex max-w-sm flex-col justify-between p-10 md:max-w-full md:flex-row"
        onSubmit={(event) => {
          addItem(event, data);
          setData({ name: "", quantity: 1, link: "" });
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="text-md mb-2 text-left font-semibold md:my-0 md:mr-2"
          >
            Product Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Bread"
            value={data.name || ""}
            onChange={handleChange}
            className="mr-8 h-11 rounded-md border border-zinc-300 bg-white px-4"
            required
          />
          <label
            htmlFor="quantity"
            className="text-md mb-2 mt-4 text-left font-semibold md:my-0 md:mr-2"
          >
            Quantity <span className="text-rose-400">*</span>
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="e.g. 1"
            value={data.quantity || ""}
            onChange={handleChange}
            className="mr-8 h-11 w-20 rounded-md border border-zinc-300 bg-white px-4"
            required
          />
          <label
            htmlFor="link"
            className="text-md mb-2 mt-4 text-left font-semibold md:my-0 md:mr-2"
          >
            Product Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            placeholder="https:/example.com"
            value={data.link || ""}
            onChange={handleChange}
            className="h-11 rounded-md border border-zinc-300 bg-white px-4"
          />
        </div>
        <button
          type="submit"
          className="md:text-md text-md mt-8 max-w-28 rounded-md bg-stone-950 px-4 py-2 text-neutral-100 hover:bg-neutral-700 md:my-0"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
