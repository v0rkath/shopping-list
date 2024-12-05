import listImage from '../assets/final-list.png'
import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <div className='text-center'>
          <h1 className="fade-in-anim md:text-7xl text-5xl mt-6 md:max-w-xl mx-w-sm mx-auto font-cormorant font-bold">Collaborate. Shop. <span className='italic'>Simplify.</span></h1>
          <p className="fade-in-anim md:text-xl md:max-w-lg max-w-sm mx-auto text-zinc-500 my-12">Effortlessly collaborate on shopping lists, making it simple for everyone to add, organize, and shop <span className='font-semibold underline'>together</span>.</p>
          <Link to="/create" className='md:text-xl text-md text-neutral-100 bg-stone-950 rounded-md md:px-8 px-4 md:py-4 py-2 hover:bg-neutral-700'>Get started</Link>
          <img src={listImage} className="fade-in-anim md:max-w-3xl max-w-sm mx-auto md:px-0 my-16 drop-shadow-img rounded-t-3xl"/>
        </div>
    )
}