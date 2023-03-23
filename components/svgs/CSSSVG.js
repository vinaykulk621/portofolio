import React from "react"
export function CSSSVG({}) {
  return (
    <div className="bg-pallet">
      <div className="items-center justify-center rounded-lg bg-[#264de426] p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path
            fill="#264de4"
            d="m18.824 0-1.61 17.996L9.997 20l-7.203-2L1.187 0Zm0 0"
          ></path>
          <path
            fill="#ebebeb"
            d="M10.004 8.148H4.867l.2 2.207h4.937ZM10.004 3.68H4.469l.199 2.207h5.336ZM5.164 11.46l.309 3.466 4.523 1.254h.008v-2.297h-.008l-2.46-.664-.157-1.758Zm0 0"
          ></path>
          <path
            fill="#fff"
            d="m12.715 10.355-.254 2.864-2.465.664v2.297l4.527-1.254.032-.371.52-5.813.054-.594.398-4.468h-5.53v2.207h3.112l-.203 2.261h-2.91v2.207Zm0 0"
          ></path>
        </svg>
      </div>
      <span className="text-smaller md:text-small text-white">CSS</span>
    </div>
  )
}
