import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
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
      const center = {
        lat: this.props.locationlat,
        lng: this.props.locationlng,
      };
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <AnyReactComponent
              lat={center.lat}
              lng={center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMapShow;
