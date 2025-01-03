type CardProps = {
  img: string;
  title: string;
  body: string;
};

export default function Cards({ img, title, body }: CardProps) {
  return (
    <div className="max-w-lg rounded-xl border border-solid border-zinc-200">
      <div className="p-8">
        <img src={img} className="mx-auto mb-4 max-h-28 max-w-sm" />
        <h2 className="mx-auto my-4 max-w-xs font-cormorant text-3xl font-semibold">
          {title}
        </h2>
        <p className="mx-auto my-4 max-w-xs text-sm text-zinc-500">{body}</p>
      </div>
    </div>
  );
}
