import { Link } from "react-router-dom";

export default function Navbar({
  getStarted,
}: {
  getStarted: boolean;
}): JSX.Element {
  return (
    <div className={`${getStarted ? "bg-sage" : null}`}>
      <div className="text-l mx-auto flex max-w-7xl items-center justify-between p-10">
        <Link to="/">Logo</Link>
        <nav>
          <a href="#">Pricing</a>
          <a href="#" className="ml-10">
            About
          </a>
          {getStarted && (
            <Link
              to="/create"
              className="ml-10 rounded-md bg-stone-950 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700"
            >
              Get started
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
