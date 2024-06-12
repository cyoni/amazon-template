"use client"
import Image from "next/image"
import React from "react"
import { Input } from "./ui/input"
import { CiSearch } from "react-icons/ci"
import { TiShoppingCart } from "react-icons/ti"
import { CgMenu } from "react-icons/cg"
import { signInAction } from "@/serverActions"
import { useSelector } from "react-redux"
import { userSelector } from "@/selectors/user.selector"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { cartAmountSelector } from "@/selectors/general.selector"

function Header() {
  const session = useSession()
  const isAuthenticated = session.status === "authenticated"
  const user = isAuthenticated ? session.data.user : null

  const cartAmount = useSelector(cartAmountSelector)
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex items-center bg-[#131921] p-1 py-2">
        <div className="pl-2 flex items-center flex-grow">
          <div className="flex-grow md:flex-grow-0">
            <Link href="/">
              <Image
                src={"/icons/logo.png"}
                width={100}
                height={100}
                objectFit="contain"
                alt="logo"
                className="bg-clip-text bg-white text-white mt-2 h-[40px] w-[100px] "
              />
            </Link>
          </div>
          <div className=" bg-yellow-500 hover:bg-yellow-600 hidden ml-5 sm:flex items-center rounded-md flex-grow">
            <Input className="rounded-r-none rounded-l-md " />
            <CiSearch className="w-12 cursor-pointer " size={20} />
          </div>

          <div className="flex items-center leading-4 text-xs text-white space-x-6 px-10 ">
            <div className="link text-nowrap">
              <p onClick={() => signInAction()}>
                Hello {isAuthenticated ? user.name : "guest"},
              </p>
              <p className="font-extrabold md:text-sm ">
                {isAuthenticated ? "Account & Lists" : "Sign in"}
              </p>
            </div>
            <div className="link text-nowrap">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm ">& Orders</p>
            </div>
            <div className="flex items-center link relative gap-1 mt-2">
              <div className="absolute bottom-4 right-[-5px] md:right-11 rounded-full w-4 h-4 text-center bg-yellow-500 text-black font-bold">
                {cartAmount}
              </div>
              <TiShoppingCart size={20} />
              <Link
                href="/checkout"
                className="hidden md:block font-extrabold md:text-sm"
              >
                Basket
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 bg-[#232f3e] p-2 px-4 text-sm text-white items-center">
        <div className="link flex items-center gap-1 pr-3">
          <CgMenu size={22} />
          Today&apos;s deal
        </div>
        <div className="link">Customer Service</div>
        <div className="link">Registry</div>
        <div className="link">Gift Cards</div>
        <div className="link">Sell</div>
      </div>
    </div>
  )
}

export default Header
