import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex flex-col bg-rose-100">
      <div className="hidden bg-rose-500 md:flex items-center pl-12 text-rose-50 h-5/6 ">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-[3rem]">
            Become a member and enjoy personalized recommendations, early-bird
            promotions, and the latest in fragrance trends.
          </h1>
        </div>
      </div>
      <div className="hidden pl-12 flex-1 md:flex items-center justify-between max-w-2xl">
        <p className="text-3xl text-rose-600 font-bold font-serif -mt-7">
          <span className="text-6xl ">𓃬</span>toofani perfume's
        </p>
        {/* social media group icons */}
        <div className="flex gap-x-3">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-200 hover:fill-white  hover:bg-rose-500
            transition-all"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-200 hover:fill-white  hover:bg-rose-500
            transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-5"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-200 hover:fill-white  hover:bg-rose-500
            transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="size-5"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* form */}
      <div className="bg-white rounded-md max-w-100 md:w-100 shadow-xl static md:absolute right-16 top-16 p-10 flex flex-col space-y-4 md:space-y-5">
        <p className="md:hidden text-xl text-rose-600 font-bold font-serif -mt-7 flex flex-col items-center">
          <span className="text-6xl ">𓃬</span>
          <span>toofani perfume's</span>
        </p>
        {[
          "first name",
          "last name",
          "phone number",
          "email address",
          "pin code",
          "street address",
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <label className="capitalize text-gray-500 text-sm font-medium">
              {item}
            </label>
            <input
              type="text"
              placeholder={`enter your ${item}`}
              className="border-b focus:outline-none placeholder:font-regular placeholder-gray-200 placeholder:text-sm pb-2 focus:border-rose-500 focus:placeholder-pink-500 transition-colors"
            />
          </div>
        ))}
        <button className="bg-rose-500 text-white w-full capitalize py-4 rounded-md hover:bg-rose-700  transition-all">
          sign up
        </button>
      </div>
    </main>
  );
}
