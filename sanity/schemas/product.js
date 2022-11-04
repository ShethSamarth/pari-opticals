export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "men",
      title: "Men",
      type: "boolean",
    },
    {
      name: "women",
      title: "Women",
      type: "boolean",
    },
    {
      name: "kids",
      title: "Kids",
      type: "boolean",
    },
  ],
}
