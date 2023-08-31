import Breadcrumb from '@/components/layout/Breadcrumb'
import { getCartItems, removefromCart, updateCartItems } from '@/utils/cartItems'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiRupee } from 'react-icons/Bi'

function Cart() {
    const [cart, setCart] = useState(getCartItems());

    const incrementQty = (product) => {
        const newQty = product?.qty + 1;
        if (newQty <= 100) {
            const productId = product?.id
            updateCartItems(product, newQty);
            setCart(getCartItems())
        }
    }

    const decrementQty = (product) => {
        const newQty = product?.qty - 1;
        if (newQty > 0) {
            const productId = product?.id
            updateCartItems(product, newQty);
            setCart(getCartItems())
        }
    }

    const removeHandler=(productId)=>{
        removefromCart(productId);
        setCart(getCartItems());
    }

    return (

        <>
            <Head>
                <title>Your Cart</title>
            </Head>
            <Breadcrumb title={'Your Cart'} />
            <div className='table-responsive mt-4'>

                <table className='table table-borderless'>
                    <thead>
                        <tr className='border-bottom'>
                            <th scope='col'>Item</th>
                            <th scope='col'>Price</th>
                            <th className='float-end' scope='col'>Quantity</th>
                            <th scope='col'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(cart.length > 0) ? cart?.map((item) => {
                            return (
                                <tr className='border-bottom' key={item?.id}>
                                    <td>
                                        <div className='d-flex gap-3'></div>
                                        <Image src={item?.image} className='rounded-circle' width={40} height={40} alt={item?.tile} />
                                        {item?.title}
                                    </td>
                                    <td className='text-center'>
                                        <span className='d-flex align-items-center'>
                                            <BiRupee size={21} />{item?.price}
                                        </span>
                                    </td>
                                    <td className='text-center'>
                                        <div class="input-group input-group-sm w-50 mb-3 border float-end">
                                            <button class="btn input-group-text btn-sm btn-outline-dark" onClick={() => decrementQty(item)}>-</button>
                                            <input type="tel" class="form-control" value={item?.qty} />
                                            <button class="btn input-group-text btn-sm btn-outline-dark" onClick={() => incrementQty(item)}>+</button>
                                        </div>
                                    </td>
                                    <td className='text-center d-flex justify-content-between'>
                                        <div className='d-flex align-items-center text-center'>
                                        <BiRupee size={21} />
                                        {(item?.price * item?.qty).toFixed(2)}
                                        </div>
                                        <button className='btn btn-sm btn-fdanger' onClick={()=>removeHandler(item?.id)}>X</button>
                                    </td>
                                </tr>)
                        }) : <tr><td className='text-center text-danger' colSpan={4}>Empty Card</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Cart
