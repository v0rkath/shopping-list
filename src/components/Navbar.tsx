import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center text-l p-10 max-w-7xl mx-auto">
          <a href="#">Logo</a>
          <nav>
            <a href="#">Pricing</a>
            <a href="#" className="ml-10">About</a>
            <Link to="/create" className='ml-10 text-neutral-100 bg-stone-950 rounded-md px-4 py-2 hover:bg-neutral-700'>Get started</Link>
          </nav>
        </div>
    )
}