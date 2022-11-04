import React from "react"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../sanity"

interface Props {
  categories: Category[]
}

const Categories = ({ categories }: Props) => {
  return (
    <div className="mx-auto max-w-6xl py-3 md:py-6 lg:py-10">
      <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
        Categories
      </h1>
      <section className="grid grid-cols-2 gap-10 px-10 lg:grid-cols-3 lg:px-0">
        {categories.slice(0, 3).map((category) => (
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
  )
}

export default Categories
