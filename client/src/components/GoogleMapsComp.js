import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import {Map, Marker} from 'google-maps-react';
import styled from 'styled-components';

const style = {
    width: '600px',
    height: '500px',
    margin: '280px 20px'
}

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        

        mapCenter:{
            lat: 41.8638,
            lng: -87.6372
        }
    };

    

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
                zoom={8}
                center={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}
            >
                <Marker 
                
                />

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCK1KOQl2cyvvBtcoCDZ7MOd1oKSw7O0H8')
})(MapContainer)
