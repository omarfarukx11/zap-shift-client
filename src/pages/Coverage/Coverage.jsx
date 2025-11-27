import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563];
  const serviceData = useLoaderData()
  const mapRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const location = e.target.location.value;
    const district = serviceData.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    if(district) {
      const coord = [district.latitude , district.longitude];
      mapRef.current.flyTo(coord , 12)
    }
  }
  


  return (
    <div className="bg-base-100 p-10  rounded-2xl mb-10">
      <div>
        <h1 className="text-4xl font-bold ">
          We are available in 64 districts
        </h1>
        <div className="my-10">
         <form onSubmit={handleSearch}>
           <label className="input rounded-4xl outline-none bg-base-200 border-none shadow-2xl  my-5">
            <IoSearch className="text-4xl text-gray-600" />
            <input  name="location" placeholder="Search here" required />
            <button  className="py-2 px-4 bg-primary rounded-4xl ml-4 relative left-3 font-bold">
              Search
            </button>
          </label>
         </form>
        </div>
        <h1 className="text-3xl font-bold">
          We deliver almost all over Bangladesh
        </h1>
      </div>

      <div className="h-[800px] my-10">
        <MapContainer 
        center={position}
         zoom={7} 
         scrollWheelZoom={false}
         className="h-[800px]"
         ref={mapRef}
         >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceData.map((data , index) => 

            <Marker key={index} position={[data.latitude , data.longitude]}>
            <Popup><strong>{data.district}</strong> Service Area : {data.covered_area.join(', ')}</Popup>
          </Marker>
            )
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
