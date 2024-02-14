export default function ShapedButton({ text }) {
  return (
    <span className="new flex">
      <div className="parent relative bg-red-500">{text}</div>
      <div className="corner"></div>
    </span>
  );
}
export function SponsorButton({ text }) {
  return (
    <span className="new flex">
      <div className="parent relative bg-red-500">
        <div className="parent scale-[1.17] bg-white">{text}</div>
      </div>
      <div className="corner scale-150"></div>
    </span>
  );
}
