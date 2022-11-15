import Head from "next/head"
import React, { useState, useEffect } from "react"
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice"
import Currency from "react-currency-formatter"
import { useSelector } from "react-redux"
import Button from "../components/Button"
import Stripe from "stripe"
import Link from "next/link"
import { useRouter } from "next/router"
import CheckoutProduct from "../components/CheckoutProduct"
import { fetchPostJSON } from "../utils/api-helpers"
import getStripe from "../utils/get-stripejs"
import { useSession, signIn } from "next-auth/react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Checkout = () => {
  const { data: session } = useSession()

  const items = useSelector(selectBasketItems)

  const router = useRouter()

  const basketTotal = useSelector(selectBasketTotal)

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  )

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item._id] = results[item._id] || []).push(item)
      return results
    }, {} as { [key: string]: Product[] })
    setGroupedItemsInBasket(groupedItems)
  }, [items])

  const createCheckoutSession = async () => {
    setLoading(true)
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_sessions",
      { items: items }
    )
    // Internal Server Error
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message)
      return
    }

    // Redirect to checkout
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    })
    console.warn(error.message)
    setLoading(false)
  }

  return (
    <div className="custom-scrollbar bg-gray-50">
      <Head>
        <title>Collections - Pari Opticals</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      {items.length > 0 ? (
        <main className="mx-auto max-w-7xl pb-24">
          <div className="px-5">
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
              Review your bag
            </h1>
            <p className="my-4">Free delivery and free returns.</p>
          </div>
          {items.length > 0 && (
            <div className="mx-5 md:mx-8">
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <CheckoutProduct key={key} items={items} id={key} />
              ))}
              <div className="my-12 mx-auto mt-6 max-w-3xl">
                <div className="divide-y divide-gray-300">
                  <div className="pb-4">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>
                        <Currency quantity={basketTotal} currency="INR" />
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping</p>
                      <p>FREE</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 text-xl font-semibold">
                    <h4>Total</h4>
                    <h4>
                      <Currency quantity={basketTotal} currency="INR" />
                    </h4>
                  </div>
                </div>
                <div className="my-14 space-y-4">
                  <h4 className="text-xl font-semibold">
                    How would you like to check out?
                  </h4>
                  <div className="flex flex-1 flex-col items-center space-y-2 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in Full
                      <span>
                        <Currency quantity={basketTotal} currency="INR" />
                      </span>
                    </h4>
                    {session ? (
                      <Button
                        loading={loading}
                        title="Check Out"
                        Icon1
                        onClick={createCheckoutSession}
                      />
                    ) : (
                      <Button
                        title="Sign In To Checkout"
                        onClick={() => signIn()}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        <main>
          <div className="px-5 text-center py-52">
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
              Your Bag Is Empty
            </h1>
            <p className="my-4">Free delivery and free returns.</p>
            <Link href="/">
              <Button title="Continue Shopping" Icon2 />
            </Link>
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}

export default Checkout
