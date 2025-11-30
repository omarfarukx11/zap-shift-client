import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()

    const { isLoading , data} = useQuery({
        queryKey:["parcels" , id],
        queryFn: async () => {
         const res = await axiosSecure.get(`/parcels/${id}`)
         return res.data
        }
        
    })

    // const handlePayment = async () => {
    //   const paymentInfo = {
    //     cost : data.cost,
    //     parcelName : data.ParcelName,
    //     senderEmail : data.senderEmail,
    //     parcelId : data._id,
    //   }
    //   const res = await axiosSecure.post('/create-checkout-session' , paymentInfo)
    //   window.location.assign(res.data.url)
      
    // }
    

    if(isLoading) {
       return <p className="text-red-500">Loading</p>
    }
    return (
        <div className='p-20 text-center'>
            <h1 className='pb-4 text-xl font-bold'>Pay {data.cost} Taka for {data?.ParcelName} Parcel</h1>
            {/* <button onClick={handlePayment} className='btn bg-primary'>Pay</button> */}
        </div>
    );
};

export default Payment;