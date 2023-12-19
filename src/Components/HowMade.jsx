
function HowMade({bg}) {
  return (
    <div className={`bg-[${bg}] container mx-auto px-6 py-12`}>
      <h2 className="text-center mb-6 text-[#212529] font-semibold text-4xl">See how your shoes are made</h2>
      <p className="text-center text-xl text-[#979a9b] md:w-3/5 mx-auto mb-14">Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center">
        <div className="mb-4 md:mb-0">
          <div className="mb-4 md:mb-20">
            <span className="text-[#f6aa28] font-medium text-lg">01.</span>
            <h3 className="text-[#212529] text-3xl my-3">Pet canvas</h3>
            <p className="text-xl text-[#979a9b] md:w-3/4">Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
          </div>
          <div>
            <span className="text-[#f6aa28] font-medium text-lg">02.</span>
            <h3 className="text-[#212529] text-3xl my-3">Algae foam + vegan glue</h3>
            <p className="text-xl text-[#979a9b] md:w-3/4">Enim tincidunt donec vulputate magna pharetra mattis in</p>
          </div>
        </div>
        <div className="col-span-2">
          <img className="" src="/images/recycled-shoe-store-how-shoes-are-made-image.png" alt="" />
        </div>
        <div>
          <div className="mt-4 md:mt-0">
            <div className="mb-4 md:mb-20">
              <p className="text-[#f6aa28] font-medium text-lg text-end">03.</p>
              <h3 className="text-[#212529] text-3xl my-3 text-end">Organic cotton</h3>
              <p className="text-xl text-[#979a9b] md:w-3/4 text-end ml-auto">A vel ipsum, sed dignissim elementum ultrices amet</p>
            </div>
            <div>
              <p className="text-[#f6aa28] font-medium text-lg text-end">04.</p>
              <h3 className="text-[#212529] text-3xl my-3 text-end">Upcycled plastic bottles</h3>
              <p className="text-xl text-[#979a9b] md:w-3/4 text-end ml-auto">Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowMade;
