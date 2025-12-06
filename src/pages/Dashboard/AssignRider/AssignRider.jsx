import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignRider = () => {
  const axiosSecure = useAxiosSecure();
   const assignRef = useRef()
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const handleRef = (p) => { 
        assignRef.current?.showModal()
   }

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Pickup District</th>
            <th>CreateAt</th>

            <th>Delivery Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((p, i) => (
            <tr key={p._id}>
              <th>{i + 1}</th>
              <td>{p.ParcelName}</td>
              <td>{p.senderDistrict}</td>
              <td>{p.createAt}</td>
              <td>{p.deliveryStatus}</td>
              <td>
                <button onClick={() => { handleRef(p) }} className="btn btn-primary text-black">
                  Assign Rider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog ref={assignRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div  className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;
