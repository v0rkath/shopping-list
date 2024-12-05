
export default function Items(props: {name: string}) {
    return (
        <div className="rounded-3xl bg-sage p-4 text-left md:inline-flex flex flex-col justify-around mr-4 cursor-pointer mb-4 text-left">
            <p className="text-xl font-medium pb-3 pl-1">{props.name} <span className="text-sm text-zinc-500">x2</span></p>
            <div className="flex gap-3">
                <a href="#" className="rounded-xl py-2 px-4 bg-white border border-zinc-100">Edit</a>
                <a href="#" className="rounded-xl py-2 px-4 bg-white border border-zinc-100">Link</a>
            </div>
        </div>
    )
}