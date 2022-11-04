import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { urlFor } from "../sanity"
import { fetchCategories } from "../utils/fetchCategory"

interface Props {
  categories: Category[]
}

const Collections = ({ categories }: Props) => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-600/70 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent h-screen overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Head>
        <title>Collections - Pari Opticals</title>
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
      <div className="mx-auto max-w-6xl py-3 md:py-6 lg:py-10">
        <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
          Categories
        </h1>
        <section className="grid grid-cols-2 gap-10 px-10 lg:grid-cols-3 lg:px-0">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/collections/${category.slug.current}`}
            >
              <Image
                width={500}
                height={500}
                src={urlFor(category.image[0]).url()}
                alt={category.title}
              />
            </Link>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Collections

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategories()
  return {
    props: { categories },
  }
}
