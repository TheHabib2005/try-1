"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react'

const Pagination = ({ paginationItems = 5 }: { paginationItems: number }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter()
  const path = usePathname()
  const [currentPage, setCurrentPage] = useState<any>(params.get("page") || 1);
  useLayoutEffect(() => {
    if (params.get("page")) {
      setCurrentPage(Number(params.get("page")))
    } else {
      params.set("page", currentPage)
      router.replace(`${path}?${params}`)
    }
  }, [])
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button

        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-white/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">
        {
          new Array(Math.round(paginationItems / 4)).fill("").map((item, index) => (
            <button
              onClick={() => {
                setCurrentPage(index + 1)
                params.set("page", String(index + 1))
                router.replace(`${path}?${params}`)
              }}
              key={index}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg ${currentPage === index + 1 ? "bg-[#000AFF]" : "bg-[#313131]"} text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  text-[16px]">
                {index + 1}
              </span>
            </button>
          ))
        }
      </div>
      <button

        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>

  )
}

export default Pagination