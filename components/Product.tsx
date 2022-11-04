import Image from "next/image"
import Link from "next/link"
import React from "react"
import Currency from "react-currency-formatter"
import { urlFor } from "../sanity"

interface Props {
  product: Product
}

const Product = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.slug.current}`}
      className="relative m-5 flex flex-col rounded-md border bg-white p-5"
    >
      <Image
        src={urlFor(product.image[0]).url()}
        height={400}
        width={400}
        alt="product"
      />
      <h4 className="my-3 border-t pt-2">{product.title}</h4>
      <div>
        <Currency quantity={product.price} currency="INR" />
      </div>
    </Link>
  )
}

export default Product
