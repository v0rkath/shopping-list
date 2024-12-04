import './App.css'
import listImage from './assets/final-list.png'
import shoppingItems from './assets/shopping-items.png'
import linkingImg from './assets/linking.png'

function App() {

  return (
    <>
      <header className="bg-sage">
        <div className="flex justify-between items-center text-l p-10 max-w-7xl mx-auto">
          <a href="#">Logo</a>
          <nav>
            <a href="#">Pricing</a>
            <a href="#" className="ml-10">About</a>
            <a href="#" className="ml-10 text-neutral-100 bg-stone-950 rounded-md px-4 py-2 hover:bg-neutral-700">Get started</a>
          </nav>
        </div>
        <div>
          <h1 className="fade-in-anim md:text-7xl text-5xl mt-6 md:max-w-xl mx-w-sm mx-auto font-cormorant font-bold">Collaborate. Shop. <span className='italic'>Simplify.</span></h1>
          <p className="fade-in-anim md:text-xl md:max-w-lg max-w-sm mx-auto text-zinc-500 my-12">Effortlessly collaborate on shopping lists, making it simple for everyone to add, organize, and shop <span className='font-semibold underline'>together</span>.</p>
          <a href="#" className="md:text-xl text-lg text-neutral-100 bg-stone-950 rounded-md md:px-8 px-4 md:py-4 py-2 hover:bg-neutral-700">Get started</a>
          <img src={listImage} className="fade-in-anim md:max-w-3xl max-w-sm mx-auto md:px-0 my-16 drop-shadow-img rounded-t-3xl"/>
        </div>
      </header>
      <section className="flex md:flex-row flex-col md:gap-x-24 gap-y-12 md:justify-center items-center p-10 max-w-7xl mx-auto">
        <div className="max-w-lg border-solid border border-zinc-200 rounded-xl">
          <div className='p-8'>
            <img src={shoppingItems} className='max-w-sm mb-4 max-h-28 mx-auto'/>
            <h2 className='font-cormorant text-3xl font-semibold max-w-xs mx-auto my-4'>Group-friendly shopping solution</h2>
            <p className='text-sm text-zinc-500 max-w-xs mx-auto my-4'>Add items and organize with an unlimited amount of friends—instantly synced!</p>
          </div>
        </div>
        <div className="max-w-lg border-solid border border-zinc-200 rounded-xl">
          <div className='p-8'>
            <img src={linkingImg} className='max-w-sm mb-4 max-h-28 mx-auto'/>
            <h2 className='font-cormorant text-3xl font-semibold max-w-xs mx-auto my-4'>Smart linking for shopping items</h2>
            <p className='text-sm text-zinc-500 max-w-xs mx-auto my-4'>Add URLs directly to your list—it's just one simple and quick click!</p>
          </div>
        </div>
      </section>
      <section className='mt-16 md:max-w-6xl max-w-auto mx-auto mb-24'>
        <div className='bg-sage md:rounded-3xl rounded-none'>
          <h2 className='md:text-8xl text-6xl font-cormorant font-bold pt-12 px-12 text-left md:max-w-xl max-w-md'>Fee <span className='italic'>free</span> organization</h2>
          <p className='md:text-xl text-md text-zinc-500 text-left px-12 pt-8 pb-12'>Get suggestions based on previous trending product purchases.</p>
        </div>
      </section>
    </>
  )
}

export default App
