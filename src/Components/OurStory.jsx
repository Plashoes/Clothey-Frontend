import Search from "./Search";
import HowMade from "./HowMade";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
function OurStory() {
  return (
    <>
      <Search />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-7xl mb-6">Our Story</h1>
        <p className="text-center text-[#212529] text-xl xl:text-3xl font-medium md:w-[70%] mx-auto">Taking a stylish and sustainable footwear with a focus on creating a positive impact on both the world and the people</p>
      </div>
      <div className="container mx-auto px-6 py-8">
        <img src="/images/david-lezcano-NfZiOJzZgcg-unsplash.jpg" alt="" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-6">
          <div className="xl:p-6">
            <i className="fa-solid fa-hands-holding text-[#6e7051] text-2xl"></i>
            <h4 className="text-[#212529] text-xl my-4 font-medium">Ethics and equality</h4>
            <p className="text-[#979a9b] xl:text-lg">Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.</p>
          </div>
          <div className="xl:p-6">
            <i className="fa-solid fa-leaf text-[#6e7051] text-2xl"></i>
            <h4 className="text-[#212529] text-xl my-4 font-medium">Eco-design</h4>
            <p className="text-[#979a9b] xl:text-lg">Risus leo molestie a aliquam amet urna orci nisl dignissim elementum nibh felis ultrices vitae consectetur.</p>
          </div>
          <div className="xl:p-6">
            <i className="fa-solid fa-cat text-[#6e7051] text-2xl"></i>
            <h4 className="text-[#212529] text-xl my-4 font-medium">Wildlife Preservation</h4>
            <p className="text-[#979a9b] xl:text-lg">Pellentesque nunc ante augue adipiscing sed suspendisse amet sed pellentesque convallis erat nibh vivamus.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1ef] xl:mx-10 px-6 xl:px-10 py-12">
        <div className="mb-16 flex flex-col md:flex-row">
          <h3 className="text-[#212529] text-2xl font-semibold mb-4">Mission</h3>
          <div className="md:w-[75%] xl:w-[60%] ml-auto">
            <p className="text-[#979a9b] md:text-lg mb-4">Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat at dui, arcu nec id non pellentesque dolor feugiat dolor ac ac sem semper nulla dis vitae, quis elit odio nunc dignissim aliquam ipsum.</p>
            <p className="text-[#979a9b] md:text-lg">Mattis pretium nec tellus viverra phasellus sed tortor ac tincidunt adipiscing nibh eget, adipiscing sit penatibus lobortis placerat</p>
          </div>
        </div>
        <div className="mb-16 flex flex-col md:flex-row">
          <h3 className="text-[#212529] text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-[#979a9b] md:text-lg mb-4 md:w-[75%] xl:w-[60%] ml-auto">Sit etiam est, nunc sollicitudin malesuada tincidunt senectus venenatis, adipiscing nulla vel diam, lorem donec sit blandit nec tortor, diam cras ut velit nulla purus ullamcorper ornare elit bibendum augue.</p>
        </div>
      </div>
      <HowMade bg={"white"} />
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default OurStory;
