import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import ReactMapboxGl, { Layer, Feature, Marker, Image } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import mapmarker from "../assets/map-marker.svg";
import rapidlogo from "./../assets/rapidlogo.jpg";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Complaintdetail = () => {
  const { id } = useParams();
  const [signed, setSigned] = useState(false); // State to hold sign status

  const toggleSign = () => {
    setSigned(!signed); // Toggle sign status
  };


  const details = {
    id: 1,
    name: "Nishant",
    department: "road",
    complainttitle: "fix road",
    complaintDescription: "Potholes causing accident",
    location: "katraj",
  };
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoibmlvLXN1cHJlbWUiLCJhIjoiY2xnOTdtaXU5MDB3MjNjcWx1bHVic3o5YiJ9.cU-7_eh35LyfMN4HrUtGEw",
  });
  const Timeline = () => {
    return (
      <ol class="items-center m-2 mt-6 sm:flex gap-5">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg> */}
             
              {signed ? <TiTick className="text-green-500 text-5xl font-bold"/> :  <ImCross className="text-red-500"/>}
            </div>
            <div class="hidden ml-5 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Client's Signature
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Issue Raised on December 2, 2021
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg> */}
              {signed ? <TiTick className="text-green-500 text-5xl font-bold"/> :  <ImCross className="text-red-500"/>}
            </div>
            <div class="hidden ml-5 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Final Signature
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Issue Not solved yet
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              {/* <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg> */}
              <TiTick className="text-green-500 text-5xl font-bold"/>

            </div>
            {/* <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div> */}
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Official's Signature
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Started Working on January 5, 2022
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </div>
        </li>
      </ol>
    );
  };

  return (
    <div className="z-10">
      <div class=" w-[60vw] h-fit min-h-[80vh] mt-16 mb-16 ml-[20vw] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/90 dark:border-gray-700">
        <div class="mb-5">
          {/* <label
            for="large-input"
            class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Title:
          </label>   */}
          <div
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {details.complainttitle}
          </div>
        </div>
        <div class="mb-5">
          <div
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {details.complaintDescription}
          </div>
        </div>
        <div class="mb-5">
          <div
            type="text"
            id="base-input"
            class="flex gap-4 w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <FaUserAlt />
            <p> {details.name}</p>
          </div>
        </div>
        <div>
          <div
            type="text"
            id="small-input"
            class=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <div className="flex ml-10">
              <FaLocationDot className="text-gray-400 text-xl m-1" />
              <p class="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                {" "}
                {details.location}
              </p>
            </div>
            {/* <div
            type="text"
            id="small-input"
            class="flex gap-3 my-5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          > */}

            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: "30vh",
                width: "50vw",
              }}
              center={[73.859863, 18.458155]}
              className="ml-10"
              // renderChildrenInPortal={ true}
            >
              {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[ 73.859863,18.458155]} />
                </Layer> */}
              <Marker coordinates={[73.8591595, 18.4581607]} anchor="bottom">
                {/* <Image id={'image-uid'} data={mapmarker} style={{ width: 20, height: 20 }} /> */}
                {/* <FaMapMarkerAlt /> */}
                {/* <img src={mapmarker} /> */}
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "red",
                    borderRadius: "50%",
                  }}
                />
              </Marker>
            </Map>
          </div>
        </div>
        {/* </div> */}
        <div className="text-white font-semibold text-xl mt-5">Signature: </div>
        <Timeline />
        <div role="button" className="bg-gray-700 text-white w-fit rounded-xl p-2" onClick={toggleSign}>{signed ? "Undo Signature" : "Sign the Complaint"}</div>
      </div>
    </div>
  );
};

export default Complaintdetail;
