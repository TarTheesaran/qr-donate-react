import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapShow extends Component {
    static defaultProps = {
        center: {
            lat: 12.6876269,
            lng: 100.9815855
        },
        zoom: 16
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAHGR2Ks748hSxHWL0V6AjbjXQAR8dwKho' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={12.6876269}
                        lng={100.9815855}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMapShow;