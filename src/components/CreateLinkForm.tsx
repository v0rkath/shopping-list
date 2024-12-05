import { useState } from "react"
import { Link } from "react-router-dom";
import ShortUniqueId from "short-unique-id";

export default function CreateLinkForm() {
    const [data, setData] = useState({
        name: "",
        url: ""
    });

    const [updated, setUpdated] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}));
    }

    function generateLink(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { randomUUID } = new ShortUniqueId({length: 10});
        if (!updated) {
            setData(data => ({...data, url: randomUUID()}));
        }
        setUpdated(true)
    }

    return (
        <form className='flex flex-col md:max-w-sm max-w-96 mx-auto' onSubmit={generateLink}>
            <label htmlFor='name' className='font-semibold text-left mt-24 text-md mb-2'>Shopping List Name <span className='text-rose-400'>*</span></label>
            <input type="text" id="name" name="name" placeholder="e.g. Family List" value={data.name || ""} onChange={handleChange} className='rounded-md h-11 bg-white border-zinc-300 border px-4' required/>
            <button type="submit" className='md:text-md text-md text-neutral-100 bg-stone-950 rounded-md px-4 md:py-3 py-2 hover:bg-neutral-700 mt-8'>Generate List Link</button>
            {updated ? <div className="rounded-md border border-zinc-300 py-2 mt-8 underline"><Link to={`/list/${data.url}`}>https://website.com/list/{data.url}</Link></div> : null}
        </form>
    )
}

// <label htmlFor='list-pass' className='font-semibold text-left mt-8 text-md mb-2'>Password (Optional)</label>
// <input type="password" id="list-pass" name="list-pass" placeholder="Password" className='rounded h-11 bg-white border-zinc-300 border px-4'/>