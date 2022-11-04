import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import blockContent from "./blockContent"
import product from "./product"
import caraousel from "./caraousel"
import category from "./category"
import localeString from "./locale/String"
import localeText from "./locale/Text"
import localeBlockContent from "./locale/BlockContent"
import { user, account } from "next-auth-sanity/schemas"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    caraousel,
    category,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    user,
    account,
  ]),
})
