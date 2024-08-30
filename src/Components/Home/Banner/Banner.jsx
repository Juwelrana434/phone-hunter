const Banner = () => {
  return (
    <div>
      <h1 className="text-center text-[2rem] font-bold my-6">
        
        Apple Iphone 13 Pro Max
      </h1>
      <p className="lg:md:text-center text-left">
        Upgrade your life with the latest smartphones! Experience unbeatable
        performance, stunning design, and powerful features at prices you won’t
        believe. Shop now and get exclusive offers before they are gone! Your
        perfect phone is just a click away.
      </p><div className="flex items-center justify-center"><button className="my-6 bg-[#0D6EFD] px-7 py-4 text-white text-[20px] rounded-md">Buy Now</button></div>
      
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-6">
        {" "}
        <img
          src="https://www.lifewire.com/thmb/Xefm3RQ6wtUFwtYQD7vslg63Ce8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apple-iPhone-15-lineup-color-lineup-230912_big.jpg.large_2x-a6d9996e39824ffd99060b4183a1edf5.jpg"
          alt=" apple i phone"
          className="h-full w-full"
        />
        <img
          src="https://www.91-img.com/gallery_images_uploads/e/8/e8e9b098db6d33f4853d559c7aa991f5bda8d359.jpg?tr=h-630,c-at_max,q-80"
          alt="apple i phone"
          className="h-full w-full"
        />
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/6/312836839/UK/XE/SQ/4630526/apple-iphone-14-pro-128gb-gold-mobile-phone-500x500.jpg"
          alt="apple i phone"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
