function Testimonials() {
  const cardsInfo = [
    {
      id: 1,
      text: "Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer.",
      image: "/images/recycled-shoe-store-customer-avatar-image-3.jpg",
      name: "JULIA KEYS",
    },
    {
      id: 2,
      text: "Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus.",
      image: "/images/recycled-shoe-store-customer-avatar-image-2.jpg",
      name: "LUIS ADRIAN",
    },
    {
      id: 3,
      text: "Tortor suspendisse tincidunt accumsan platea pellentesque hac.",
      image: "/images/recycled-shoe-store-customer-avatar-image-1.jpg",
      name: "MARIA ANNA",
    },
  ];
  return (
    <div className="bg-white container mx-auto px-6 py-12">
      <h2 className="text-center text-3xl font-semibold mb-12">Our Customers speak for us</h2>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {cardsInfo.map((card) => {
          return (
            <div key={card.id} className="border-2 border-[#e4e6e7] p-6 basis-1/3">
              <div>
                <i className="fa-solid fa-star text-[#f6aa28]"></i>
                <i className="fa-solid fa-star text-[#f6aa28]"></i>
                <i className="fa-solid fa-star text-[#f6aa28]"></i>
                <i className="fa-solid fa-star text-[#f6aa28]"></i>
                <i className="fa-solid fa-star text-[#f6aa28]"></i>
              </div>
              <p className="text-lg font-semibold my-4">&quot;{card.text}&quot;</p>
              <div className="flex space-x-4 items-center">
                <img className="rounded-full" src={card.image} alt="" />
                <span className="text-[#979a9b]">{card.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
