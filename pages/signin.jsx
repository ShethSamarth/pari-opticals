import React from "react"
import { signIn } from "next-auth/react"
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"

const SignIn = () => {
  const router = useRouter()
  const { callbackUrl = `${process.env.NEXTAUTH_URL}` } = router.query

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Sign In - Pari Opticals</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <Image
          className="pb-10"
          width={400}
          height={300}
          src="/assets/logo.png"
          alt="Logo"
        />
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-4 md:space-y-6">
              <button
                onClick={() => signIn("google", { callbackUrl })}
                className="inline-flex cursor-pointer justify-center space-x-3 rounded-lg border px-5 py-3 text-center hover:bg-gray-100 font-medium shadow-sm items-center w-full"
              >
                <BsGoogle className="mr-2 text-red-500" />
                Log In With Google
              </button>
              <button
                onClick={() => signIn("twitter", { callbackUrl })}
                className="inline-flex cursor-pointer justify-center space-x-3 rounded-lg border px-5 py-3 text-center hover:bg-gray-100 font-medium shadow-sm items-center w-full"
              >
                <BsTwitter className="mr-2 text-blue-500 text-xl" />
                Log In With Twitter
              </button>
              <button
                onClick={() => signIn("github", { callbackUrl })}
                className="inline-flex cursor-pointer justify-center space-x-3 rounded-lg border px-5 py-3 text-center hover:bg-gray-100 font-medium shadow-sm items-center w-full"
              >
                <BsGithub className="mr-2 text-blue-500" />
                Log In With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
