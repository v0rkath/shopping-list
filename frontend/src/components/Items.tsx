import { useState } from 'react';

type ItemProps = {
    name: string;
    move: (name: string, marked: boolean) => void;
}

export default function Items({name, move}: ItemProps): JSX.Element {

    const [marked, setMarked] = useState(false);

    function handleClick(): void {
        setMarked(prevMarked => !prevMarked);
        move(name, marked);
    }
    
    return (
        <div className={`rounded-3xl ${marked ? "bg-neutral-100" : "bg-sage"} p-4 text-left md:inline-flex flex flex-col justify-around mr-4 cursor-pointer mb-4 text-left`} onClick={handleClick}>

            {marked ?
            <p className="text-xl font-medium pb-3 pl-1 text-zinc-500"><s>{name}</s> <span className="text-sm text-zinc-500">x2</span></p> :
            <p className="text-xl font-medium pb-3 pl-1">{name} <span className="text-sm text-zinc-500">x2</span></p>}
            <div className="flex gap-3">
                <a href="#" className="rounded-xl py-2 px-4 bg-white border border-zinc-100">Edit</a>
                <a href="#" className="rounded-xl py-2 px-4 bg-white border border-zinc-100">Link</a>
            </div>
        </div>
    )
}