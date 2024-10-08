'use client'
import { toggle } from '@/redux/slices/showCartSlice';
import { RootState } from '@/redux/store';
import { Cross1Icon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartProducts from '../CartProduct/CartProducts';
import CheckOutButton from './CheckOutButton';
import NoItemsInCart from './NoItemsInCart';


const ShoppingCart = () => {


    const shpCart = useSelector((state: RootState) => state.shoppingCart);
    const cartOn = useSelector((state: RootState) => state.cartOn);
    const dispatch = useDispatch(); 
    const [siteLoaded, setSiteLoaded] = useState(false);

    useEffect(() => {
      if(cartOn)
      setSiteLoaded(true);
    }, [cartOn])

    const appear = cartOn? ' animate-appear' : siteLoaded? ' animate-disappear' : ' hidden';
    const drop = cartOn? ' animate-sidedrop' : siteLoaded? ' animate-siderise' : ' hidden';

    const [totalOn, setTotalOn] = useState((shpCart.products.length != 0)? ' ' : ' hidden');
    const [areItems, setAreItems] = useState(shpCart.products.length != 0);

    useEffect(() => {
        if(shpCart.products.length != 0){
            setTotalOn(' ');
            setAreItems(true);
        }
        else{
            setTotalOn(' hidden');
            setAreItems(false);
        }
    }, [shpCart.products.length])

     return (
    <div className={' flex select-none has-[:hidden]:hidden'}>
        
    <div className={' w-[100%] bg-[#1313138f] h-screen fixed top-0 left-0 z-10' + appear} onClick={() => {dispatch(toggle())}}>
    </div>
    <div className={ `tb:w-[30%] w-[90%] h-screen fixed right-0 top-0 bg-white flex flex-col border-l-[1px] border-zinc-300 justify-between  z-20` + drop}>
        <div className=' flex items-end py-5 px-5 justify-between shadow-md'>
            <div className=' flex justify-center w-full '>
                <div>
                    SHOPPING CART
                </div>
            </div>
            <div className=' p-2 bg-zinc-200  rounded-full hover:bg-zinc-300 cursor-pointer' onClick={() => {dispatch(toggle())}}>
                <Cross1Icon/>
            </div>
        </div>
        <div className=' p-3 flex h-full'>
             {areItems?
                <CartProducts /> 
            :
                <NoItemsInCart />}       
        </div>
        <div className={' p-5 border-t-[1px] flex justify-between'+ totalOn}>
        <div className={' flex gap-6'}>

            <div>    
                TOTAL
            </div>

            <div>
                ${shpCart.total}
            </div>
            </div>

        <div>
            <CheckOutButton />
        </div>
        </div>
    </div>
    </div>
  )
}

export default ShoppingCart