import { GetServerSideProps } from "next"
import Head from "next/head"
import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Product from "../../components/Product"
import { fetchProducts } from "../../utils/fetchProducts"

interface Props {
  products: Product[]
}

const ComputerGlasses = ({ products }: Props) => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-600/70 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent h-screen overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Head>
        <title>Computer Glasses - Pari Opticals</title>
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
      <main className="py-3 md:py-6 lg:py-10">
        <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
          Computer Glasses
        </h1>
        <div className="mx-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ComputerGlasses

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts()
  return {
    props: { products },
  }
}
