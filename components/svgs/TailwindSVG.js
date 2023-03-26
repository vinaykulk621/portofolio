import React from "react"
export function TailwindSVG({}) {
  return (
    <div className="bg-pallet">
      <div className="items-center justify-center rounded-lg bg-[#44a8b326] p-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            style={{ fillRule: "evenodd", clipRule: "evenodd" }}
            d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
            fill="url(#prefix__paint0_linear)"
          ></path>
          <defs>
            <linearGradient
              id="prefix__paint0_linear"
              x1=".667"
              y1="-6.689"
              x2="23.333"
              y2="31.089"
              gradientUnits="userSpaceOnUse"
            >
              <stop style={{ stopColor: "#2383AE" }}></stop>
              <stop style={{ stopColor: "#6DD7B9", offset: 1 }}></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-smaller md:text-small text-white">
        Tailwind CSS
      </span>
    </div>
  )
}
