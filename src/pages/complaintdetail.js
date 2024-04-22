import React from "react";
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
const Complaintdetail = () => {
  const { id } = useParams();
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
        // <div>
        <ul className="timeline">
        <li>
            <div className="timeline-start timeline-box">First Macintosh computer</div>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr className="bg-primary"/>
        </li>
        <li>
        <hr className="bg-primary"/>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">iMac</div>
            <hr className="bg-primary"/>
        </li>
        <li>
            <hr className="bg-primary"/>
            <div className="timeline-start timeline-box">iPod</div>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr/>
        </li>
        <li>
            <hr/>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">iPhone</div>
            <hr/>
        </li>
        <li>
            <hr/>
            <div className="timeline-start timeline-box">Apple Watch</div>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
        </li>
        </ul>
        
    )
  }

  return (
    <div className="z-10">
      <div class=" w-[60vw] h-[80vh] mt-16 mb-16 ml-[20vw] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/90 dark:border-gray-700">
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
      </div>
        <Timeline />
    </div>
  );
};

export default Complaintdetail;
