interface Image {
  _key: string
  _type: "image"
  asset: {
    url: string
  }
}

interface Product {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: "product"
  title: string
  slug: {
    _type: "slug"
    current: string
  }
  image: Image[]
  price: number
  color: string
  men: boolean
  women: boolean
  kids: boolean
  computerGlasses: boolean
}

interface Caraousel {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: "product"
  title: string
  image: Image[]
}

interface Category {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: "product"
  title: string
  slug: {
    _type: "slug"
    current: string
  }
  image: Image[]
}

interface StripeProduct {
  id: string
  amount_discount: number
  amount_subtotal: number
  amount_tax: number
  amount_total: number
  currency: string
  description: string
  object: string
  quantity: number
  price: {
    unit_amount: number
  }
}
