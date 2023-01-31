import React, { useState } from "react"
import {
  Bars3Icon,
  MapPinIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import { selectBasketItems } from "../redux/basketSlice"
import { signIn, useSession } from "next-auth/react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const items = useSelector(selectBasketItems)
  const { data: session } = useSession()
  return (
    <header className="sticky top-0 z-20 shadow-md">
      <nav className="flex items-center justify-between bg-white px-2 py-4 pr-3 shadow-sm lg:py-3 lg:px-10">
        <Link href="/" className="relative w-60 md:w-96">
          <Image
            className="opacity-75 transition hover:opacity-100"
            src="/assets/logo.png"
            width={350}
            height={200}
            priority
            alt="Logo"
          />
        </Link>
        <ul className="-ml-4 flex space-x-5 font-semibold">
          <Link href="/" className="navLinks">
            Home
          </Link>
          <Link href="/collections" className="navLinks">
            Collections
          </Link>
          <Link href="/collections/computer-glasses" className="navLinks">
            Computer Glasses
          </Link>
          <Link href="/contact" className="navLinks">
            Contact
          </Link>
        </ul>
        <div className="flex items-center space-x-5">
          {/* {session ? (
            <Link
              href="/profile"
              className="-mr-5 h-6 w-6 cursor-pointer md:-mr-0"
            >
              <Image
                src={session.user?.image || "/assets/avatar.png"}
                alt="Profile Photo"
                width={34}
                height={34}
                className="rounded-full"
              />
            </Link>
          ) : (
            <UserIcon
              className="-mr-5 h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100 md:-mr-0"
              onClick={() => signIn()}
            />
          )} */}
          <Link href="/contact">
            <MapPinIcon className="headerIcon hidden md:flex" />
          </Link>
          <Link href="/checkout">
            <div className="relative cursor-pointer">
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-[10px] text-white">
                  {items.length}
                </span>
              )}
              <ShoppingBagIcon className="headerIcon" />
            </div>
          </Link>
          <div onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <XMarkIcon className="headerIcon inline lg:hidden" />
            ) : (
              <Bars3Icon
                onClick={() => setShowMenu(!showMenu)}
                className="headerIcon inline lg:hidden"
              />
            )}
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="top-13 absolute left-0 z-10 w-full bg-white">
          <ul>
            <Link
              href="/"
              onClick={() => setShowMenu(!showMenu)}
              className="navLinksMenu border-t"
            >
              Home
            </Link>
            <Link
              href="/collections"
              onClick={() => setShowMenu(!showMenu)}
              className="navLinksMenu"
            >
              Collections
            </Link>
            <Link
              href="/collections/computer-glasses"
              onClick={() => setShowMenu(!showMenu)}
              className="navLinksMenu"
            >
              Computer Glasses
            </Link>
            <Link
              href="/contact"
              onClick={() => setShowMenu(!showMenu)}
              className="navLinksMenu"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
