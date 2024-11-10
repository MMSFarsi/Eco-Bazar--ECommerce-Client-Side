import bannerImage from "../../../public/images/banerImage.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-4 p-4 md:p-8">
      {/* Image Section */}
      <div className="col-span-12 md:col-span-7 flex justify-center md:justify-start">
        <img src={bannerImage} alt="Banner" className="w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="col-span-12 md:col-span-4 text-center md:text-left space-y-4">
        <h2 className="text-green-500 text-lg md:text-xl">WELCOME TO SHOPERY</h2>
        <h1 className="text-3xl md:text-5xl font-bold">Fresh And Healthy Organic Food</h1>
        <p className="text-sm md:text-base">Free Shipping on all your orders. We deliver, you enjoy.</p>
      </div>
    </div>
  );
};

export default Hero;
