import imgImage2 from "./0d3328b2f8456d5c6d7e12880ddc7fc0b8a815ac.png";

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[32px] size-full">
      <div className="absolute bg-white h-[676px] left-0 top-0 w-[1910px]" />
      <div className="absolute h-[676px] left-0 top-0 w-[1910px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}