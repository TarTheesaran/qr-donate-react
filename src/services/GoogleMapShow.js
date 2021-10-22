import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const Marker = ({ }) => (
  <div>
    <i className="fill-current text-red-600 fas fa-map-marker-alt text-4xl"></i>
  </div>
);

class GoogleMapShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 16,
    };
  }

  render() {
    const { zoom } = this.state;
    if (this.props.locationlat === 0 && this.props.locationlng === 0) {
      return <div className="ml-10">Google Map Loading....</div>;
    } else {
      const mapBlockSize = {
        height: "400px",
        width: "100%" 
      }

      const locationCoordinates = {
        lat: this.props.locationlat,
        lng: this.props.locationlng,
      };
      return (
        <div style={mapBlockSize}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAHGR2Ks748hSxHWL0V6AjbjXQAR8dwKho" }}
            defaultCenter={locationCoordinates}
            defaultZoom={zoom}
            options={{ mapId: "7730382d4d4998c" }}
          >
            <Marker lat={locationCoordinates.lat} lng={locationCoordinates.lng}/>
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMapShow;
