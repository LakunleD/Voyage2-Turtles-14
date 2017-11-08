import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';
import Weather from './Weather';


class Location extends Component {

    render() {
        return (
            <div>
                <div>
                    {
                        !this.props.isGeolocationAvailable
                            ? <div>Your browser does not support Geolocation</div>
                            : !this.props.isGeolocationEnabled
                            ? <div>Geolocation is not enabled</div>
                            : this.props.coords
                                ? <Weather latitude={this.props.coords.latitude} longitude={this.props.coords.longitude}/>
                                : <div>Getting the location data&hellip; </div>
                    }
                </div>

            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location);