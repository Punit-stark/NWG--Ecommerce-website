import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { BiRupee } from 'react-icons/Bi'
import {BiCartAdd} from 'react-icons/Bi'
import { addToCart } from '@/utils/cartItems'
import { toast } from 'react-hot-toast'
function ProductCart({product}) {
    return (
        <div className="card">
            <Link href={`/product/${product?.id}`}>
                <div className='object-fit-cover'>
                    <Image src={product?.thumbnail} width={200} height={200} alt={product?.title} className="card-img-top"/>
                </div>
            </Link>
                <div className="card-body">
                    <Link href={`/product/${product?.id}`} className='text-decoration-none'>
                    <h5 className="card-title text-black">Product title</h5>
                    </Link>
                    <div className='d-flex justify-center-between align-items-center'>
                        <h6 className='card-title d-flex align-items-center'>
                            <BiRupee size={21}/>
                            {product?.price}
                        </h6>
                        <div className='d-flex'>
                         <button className='btn btn-warning btn-sm mx-2' onClick={(e)=>{addToCart(product,1),toast.success('Added to cart!')}}><BiCartAdd size={22}/></button>
                         <button className='btn btn-success btn-sm '>Buy</button>
                        </div>
                    </div>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>
    )
}

export default ProductCart