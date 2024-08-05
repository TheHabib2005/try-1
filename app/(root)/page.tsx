
import Login from "@/components/Btn";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className=" grid  gap-4  pb-4 md:grid-cols-6 md:grid-rows-2   mx-auto mt-5">
        <div className="md:col-span-4 md:row-span-2">
          <Link
            className="relative block aspect-square h-full w-full"
            href="/product/66b0312513f0ad985eb692aa"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg={1}
                src="/9-1696824899-Photoroom.png"
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[500px] w-[350px] "


                style={{ color: "transparent" }}
              />
              {/* <LazyImage src="" /> */}
              <div className="absolute bottom-0 left-0 flex w-full px-8 pb-4 @container/label lg:px-25 lg:pb-[15%]">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  capitalize text-[15px] flex-grow pl-2 leading-[25px] tracking-tight">
                    Step Commender 2
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    Tk 1490

                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div >
        <div className="md:col-span-2 md:row-span-1">
          <Link
            className="relative block aspect-square h-full w-full"
            href="/product/66a381f11feec319437e0cb0"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"
                width={500}
                height={500}
                decoding="async"
                data-nimg={1}
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[400px] w-[200px]"
                src="/1_402729a4-51f1-4264-8542-ecdcdb62f1d9_300x-Photoroom.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                    {"Adidas Men's ADILETTE"}
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    Tk 1990

                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <Link
            className="relative block aspect-square h-full w-full"
            href="/products/acme-cup"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"

                decoding="async"
                data-nimg={1}
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[400px] w-[200px]"
                src="/1-1697266226-Photoroom.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                    stepfoot wear AXE 2
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    Tk 1190
                    <span className="ml-1 inline hidden @[275px]/label:inline">

                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section >

      <section className="py-10">
        <div>
          <h1 className="text-zinc-800 dark:text-white font-semibold text-2xl">Browse By Category</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:py-10 py-5">
          <a href="/products/smartphone">
            <div className="w-full h-[200px] py-5 dark:bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fmobile.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                smartPhone
              </p>
            </div>
          </a>
          <Link href="/products/laptop">
            <div className="w-full h-[200px] py-5 bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Flaptop.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                laptop
              </p>
            </div>
          </Link>
          <Link href="/products/skincare">
            <div className="w-full h-[200px] py-5 bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fskincare.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                skinCare
              </p>
            </div>
          </Link>
          <Link href="/products/sunglass">
            <div className="w-full h-[200px] py-5 bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fsunglass.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                sunglass
              </p>
            </div>
          </Link>
          <Link href="/products/t-shirt">
            <div className="w-full h-[200px] py-5 bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Ft-shirt.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                t-shirt
              </p>
            </div>
          </Link>
          <Link href="/products/watch">
            <div className="w-full h-[200px] py-5 bg-zinc-950 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fwatch.png&w=128&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                watch
              </p>
            </div>
          </Link>
        </div>

      </section>
      <Login />
    </>

  );
}