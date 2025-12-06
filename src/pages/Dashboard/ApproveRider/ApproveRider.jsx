import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdCancel, MdDelete, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch riders
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // Update rider status
  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.riderEmail };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "Confirm!",
          text: `Rider status has been updated to "${status}"`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Status update failed or no changes were made.",
          icon: "error",
        });
      }
      console.log(res.data);
    }).catch(err => {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while updating status.",
        icon: "error",
      });
    });
  };

  // Approve rider
  const handleApproveRider = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  // Reject rider
  const handleRejectRider = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  // Delete rider
  const handleDeleteRider = (riderId) => {
    axiosSecure.delete(`/riders/${riderId}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        Swal.fire({
          title: "Confirm!",
          text: "Rider application has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Failed to delete rider.",
          icon: "error",
        });
      }
      console.log(res.data);
    }).catch(err => {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting rider.",
        icon: "error",
      });
    });
  };

  return (
    <div>
      <h1>{riders.length} people applied for rider</h1>

      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>District</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {riders.map((rider, i) => (
            <tr key={rider._id}>
              <th>{i + 1}</th>
              <td>{rider.riderName}</td>
              <td>{rider.riderEmail}</td>
              <td>{rider.riderDistrict}</td>
              <td>
                <p
                  className={`${
                    rider.status === "approved"
                      ? "text-green-500"
                      : rider.status === "rejected"
                      ? "text-red-500"
                      : "text-orange-500"
                  }`}
                >
                  {rider.status}
                </p>
              </td>
              <td className="space-x-2">
                <button
                  onClick={() => handleApproveRider(rider)}
                  className="btn bg-green-500 text-white"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => handleRejectRider(rider)}
                  className="btn bg-red-500 text-white"
                >
                  <MdCancel />
                </button>
                <button
                  onClick={() => handleDeleteRider(rider._id)}
                  className="btn bg-gray-500 text-white"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveRider;
