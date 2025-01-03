import CreateLinkForm from "../components/forms/CreateLinkForm";

export default function Create(): JSX.Element {
  return (
    <div className="h-dvh bg-sage text-center">
      <h1 className="mx-w-sm mx-auto pt-16 font-cormorant text-5xl font-bold md:max-w-xl md:text-6xl">
        Let's make shopping easy
      </h1>
      <CreateLinkForm />
    </div>
  );
}
