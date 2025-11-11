import imgHomeMockup from "/src/assets/placeholder.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1024px] left-0 top-0 w-[1536px]" data-name="Home-Mockup">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomeMockup} />
      </div>
    </div>
  );
}