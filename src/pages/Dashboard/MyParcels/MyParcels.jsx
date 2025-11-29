import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((d, i) => (
              <tr key={d._id}>
                <th>{i + 1}</th>
                <td>{d.ParcelName}</td>
                <td>{d.cost}</td>
                <td>
                    {
                    d.paymentStatus === "paid" ? <p className="text-green-500">Paid</p> :
                    <Link to={`/dashboard/payment/${d._id}`} className="btn btn-sm bg-primary">Pay</Link>
                    }
                </td>
                <td className="space-x-5">
                  <button className="btn bg-primary">
                    <HiOutlineViewGrid />
                  </button>
                  <button className="btn bg-primary">
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="btn bg-primary"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
