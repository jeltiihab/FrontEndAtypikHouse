import {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWhhYmp0IiwiYSI6ImNsMGNuMjh3djAwdHQzcG56am90aDYxdzkifQ.-j9rHtCxCCkBGLWa4QuWYA'
function Map() {

    const [viewport, setViewport] = useState({
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 8
    });

    return (
        <ReactMapGL
            style={{width: '100%', height: 600}}
            mapboxAccessToken={MAPBOX_TOKEN}
            {...viewport}
            onMove={evt => setViewport(evt.viewport)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker longitude={2.3522} latitude={48.8566} color="red" />
        </ReactMapGL>
    );
}

export default Map;