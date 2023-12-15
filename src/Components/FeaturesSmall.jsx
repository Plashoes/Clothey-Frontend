
function FeaturesSmall() {
  return (
    <div className="px-6 py-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 xl:space-x-28">
      <div className="flex flex-row space-x-3 text-[#212529] font-bold text-xl items-center">
        <i className="fa-solid fa-lock"></i>
        <span>Secure Payment</span>
      </div>
      <div className="flex flex-row space-x-3 text-[#212529] font-bold text-xl items-center">
        <i className="fa-solid fa-truck"></i>
        <span>Express Shipping</span>
      </div>
      <div className="flex flex-row space-x-3 text-[#212529] font-bold text-xl items-center">
        <i className="fa-solid fa-rotate"></i>
        <span>Free Return</span>
      </div>
    </div>
  );
}

export default FeaturesSmall;
