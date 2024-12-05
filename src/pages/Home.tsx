import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import Cards from '../components/Cards'
import shoppingItems from '../assets/shopping-items.png'
import linkingImg from '../assets/linking.png'

export default function Home() {
    return (
        <>
            <header className="bg-sage">
                    <Navbar/>
                    <Hero/>
            </header>
            <section className="flex md:flex-row flex-col md:gap-x-24 gap-y-12 md:justify-center items-center p-10 max-w-7xl mx-auto">
                <Cards img={shoppingItems} title="Group-friendly shopping solution" body="Add items and organize with an unlimited amount of friends—instantly synced!" />
                <Cards img={linkingImg} title="Smart linking for shopping items" body="Add URLs directly to your list—it's just one simple and quick click!"/>
            </section>
            <section className='mt-16 md:max-w-6xl max-w-auto mx-auto mb-24'>
                <CallToAction/>
            </section>
      </>
    );
}