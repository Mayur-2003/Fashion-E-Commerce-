import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='mt-5'>
            <Grid container className='shadow-md border hover:shadow-xl p-5' spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img  className='w-[5rem] h-[5rem] object-cover object-top' src="https://tse1.mm.bing.net/th?id=OIP.jJAE4HTowFn5ruD7JxVvmwHaJ4&pid=Api&P=0&h=180" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm '/>
                        <span>
                            Delivered On March 03
                        </span>
                    
                    </p>}
                    <p className='text-xs font-semibold text-gray-700'>
                    Your item has been delivered
                    </p>
                    {false && <p>
                        <span>
                            Expected Delivery on March 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard