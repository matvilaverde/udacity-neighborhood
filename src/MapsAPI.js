import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%'
}

class MapsAPI extends Component {

    state = {
        showingInfoWindow: false, //Hides or shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        })
    }

    onClose = (props) => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{
                    lat: -19.9331706,
                    lng: -43.93874
                }}
                //onClick={this.onMapClicked}

                //The onReady prop is useful for fetching places or using the autocomplete API for places.
            >

                <Marker onClick = {this.onMarkerClick}
                    title={'Jack Rock Bar'}
                    name={'Jack Rock Bar'}
                    position={{lat: -19.9397354, lng: -43.9318726}}
                    rate={4}
                />

                <Marker onClick = {this.onMarkerClick}
                    title={'Stadt Jever'}
                    name={'Stadt Jever'}
                    position={{lat: -19.9399758, lng: -43.933347}}
                    rate={5}
                />
                
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                        <p>{this.state.selectedPlace.rate}</p>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDSZ_E9TrZt4ijbTAcpxJCXTqdZ5VhQwj0'
})(MapsAPI);