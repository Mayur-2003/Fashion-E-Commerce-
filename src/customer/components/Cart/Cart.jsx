import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const handleCheckOut = () =>{
    navigate(`/checkout?step=2`)
  }
  return (
    <div className='pt-6'>
      {/* <div className='lg:grid grid-cols-3 lg:px-16 relative'> */}
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
        {[1,1,1,1,1].map((item)=>(
          <CartItem />
        ))}
          
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-4'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-2 font-sans font-semibold mb-8'>
              <div className='flex justify-between pt-3 text-black'>
                  <span>Price(3 items)</span>
                  <span>₹4687</span>
              </div>
              <div className='flex justify-between pt-3 '>
                  <span>Discount</span>
                  <span className='text-green-600'>-₹3687</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery Charges</span>
                  <span className='text-green-600 text-sm'>Free</span>
              </div>
              <hr />
              <div className='flex justify-between pt-3 font-bold '>
                  <span>Total Amount</span>
                  <span  className='text-green-600 '>₹4687</span>
              </div>

             

            </div>
            <Button onClick={handleCheckOut} variant='contained'className='w-full' sx={{px:"2.5rem" ,py:"0.7rem" ,bgcolor:"#9155fd"}}>
                Checkout
              </Button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cart