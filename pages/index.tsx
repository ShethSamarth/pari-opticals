import Head from "next/head"
import Caraousel from "../components/Caraousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Link from "next/link"
import type { GetServerSideProps } from "next"
import { fetchCaraouselData } from "../utils/fetchCaraouselData"
import { fetchCategories } from "../utils/fetchCategory"
import Categories from "../components/Categories"
import { fetchProducts } from "../utils/fetchProducts"
import Product from "../components/Product"
interface Props {
  caraousel: Caraousel[]
  categories: Category[]
  products: Product[]
}

export default function Home({ caraousel, categories, products }: Props) {
  return (
    <div>
      <Head>
        <title>Pari Opticals</title>
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
      <Caraousel caraousel={caraousel} />
      <Categories categories={categories} />
      <div className="py-3 md:py-6 lg:py-10">
        <h1 className="pb-3 text-center text-2xl font-bold uppercase tracking-wider text-[#3A3A3A] md:pb-6 md:text-3xl lg:pb-10 lg:text-4xl lg:tracking-widest xl:text-5xl">
          Latest Arrivals
        </h1>

        <main className="mx-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </main>

        <div className="text-center">
          <Link
            href="/collections/latest-arrivals"
            className="focus:shadow-outline inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-6 font-medium tracking-wide text-white transition duration-200 hover:bg-gray-800 focus:outline-none my-5"
          >
            View All
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const caraousel = await fetchCaraouselData()
  const categories = await fetchCategories()
  const products = await fetchProducts()
  return {
    props: { caraousel, categories, products },
  }
}
