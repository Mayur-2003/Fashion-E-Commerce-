// import { RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
           <div>
           <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://tse1.mm.bing.net/th?id=OIP.4Gg91OenxtQy-RZL14XGXgHaJ3&pid=Api&P=0&h=180" alt="" />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men slime rise</p>
                    <p className='opacity-70'>size: L,white</p>
                    <p className='opacity-70 mt-2'>seller:chritopher nolan</p>
                    <div className='flex justify-start items-start space-x-2 pt-6'>
                        <p className='font-semibold'>₹199</p>
                        <p className='line-through opacity-50'>₹2999</p>
                        <p className='text-green-600 font-semibold'>75%</p>
                    </div>
                </div>
           </div>

                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>
                            5
                        </span>
                        <IconButton sx={{ color: "RGB(145 85 253)" }}>
                            <AddCircleOutlineIcon />
                        </IconButton>

                    </div>
                    <div>
                        <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem