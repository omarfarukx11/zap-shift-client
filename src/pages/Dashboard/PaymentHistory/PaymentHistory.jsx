import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });



  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>ParcelName</th>
            <th>Amount</th>
            <th>TransitionId</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            data.map((d , i) => 
            <tr key={d._id}>
            <th>{i + 1}</th>
            <td>{d.parcelName}</td>
            <td>{d.amount}</td>
            <td>{d.transactionId}</td>
          </tr>
            )
          }
    
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
