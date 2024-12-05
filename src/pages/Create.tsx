import Navbar from '../components/Navbar'
import CreateLinkForm from '../components/CreateLinkForm'

export default function Create() {
    return (
        <div className='bg-sage h-dvh text-center'>
            <Navbar getStarted={true}/>
            <h1 className="md:text-6xl text-5xl mt-16 md:max-w-xl mx-w-sm mx-auto font-cormorant font-bold">Let's make shopping easy</h1>
            <CreateLinkForm/>
        </div>
        
    )
}