import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div className='border p-5'>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <div>
                <Grid container spacing={2} className='space-y-3'>
                    {[1, 1, 1, 1, 1].map((item, index) => 
                        <Grid item container className='shadow-md rounded-md p-4 border' sx={{ alignItems: "center", justifyContent: "space-between," }}>
                            <Grid item xs={6}>
                                <div className='flex items-center space-x-8  px-4'>
                                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://tse1.mm.bing.net/th?id=OIP.jJAE4HTowFn5ruD7JxVvmwHaJ4&pid=Api&P=0&h=180" alt="Product" />
                                    <div className='space-y-2 ml-5'>
                                        <p className='font-semibold'>men slim men slim</p>
                                        <p className='space-x-5 opacity-60 text-sm font-semibold'><span>Color: pink</span><span>Size: M</span></p>
                                        <p>Seller: Linaria</p>
                                        <p>₹1099</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} className=' px-4'>
                                <Box sx={{ color: deepPurple[500], display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                    <StarBorderIcon sx={{ fontSize: "2.5rem" }} className='px-2 text-xl ' />
                                    <span>Rate & Review Product</span>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default OrderDetails;
