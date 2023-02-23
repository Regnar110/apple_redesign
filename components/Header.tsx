import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import apple_logo from '../images/apple_logo.png'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'
import {
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const {data: session} = useSession()
  const items = useSelector(selectBasketItems)

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7EcEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href={'/'}>
          <div className='relative h-10 w-5 cursor-pointer opacity-75
              transition hover:opacity-100'>
              <Image 
                src={apple_logo} 
                alt="headimg" 
                fill style={{objectFit:"contain"}}
              />
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a className='headerLink'>Product</a>
        <a className='headerLink'>Explore</a>
        <a className='headerLink'>Support</a>
        <a className='headerLink'>Business</a>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <MagnifyingGlassIcon className='headerIcon'/>
        
          <Link href='/checkout'>
            <div className='relative cursor-pointer'>
                {
                  items.length > 0 ? 
                  <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 
                  items-center justify-center rounded-full 
                  bg-gradient-to-r from-pink-500 to-violet-500
                  text-[10px] text-white'
                  > 
                  {items.length}
                  </span>
                  :
                  null
                }
            </div>
            <ShoppingBagIcon className='headerIcon' />
          </Link>
          {session ? (
            <Image 
              src={
                session.user?.image ||
                "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" 
              }
              alt="avatar"
              className='cursor-pointer rounded-full'
              width={34}
              height={34}
              onClick={() => signOut()}
            />
            )
            :
            <UserIcon className='headerIcon'
              onClick={() => signIn()}
            />
          }
        </div>
    </header>
  )
}

export default Header