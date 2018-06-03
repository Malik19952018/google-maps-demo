import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import axios from 'axios';
import './buttons.css'
class Maps extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        markers : [
            {
                id: 1,
                position: {
                    lat: 43.844148,
                    lng: 18.353853
                },
                infoWindowContent: "Prvi marker"
            }

        ]
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    getNewMarkers = () => {



        axios.get('/getMarkers').then(res => {
            this.setState({markers: res.data});
        });

    }

    returnOldMarkers = () => {
        this.setState({markers: [{
            id: 1,
            position: {
                lat: 43.844148,
                lng: 18.353853
            },
            infoWindowContent: "Prvi marker"
        }]})
    }
    render() {
        return (
            <div id="map">
                <Map
                    style={{width: '100%', height: '70%', position: 'relative'}}
                    google={this.props.google}
                    initialCenter={{
                        lat: 43.844148,
                        lng: 18.353853
                    }}
                    zoom={13}
                    clickableIcons={false}
                >

 
        {this.state.markers.map(marker => {
            return <Marker onClick={this.onMarkerClick} position={marker.position} description={marker.infoWindowContent} />
        })}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.description}</h1>
            </div>
        </InfoWindow>
        <div class="buttons" style={{position: 'inline'}}>
                    <button class="butt1" onClick={this.getNewMarkers}>Show markers</button>
                    <button class="butt2" onClick={this.returnOldMarkers}>Hide markers</button>

                 </div>
                </Map>
                
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAzvixLT5sAjJvdV3m8F_2lG3mKxJr_Ycg"
})(Maps)