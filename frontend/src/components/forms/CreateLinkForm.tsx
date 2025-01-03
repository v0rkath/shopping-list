import { useState } from "react";
import { Link } from "react-router-dom";
import { createList } from "../../network/list_api";

export default function CreateLinkForm(): JSX.Element {
  const [data, setData] = useState({
    name: "",
    url: "",
  });

  const [updated, setUpdated] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  }

  async function generateLink(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await createList({
      title: data.name,
      list: [],
    });

    console.log(response._id);

    if (!updated) {
      setData((data) => ({ ...data, url: response._id }));
    }
    setUpdated(true);
  }

  return (
    <form
      className="mx-auto flex max-w-96 flex-col md:max-w-sm"
      onSubmit={generateLink}
    >
      <label
        htmlFor="name"
        className="text-md mb-2 mt-24 text-left font-semibold"
      >
        Shopping List Name <span className="text-rose-400">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="e.g. Family List"
        value={data.name || ""}
        onChange={handleChange}
        className="h-11 rounded-md border border-zinc-300 bg-white px-4"
        required
      />
      <button
        type="submit"
        className="md:text-md text-md mt-8 rounded-md bg-stone-950 px-4 py-2 text-neutral-100 hover:bg-neutral-700 md:py-3"
      >
        Generate List Link
      </button>
      {updated ? (
        <div className="mt-8 rounded-md border border-zinc-300 py-2 underline">
          <Link to={`/list/${data.url}`}>
            https://example.com/list/{data.url}
          </Link>
        </div>
      ) : null}
    </form>
  );
}

// <label htmlFor='list-pass' className='font-semibold text-left mt-8 text-md mb-2'>Password (Optional)</label>
// <input type="password" id="list-pass" name="list-pass" placeholder="Password" className='rounded h-11 bg-white border-zinc-300 border px-4'/>
