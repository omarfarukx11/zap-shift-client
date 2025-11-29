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
    if(isLoading) {
       return <p className="text-red-500">Loading</p>
    }
    return (
        <div>
            <h1>hello form payment</h1>
            <p>{data?.ParcelName}</p>
        </div>
    );
};

export default Payment;