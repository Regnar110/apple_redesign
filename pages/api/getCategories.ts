import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"

const query = groq`*[_type == "category"] {
  _id,
  ...
}`

//powyżej stosujemy tzw groq query language. Jest to query language
// obsługiwany przez sanity do obsługi zapyatń. Jest on bardzo pomocy ze względu
// na jego możliwości selektywne w kontekście wyboru poszczególnych części
// elementów, które będą zwracane. Zapobiega to m.in. ovefetchingowi lub
// undefetchingowi co oznacza że ściągane jest za dużo rzeczy(np. cały obiekt
// a potrzebujemy tylko część) lub za mała część obiektu( a potrzebujemy więcej).

type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query)
  res.status(200).json({categories})
}
