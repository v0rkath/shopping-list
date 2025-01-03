import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import Cards from "../components/Cards";
import shoppingItems from "../assets/shopping-items.png";
import linkingImg from "../assets/linking.png";

export default function Home(): JSX.Element {
  return (
    <>
      <header className="bg-sage">
        <Hero />
      </header>
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-y-12 p-10 md:flex-row md:justify-center md:gap-x-24">
        <Cards
          img={shoppingItems}
          title="Group-friendly shopping solution"
          body="Add items and organize with an unlimited amount of friends—instantly synced!"
        />
        <Cards
          img={linkingImg}
          title="Smart linking for shopping items"
          body="Add URLs directly to your list—it's just one simple and quick click!"
        />
      </section>
      <section className="max-w-auto mx-auto mb-24 mt-16 md:max-w-6xl">
        <CallToAction />
      </section>
    </>
  );
}
