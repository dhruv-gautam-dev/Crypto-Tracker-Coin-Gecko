import BannerImage from "../../assets/BannerImage.jpg";

function Banner() {
  return (
    <div>
      <img
        className="w-full h-[25rem] relative"
        // src="src\assets\bannerImage.jpg"
        src={BannerImage}
        alt=""
      />
      <div className="absolute top-20 left-0 right-0 ml-200px w-[20rem]">
        <div className="flex flex-col gap-4 ml-44">
          <div className="font-semibold text-white w-300 text-9xl ">
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
