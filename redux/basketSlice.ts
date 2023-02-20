import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Products } from '../typings'
import { RootState } from './store'
import { stat } from 'fs'

export interface BasketState {
  items: Products[]
}

const initialState: BasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //FUNKCJE REDUCERA 
    addToBasket: (state:BasketState, action: PayloadAction<Products>) => {
        state.items = [...state.items, action.payload]
    },
    
    removeFromBasket: (
        state: BasketState,
        action: PayloadAction<{ id: string }>
      ) => {
        const index = state.items.findIndex(
          (item: Products) => item._id === action.payload.id
        );
  
        let newBasket = [...state.items];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.log(
            `Cant remove product (id: ${action.payload.id}) as its not in basket!`
          );
        }
  
        state.items = newBasket;
      },
    // removeFromBasket: (state: BasketState, action: PayloadAction<{ id: string}>) => {
    //     state.items = state.items.filter(product => {
    //         product._id !== action.payload.id
    //     })
    // },

  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

//SELectors 
//Selektor to czysta funkcja która bierze obiekt stanu ze Store i zwraca
// jakieś informacje wyciągnięte z tego obiektu stanu. Służą
// go zapewnienia przesyłu wybranych danych do kompomnentów.
// Tu naprzykład zwracmy po działaniu reducera itd stan itemsczyli items:[]
export const selectBasketItems = (state: RootState) => state.basket.items;

//Poniższa funkcja ma służyć grupowaniu przedmiotów w koszyku po id.
//Czyli np jak dodamy 10 x ten sam przedmiot to nie pokaże go 10x na liście
// tylko zostanie on zgrupowany w jedno
export const selectBasketWidthId = (state: RootState, id:string) => {
    state.basket.items.filter((item:Products) => {
        return item._id === id

    })
} 

// Poniżej zwracamy skumulowaną cenę wszystkich produktów w koszyku
export const selectBasketTotal = (state: RootState) => {
    return state.basket.items.reduce((total:number, item: Products) => {
        return total += item.price
        //operator += dodaje wartość po prawej do zmiennej lub właściwości
        //po lewej i przypisuje wynik do zmiennej lub własciwości po lewej
        //czyli tu np 0 +200, 200+ 499, 699 +200, 899+ 1000 itd...
    },0)

}

export default basketSlice.reducer