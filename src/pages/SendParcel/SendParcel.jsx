import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const regionData = useLoaderData();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();

  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const navigate = useNavigate()




  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const regionsDuplicate = regionData.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtByRegion = (region) => {
    const regionDistrict = regionData.filter((r) => r.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.ParcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost 
    Swal.fire({
      title: "Are you sure?",
      text: `You will be charged ${cost} Taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok Do it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post('/parcels' , data)
        .then()
        navigate('/dashboard/myParcels')
        Swal.fire({
          title: "Conform!",
          text: "Your file has been Conformed.",
          icon: "success",
        });
      }
    });

    
  };

  return (
    <div className="bg-base-100 p-20 rounded-2xl">
      <h1 className="text-4xl font-bold">Send A Parcel</h1>
      <p className="text-2xl font-bold mt-10">Enter your parcel details</p>

      {/* divider  */}
      <div className="flex w-full flex-col ">
        <div className="divider divider-start"></div>
      </div>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel type  */}
        <div className="py-4 space-x-10">
          <label className="label">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio radio-success"
              defaultChecked
            />
            document
          </label>

          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio radio-success border-4"
            />
            Non-document
          </label>
        </div>

        {/* parcel name weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset ">
            {/* Parcel Name  */}
            <label className="label">Parcel Name</label>
            <input
              type="Name"
              {...register("ParcelName")}
              className="input outline-none w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset ">
            {/* Parcel Weight (KG) */}
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("ParcelWeight")}
              className="input outline-none w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>
 
        {/* divider  */}
        <div className="flex w-full flex-col ">
          <div className="divider divider-start"></div>
        </div>

        {/* parcel info  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details  */}
          <fieldset className="fieldset">
            <h1 className="text-2xl font-semibold pb-4">Sender Details</h1>

            {/* sender Name  */}
            <label className="label">Sender Name</label>
            <input
              type="name"
              {...register("senderName", { required: true })}
              className="input outline-none w-full"
              placeholder="Sender Name"
              defaultValue={user?.displayName}
            />
    
            {/* sender Address  */}
            <label className="label">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input outline-none w-full"
              placeholder="Sender Address"
            />

            {/* sender Phone No  */}
            <label className="label">Sender Phone No</label>
            <input
              type="number"
              {...register("senderPhoneNo")}
              className="input outline-none w-full"
              placeholder="Sender Phone No"
            />
            {/* sender Email  */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input outline-none w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
            />

            {/* sender Region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-400">
                Sender Region
              </legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select w-full outline-none"
              >
                <option disabled={true}>Pick your Region</option>

                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* sender District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-400">
                Sender District
              </legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select w-full outline-none"
              >
                <option disabled={true}>Pick your RegionDistrict</option>

                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* Pickup Instruction  */}
            <label className="label">Pickup Instruction</label>
            <textarea
              {...register("senderText")}
              className="textarea outline-none w-full"
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>

          {/* Receiver details  */}
          <fieldset className="fieldset">
            <h1 className="text-2xl font-semibold pb-4">Receiver Details</h1>

            {/* Receiver Name  */}
            <label className="label">Receiver Name</label>
            <input
              type="Name"
              {...register("ReceiverName")}
              className="input outline-none w-full"
              placeholder="Receiver Name"
            />

            {/* Receiver  Address  */}
            <label className="label">Receiver Address</label>
            <input
              type="text"
              {...register("ReceiverAddress")}
              className="input outline-none w-full"
              placeholder="Receiver Address"
            />

            {/* Receiver Phone No  */}
            <label className="label">Receiver Phone No</label>
            <input
              type="number"
              {...register("ReceiverPhoneNo")}
              className="input outline-none w-full"
              placeholder="Receiver Phone No"
            />
            {/* Receiver email  */}
            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("ReceiverEmail")}
              className="input outline-none w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver Region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-400">
                Receiver Region
              </legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select w-full outline-none"
              >
                <option disabled={true}>Pick your Region</option>

                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* Receiver District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-400">
                Receiver District
              </legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select w-full outline-none"
              >
                <option disabled={true}>Pick your District</option>

                {districtByRegion(receiverRegion).map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            {/* Delivery Instruction  */}
            <label className="label">Delivery Instruction</label>
            <textarea
              {...register("senderText")}
              className="textarea outline-none w-full"
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
        </div>

        <p className="pt-4 font-bold">* PickUp Time 4pm-7pm Approx.</p>

        <button type="submit" className="btn btn-primary text-black my-5">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
