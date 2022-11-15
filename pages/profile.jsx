import Head from "next/head"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

const Profile = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-50">
        <Head>
          <title>Profile - Pari Opticals</title>
          <meta
            name="description"
            content="Shop Spectacles at Pari Opticals! See Clear See Better..."
          />
          <link
            rel="shortcut icon"
            href="/assets/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        </Head>
        <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
          You are not logged in !
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="inline-flex cursor-pointer justify-center space-x-3 rounded-lg border px-5 py-3 text-center hover:bg-gray-100 font-medium shadow-sm items-center"
            onClick={() => signIn()}
          >
            Sign In To Continue
          </button>
          <Link href="/">
            <button className="inline-flex cursor-pointer justify-center space-x-3 rounded-lg border px-5 py-3 text-center hover:bg-gray-100 font-medium shadow-sm items-center">
              Return To Home Page
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="custom-scrollbar">
      <Head>
        <title>Profile - Pari Opticals</title>
        <meta
          name="description"
          content="Shop Spectacles at Pari Opticals! See Clear See Better..."
        />
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main className="py-3 md:py-6 lg:py-10 max-w-5xl mx-auto">
        <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
          Profile
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-16">
            <Image
              className="rounded-full mx-auto cursor-not-allowed"
              src={session?.user?.image}
              width={200}
              height={200}
              alt="Profile Photo"
            />
          </div>
          <div>
            <form className="space-y-4 md:space-y-6 p-10">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 cursor-not-allowed"
                  value={session.user.name}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 cursor-not-allowed"
                  value={session.user.email}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Phone Number
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="9999999999"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <h1 className="py-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:py-6 md:text-3xl lg:py-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
            Address
          </h1>
          <form className="space-y-4 md:space-y-6 p-10">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Full Address
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="House No, Society Name, Area, City..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                State
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Gujarat..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Country
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 cursor-not-allowed"
                value="India"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Pincode
              </label>
              <input
                type="number"
                placeholder="999999"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-black border-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-100 hover:bg-gray-200"
            >
              Update Profile
            </button>
          </form>
          <button
            type="submit"
            className="w-full text-white border-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 hover:bg-red-600"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
