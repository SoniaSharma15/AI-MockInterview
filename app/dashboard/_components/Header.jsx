'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Header() {

    const path=usePathname();
   
  return (
    <div className='flex bg-secondary p-4 items-center justify-between shadow-2xl '>
        <Image alt='logo' src={"/logo.svg"} width={30} height={10}/>
        <ul className='flex gap-6 justify-content-center'>
          <Link href="/">
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
           ${path=="/"&&"text-blue-700 font-bold" }
           `}>Home</li>
           </Link>
                     {path!="/"&&
<>
          <Link href="/dashboard">
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
           ${path=="/dashboard"&&"text-blue-700 font-bold" }
           `}>Dashboard</li>
           </Link>
           
           <Link href="/dashboard/how">
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
           ${path=="/dashboard/how"&&"text-blue-700 font-bold" }
           `}>How it Works?</li>
           </Link></>

}
 {/* <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
           ${path=="/dashboard/question"&&"text-blue-700 font-bold" }
           `}>Question</li>
            <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer
           ${path=="/dashboard/upgrade"&&"text-blue-700 font-bold" }
           `}>Upgrade</li> */}
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header