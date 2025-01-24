import BannerImage from "../../assets/BannerImage.jpg";

function Banner() {
  return (
    <div>
      <img
        className="w-full h-[25rem] object-right relative"
        // src="src\assets\bannerImage.jpg"
        src={BannerImage}
        alt=""
      />
      <div className="absolute left-0 right-0 flex items-center justify-center top-20">
        <div className="px-4 text-center">
          <div className="text-4xl font-bold text-white md:text-6xl lg:text-8xl drop-shadow-md ">
            Crypto Tracker
          </div>
        </div>
      </div>
      <div className="absolute w-full text-2xl font-semibold text-center text-white mt-14 top-80">
        Get all info regarding crypto currency
      </div>
    </div>
  );
}

export default Banner;
