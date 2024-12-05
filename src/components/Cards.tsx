
export default function Cards(props: any) {
    return (
        <div className="max-w-lg border-solid border border-zinc-200 rounded-xl">
          <div className='p-8'>
            <img src={props.img} className='max-w-sm mb-4 max-h-28 mx-auto'/>
            <h2 className='font-cormorant text-3xl font-semibold max-w-xs mx-auto my-4'>{props.title}</h2>
            <p className='text-sm text-zinc-500 max-w-xs mx-auto my-4'>{props.body}</p>
          </div>
        </div>
    )
}