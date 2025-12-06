import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const { user } = useAuth();
  const regionData = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, control } = useForm();

  // Watch region for updating district list
  const riderRegion = useWatch({ control, name: "riderRegion" });

  // Unique region list
  const regions = [...new Set(regionData.map((r) => r.region))];

  // District filter function
  const districtByRegion = (region) => {
    if (!region) return []; // Prevent crash
    return regionData
      .filter((item) => item.region === region)
      .map((d) => d.district);
  };

  const handleRider = (data) => {
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Conform!",
          text: "Your application has been submitted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRider)}>
        <fieldset className="fieldset">
          <h1 className="text-2xl font-semibold pb-4">Rider Details</h1>

          {/* Rider Name */}
          <label className="label">Rider Name</label>
          <input
            type="text"
            {...register("riderName", { required: true })}
            className="input outline-none w-full"
            placeholder="Rider Name"
            defaultValue={user?.displayName}
          />

          {/* Rider Address */}
          <label className="label">Rider Address</label>
          <input
            type="text"
            {...register("riderAddress")}
            className="input outline-none w-full"
            placeholder="Rider Address"
          />

          {/* Rider Phone */}
          <label className="label">Rider Phone No</label>
          <input
            type="number"
            {...register("riderPhoneNo")}
            className="input outline-none w-full"
            placeholder="Rider Phone No"
          />

          {/* Rider Email */}
          <label className="label">Rider Email</label>
          <input
            type="email"
            {...register("riderEmail")}
            className="input outline-none w-full"
            placeholder="Rider Email"
            defaultValue={user?.email}
          />

          {/* Rider Region */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-gray-400">
              Rider Region
            </legend>
            <select
              {...register("riderRegion")}
              className="select w-full outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Pick your Region
              </option>

              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Rider District */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-gray-400">
              Rider District
            </legend>
            <select
              {...register("riderDistrict")}
              className="select w-full outline-none"
              defaultValue=""
            >
              {(districtByRegion(riderRegion) || []).map((district, i) => (
                <option key={i} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </fieldset>

        </fieldset>

        <button type="submit" className="btn btn-primary text-black my-5">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Rider;
