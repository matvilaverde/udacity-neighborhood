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
                    lat: -19.9408184,
                    lng: -43.9355109
                }}
            >

                <Marker onClick = {this.onMarkerClick}
                    title={'Jack Rock Bar'}
                    name={'Jack Rock Bar'}
                    position={{lat: -19.9397354, lng: -43.9318726}}
                />

                <Marker onClick = {this.onMarkerClick}
                    title={'Lord Pub'}
                    name={'Lord Pub'}
                    position={{lat: -19.9402615, lng: -43.9365341}}
                />

                <Marker onClick = {this.onMarkerClick}
                    title={'Estágio Rock Bar'}
                    name={'Estágio Rock Bar'}
                    position={{lat: -19.941599, lng: -43.937418}}
                />
                
                <Marker onClick = {this.onMarkerClick}
                    title={'Beb\'s Contorno'}
                    name={'Beb\'s Contorno'}
                    position={{lat: -19.9407569, lng: -43.9363852}}
                />

                <Marker onClick = {this.onMarkerClick}
                    title={'Rock Esporte Clube'}
                    name={'Rock Esporte Clube'}
                    position={{lat: -19.9403498, lng: -43.9380091}}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>Name: {this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDSZ_E9TrZt4ijbTAcpxJCXTqdZ5VhQwj0'
})(MapsAPI);