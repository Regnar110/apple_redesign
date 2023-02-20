import React from 'react'
import Head from "next/head";
import Header from "../components/Header";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
// import Stripe from "stripe";
import Button from "../components/Button";
// import CheckoutProduct from "../components/CheckoutProduct";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { Produced } from 'immer/dist/internal';
import { Products } from '../typings';
import CheckoutProduct from '../components/CheckoutProduct'
// import CheckoutProduct from "../components/CheckoutProduct";
// import { fetchPostJSON } from "../utils/api-helpers";
// import getStripe from "../utils/get-stripejs";


const Checkout= () => {
    const items = useSelector(selectBasketItems)
    const router = useRouter()

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key:string]:Products[]}
    )
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
          (results[item._id] = results[item._id] || []).push(item);
          return results;
        }, {} as { [key: string]: Products[] });
    
        setGroupedItemsInBasket(groupedItems);
      }, [items]);
  return (
    <div>
      <Head>
        <title>Apple Checkout</title>
        <link rel='icon' href='../public/favicon.ico'/>
      </Head>
      <Header />
      <main>
        <div>
            <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
                {
                    items.length > 0 ? "Review your bag." : "Your bag is empty"
                }
            </h1>
            <p className='my-4'>Free delivery and free returns</p>
            {
                items.length === 0 && (
                    <Button title="Continue Shoping"
                    onClick={() => router.push('/')}
                    />
                )
            }
        </div>
        {
            items.length > 0 && (
                <div>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <CheckoutProduct key={key} items={items} id={key} />
                    ))}
                </div>
            )
        }
      </main>
    </div>
  )
}

export default Checkout
