import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="grid md:grid-cols-2 h-full">
        <div className="bg-[url('/circle.png')] bg-red md:bg-none border-r-2 flex items-center justify-center">
          <div className="bg-white w-10/12 md:w-3/5  px-4 md:px-6 py-6 space-y-8 shadow-2xl md:shadow-none">
            <div className="text-center md:text-left">
              <h1 className="font-semibold text-3xl text-zinc-900">
                Welcome Back
              </h1>
              <p className="text-xs text-zinc-500">
                Welcome back! Please Enter Your details.
              </p>
            </div>
            {/* main form code */}
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-xs font-medium text-gray-900"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Enter Yoru E-mail Address"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-3 placeholder-gray-300"
                />
              </div>

              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-xs font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="UserEmail"
                  placeholder="Enter Your password"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-3  placeholder-gray-300"
                />
              </div>

              <fieldset className="flex">
                <legend className="sr-only">Checkboxes</legend>

                <div className="space-y-2">
                  <label
                    htmlFor="Option1"
                    className="flex cursor-pointer items-start gap-2"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        className="size-4 rounded border-gray-300"
                        id="Option1"
                      />
                    </div>

                    <div>
                      <strong className="font-medium text-sm text-gray-500">
                        Remember for 30 days
                      </strong>
                    </div>
                  </label>
                </div>
                <div className="ml-auto">
                  <Link
                    href={"#"}
                    className="font-semibold text-sm text-gray-700 hover:text-gray-500"
                  >
                    Forgot Password
                  </Link>
                </div>
              </fieldset>
              {/* main buttons group */}
              <div className="space-y-3">
                <button className="bg-black text-white w-full capitalize py-4 rounded-md hover:bg-neutral-900  transition-all">
                  sign in
                </button>
                <button className=" w-full capitalize py-3 rounded-md border-2 hover:border-gray-300 hover:shadow-md  transition-all flex items-center justify-center font-medium text-gray-700 space-x-2">
                  <img src="/google.svg" className="w-7 h-7" />{" "}
                  <span>sign in with google</span>
                </button>
              </div>
            </div>

            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link
                href="#"
                className="font-semibold text-gray-800 hover:text-gray-700 capitalize"
              >
                sign up for free
              </Link>
            </p>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/chair.jpg"
            className="object-cover object-[100%_75%]"
            fill
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
