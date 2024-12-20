function Banner() {
  return (
    <div>
      <img
        className="w-full h-[25rem] relative"
        src="src\assets\bannerImage.jpg"
        alt=""
      />
      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap -4">
          <div className="text-5xl font-semibold tect-white">
            Cripto Tracker
          </div>
          <div className="text-sm font-semibold text-center text-white top-10">
            Get all info regarding cripto currency
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
