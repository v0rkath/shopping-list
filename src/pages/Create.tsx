import Navbar from '../components/Navbar'

export default function Create() {
    return (
        <div className='bg-sage h-dvh'>
            <Navbar/>
            <h1 className="md:text-6xl text-5xl mt-16 md:max-w-xl mx-w-sm mx-auto font-cormorant font-bold">Let's make shopping easy</h1>
            <form className='flex flex-col md:max-w-sm max-w-96 mx-auto'>
                <label htmlFor='list-name' className='font-semibold text-left mt-24 text-md mb-2'>Shopping List Name <span className='text-rose-400'>*</span></label>
                <input type="text" id="list-name" name="list-name" placeholder="e.g. Family List" className='rounded h-11 bg-white border-zinc-300 border px-4'/>
                <label htmlFor='list-pass' className='font-semibold text-left mt-8 text-md mb-2'>Password (Optional)</label>
                <input type="password" id="list-pass" name="list-pass" placeholder="Password" className='rounded h-11 bg-white border-zinc-300 border px-4'/>
                <button className='md:text-md text-md text-neutral-100 bg-stone-950 rounded-md px-4 md:py-3 py-2 hover:bg-neutral-700 mt-8'>Generate List Link</button>
            </form>
        </div>
        
    )
}