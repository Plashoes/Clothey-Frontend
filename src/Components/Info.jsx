function Info() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-10 md:gap-16 md:flex-row items-center">
      <div className="flex-1">
        <img src="./public/images/recycled-shoe-store-home-about-image.jpg" alt="" />
      </div>
      <div className="flex-1">
        <span className="text-[#f6aa28] font-medium text-lg">ABOUT US</span>
        <h2 className="text-[#212529] text-3xl lg:text-5xl md:w-3/4 my-6 md:my-2 lg:my-6 font-semibold">Selected materials designed for comfort and sustainability</h2>
        <p className="mb-6 md:mb-2 lg:mb-6 md:w-3/4 text-[#979a9b] text-lg">Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
        <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">READ MORE</button>
      </div>
    </div>
  );
}

export default Info;
