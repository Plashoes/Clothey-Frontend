import { Link } from "react-router-dom";
function Features() {
  return (
    <div className="px-6 py-12 md:py-[120px] bg-cover bg-center" style={{ backgroundImage: "url(/images/recycled-shoe-store-cta-image-bg.jpg)" }}>
      <h2 className="text-center text-white text-4xl lg:text-7xl font-semibold mb-6">Better for People & the Planet</h2>
      <p className="text-center text-white text mb-6">Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-center sm:space-x-4 mb-8">
        <Link to="/collection/men" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP MEN</Link>
        <Link to="/collection/women" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP WOMEN</Link>
        <Link to="/collection/women" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP CHILDREN</Link>
      </div>
    </div>
  );
}

export default Features;
