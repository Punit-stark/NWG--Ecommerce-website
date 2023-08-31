import Link from 'next/link'
import React from 'react'
import {FcHome} from 'react-icons/Fc'
import {BiRightArrow} from 'react-icons/Bi'
import {BiLeftArrowCircle} from 'react-icons/Bi'
import react from 'react'
import { Router } from 'react-router-dom'
import { useRouter } from 'next/router'
function Breadcrumb({title}) {
    const router=useRouter();
    
  return (
    <div className='my-2 bg-light d-flex justify-content-between align-item-center'>
        <div className='d-flex align-item-center gap-1'>
            <div className='mx-2 d-flex align-item-center'>
                <Link href="/" className='text-decoration-none text-block'>
                    <FcHome size={28}/>
                </Link>
                <BiRightArrow size={15}/>
            </div>
            <h4 className='text-center py-2 text-uppercase'>{title}</h4>
        </div>
        <div className='px-2'>
            <Link href="#" className='text-decoration-none text-black' onClick={()=>router.back()}>
                <BiLeftArrowCircle size={28}/>
            </Link>
        </div>
    </div>
  )
}

export default Breadcrumb