import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    bottom: '0px',
    height: '100%',
    left: '362px',
    position: 'absolute',
    right: '0px'
}

class MapsAPI extends Component {
    state = {
        showingInfoWindow: false, //Hides or shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
        canShowMarkers: true
    }

    markers = [
        {
            title: 'Jack Rock Bar',
            position: {lat: -19.9397354, lng: -43.9318726},
            isMarkerShown: true
        }, {
            title: 'Lord Pub',
            position: {lat: -19.9402615, lng: -43.9365341},
            isMarkerShown: true
        }, {
            title: 'Estágio Rock Bar',
            position: {lat: -19.941599, lng: -43.937418},
            isMarkerShown: true
        }, {
            title: 'Beb\'s Contorno',
            position: {lat: -19.9407569, lng: -43.9363852},
            isMarkerShown: true
        }, {
            title: 'Rock Esporte Clube',
            position: {lat: -19.9403498, lng: -43.9380091},
            isMarkerShown: true
        }
    ]

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onClose = () => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    showMarkers = () => {
        this.setState({canShowMarkers: true})
    }

    
    hideMarkers = () => {
        this.setState({canShowMarkers: false})
    }
    
    render() {
        return (
            <div className="container">
            <div className="options-box">
                <h1>Find Rock Bars Near You!</h1>
                <div>
                    <input id="show-listings" type="button" value="Show Listings" onClick={this.showMarkers} />
                    <input id="hide-listings" type="button" value="Hide Listings" onClick={this.hideMarkers}/>
                </div>
            </div>
            <Map
                className="map"
                google={this.props.google}
                zoom={16}
                style={mapStyles} //style receives an css like object
                styles={[{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]}
                initialCenter={{
                    lat: -19.9408184,
                    lng: -43.9355109
                }}
                >
                
                {this.state.canShowMarkers && (this.markers.map((marker, index) =>
                    <Marker
                    onClick = {this.onMarkerClick}
                    position={marker.position}
                    title={marker.title}
                        animation={this.props.google.maps.Animation.DROP}
                        key={index}
                        ></Marker>
                        ))}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                    <div>
                        <h4>Name: {this.state.selectedPlace.title}</h4>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAOFG5MfWrnTNAlxiYoko5BOd6s5RTHrhY'
})(MapsAPI);