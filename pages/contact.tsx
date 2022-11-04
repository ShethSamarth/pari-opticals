import React, { useState } from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const contactEmail = "samarth.sheth.29@gmail.com"

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )
  }

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-600/70 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent h-screen overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Head>
        <title>Contact - Pari Opticals</title>
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
      <section className="mb-32 text-gray-800 text-center">
        <div className="px-6 py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 z-10 bg-white border">
                  <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                  <form onSubmit={submitForm}>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Name"
                        defaultValue=""
                        value={name}
                        size={35}
                        id="contactName"
                        name="contactName"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                        defaultValue=""
                        value={email}
                        size={35}
                        id="contactEmail"
                        name="contactEmail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Subject"
                        defaultValue=""
                        value={subject}
                        size={35}
                        id="contactSubject"
                        name="contactSubject"
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        rows={3}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="contactMessage"
                        name="contactMessage"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 -z-10">
                <div className="h-[700px] -z-10 relative shadow-lg rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.866474242321!2d72.77643081473377!3d21.15771148592862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8d132778bd%3A0xba558181293cced3!2sPari%20Opticals!5e0!3m2!1sen!2sin!4v1667573346531!5m2!1sen!2sin"
                    className="left-0 top-0 h-full w-full absolute rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
