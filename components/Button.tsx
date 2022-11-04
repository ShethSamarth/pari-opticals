import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import React from "react"

interface Props {
  title: string
  onClick?: () => void
  width?: string
  loading?: boolean
  padding?: string
  Icon1?: boolean
  Icon2?: boolean
}

function Button({
  title,
  onClick,
  width,
  loading,
  padding,
  Icon1,
  Icon2,
}: Props) {
  return (
    <button
      className={`btn ${width ? width : "w-auto"} ${padding}`}
      onClick={onClick}
    >
      <span className="flex items-center font-semibold">
        {Icon1 && (
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        )}
        {Icon2 && <ShoppingBagIcon className="mr-2 h-5 w-5" />}
        {loading ? "Loading..." : title}
      </span>
    </button>
  )
}

export default Button
