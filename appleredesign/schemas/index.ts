import blockContent from './blockContent'
import category from './category'
import product from './product'
import { user, account } from "next-auth-sanity/schemas"
//user acount to schematy z biblioteki next auth sanity.
// na ich bazie powstając nowi użytkownicy w cms sanity, któzy zalogowali się 
// do aplikacji przy pomocy google

export const schemaTypes = [category, product, blockContent, user, account]
