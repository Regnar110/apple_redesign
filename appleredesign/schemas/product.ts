import { defineField, defineType } from "sanity";

import { RiMacbookLine } from "react-icons/ri"

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: RiMacbookLine,
    fields: [
        defineField({
            name:"title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true
            }
        }),
        defineField({ 
            //pole zapewniające utworzenie relacji między PRODUKTEM
            // a kategorią do którego zostanie dodany.
            //NP mackbook to będzie kategoria laptops.
            // sluży do powiązania produktu z kategorią. do stworzenia
            //relacji między nimi. Jak w bazach np PSQL
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }]
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number"
        }),
        defineField({
            name: "description",
            title: "description",
            type: "blockContent"
        })
    ]
})