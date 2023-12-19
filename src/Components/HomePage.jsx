import Search from "./Search";
import HeroSection from "./HeroSection";
import Sponsors from "./Sponsors";
import Info from "./Info";
import HowMade from "./HowMade";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import Recycle from "./Recycle";
import Testimonials from "./Testimonials";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function Homepage() {
  return (
    <div>
      <Search />
      <HeroSection />
      <Sponsors />
      <Info />
      <HowMade bg={"#f1f1ef"}/>
      <BestSellers />
      <div className="md:flex xl:space-x-10 xl:p-10">
        <div className="md:flex-1 bg-cover bg-center flex flex-col space-y-3 justify-center items-center px-12 py-20 xl:py-[100px]" style={{ backgroundImage: "url(/images/recycled-shoe-store-shop-men-image-thumbnail.jpg)" }}>
          <h2 className="text-white text-5xl font-semibold">Men</h2>
          <button className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Shop For Men</button>
        </div>
        <div className="md:flex-1 xl:py-[140px] bg-cover bg-center flex flex-col space-y-6 justify-center items-center px-12 py-20" style={{ backgroundImage: "url(/images/recycled-shoe-store-shop-women-image-tumbnail.jpg)" }}>
          <h2 className="text-white text-5xl font-semibold">Women</h2>
          <button className="px-4 py-2 text-white text-xl border-2 border-white hover:text-[#212529] hover:bg-white duration-300">Shop For Women</button>
        </div>
      </div>
      <NewArrivals />
      <Recycle />
      <Testimonials />
      <Features />
      <FeaturesSmall />
      <Footer />
    </div>
  );
}

export default Homepage;
