import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaSearchengin, FaUserShield } from "react-icons/fa6";
import { TbUserCancel } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const UserManagement = () => {
  const [searchText , setSearchText] = useState('')
  const axiosSecure = useAxiosSecure();


  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users" , searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const updateInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert("user now admin");
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const updateInfo = { role: "user" };
    axiosSecure.patch(`users/${user._id}/role`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        alert("admin has been removed ");
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">User Management</h1>
    
      <label className="input outline-none">
        <FaSearch />
        <input onChange={(e) => { setSearchText(e.target.value) }} type="search" required placeholder="Search" />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => {
                        handleRemoveAdmin(user);
                      }}
                      className="btn mx-2 bg-secondary text-red-500 "
                    >
                      <TbUserCancel className="text-xl" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="btn mx-2 bg-primary"
                    >
                      <FaUserShield className="text-xl"></FaUserShield>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
