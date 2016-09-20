import React from 'react';
// igmport ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout} from 'yandex-map-react';
 
class RoadMap extends Map {  
    render () {
        return (
            <Map  width={'100%'}  onAPIAvailable={function () { console.log('API loaded');  }} center={[59.9304132,30.3332581]} zoom={10}>
            <Marker lat={55.783379} lon={37.775575}>
            <MarkerLayout>
            <div style={{borderRadius: '50%', overflow: 'hidden'}}>
            </div>
            </MarkerLayout>
            </Marker>
            </Map>
        );
    }
};
export default RoadMap;
