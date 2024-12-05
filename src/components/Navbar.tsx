import { Link } from 'react-router-dom';

export default function Navbar(props: {getStarted: boolean}) {

    const {getStarted} = props;

    return (
        <div className="flex justify-between items-center text-l p-10 max-w-7xl mx-auto">
          <Link to="/">Logo</Link>
          <nav>
            <a href="#">Pricing</a>
            <a href="#" className="ml-10">About</a>
            {getStarted ? <Link to="/create" className='text-sm ml-10 text-neutral-100 bg-stone-950 rounded-md px-4 py-2 hover:bg-neutral-700'>Get started</Link> : null}
          </nav>
        </div>
    )
}