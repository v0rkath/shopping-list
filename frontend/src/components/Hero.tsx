import listImage from "../assets/final-list.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="fade-in-anim mx-w-sm mx-auto pt-12 font-cormorant text-5xl font-bold md:max-w-xl md:text-7xl">
        Collaborate. Shop. <span className="italic">Simplify.</span>
      </h1>
      <p className="fade-in-anim mx-auto my-12 max-w-sm text-zinc-500 md:max-w-lg md:text-xl">
        Effortlessly collaborate on shopping lists, making it simple for
        everyone to add, organize, and shop{" "}
        <span className="font-semibold underline">together</span>.
      </p>
      <Link
        to="/create"
        className="text-md rounded-md bg-stone-950 px-4 py-2 text-neutral-100 hover:bg-neutral-700 md:px-8 md:py-4 md:text-xl"
      >
        Get started
      </Link>
      <img
        src={listImage}
        className="fade-in-anim mx-auto my-16 max-w-sm rounded-t-3xl drop-shadow-img md:max-w-3xl md:px-0"
      />
    </div>
  );
}
