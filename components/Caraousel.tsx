import React from "react"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { urlFor } from "../sanity"

interface Props {
  caraousel: Caraousel[]
}

const Caraousel = ({ caraousel }: Props) => {
  return (
    <div className="relative shadow-2xl">
      <div className="absolute w-full" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showArrows={true}
      >
        {caraousel.map((img) => (
          <div key={img._id}>
            <Image
              src={urlFor(img.image[0]).url()}
              width={2000}
              height={500}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Caraousel
