import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React from "react"
import Currency from "react-currency-formatter"
import { fetchProducts } from "../../utils/fetchProducts"
import { stringify } from "querystring"
import { useDispatch } from "react-redux"
import { urlFor } from "../../sanity"
import Head from "next/head"
import { addToBasket } from "../../redux/basketSlice"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"
import Image from "next/image"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

interface Props {
  products: Product[]
}

const ProductPage = ({ products }: Props) => {
  const router = useRouter()
  const parsedURLQueryParams = stringify(router.query)
  const ret = parsedURLQueryParams.replace("slug=", "")
  const product = products.filter(function (element) {
    return element.slug.current === ret
  })
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    dispatch(addToBasket(product[0]))
    toast.success(`${product[0].title} added to cart`, {
      position: "bottom-center",
    })
  }

  return (
    <div className="font-body text-gray-600 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-600/70 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent md:h-screen overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Head>
        <title>{product[0].title || "Product"} - Pari Opticals</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <div className="relative mx-auto flex flex-wrap lg:w-4/5 overflow-hidden py-24 lg:py-28 px-10">
        <Image
          alt="ecommerce"
          className="h-auto w-full rounded object-contain object-center lg:w-1/2"
          width={500}
          height={500}
          src={urlFor(product[0].image[0]).url()}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
          <h2 className="text-lg uppercase tracking-widest text-gray-500">
            Pari Opticals
          </h2>
          <h1 className="mb-1 text-3xl font-medium text-gray-900">
            {product[0].title}
          </h1>
          <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-200 pb-5">
            <span className="mr-3 text-lg">Color : {product[0].color}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium text-gray-900">
              <Currency quantity={product[0].price} currency="INR" />
            </span>
            <button className="btn" onClick={addItemToBasket}>
              <ShoppingBagIcon className="h-6 w-6 mr-2" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts()
  return {
    props: { products },
  }
}
