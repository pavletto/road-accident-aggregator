import React, { Component } from 'react';
import { Map, Marker} from 'yandex-map-react';
// import points from './data';
import sendRequest from './Promise';

const mapStyles = {
    float: 'left'
};
let points = []; 


class App extends Component {
    constructor(props){
        super(props)
        this.state = { points: [] }
    }
  componentDidMount() {
        let _this = this;
            let points = [];
        function recuriveSearchProrepty(arr) {
            if (arr && (typeof arr === "object" || typeof arr === "array")) {
                for (var key in arr) {
                    if (key === 'long'){
                        points.push([arr['long'],arr['lat']])
                    } else {
                        recuriveSearchProrepty(arr[key])
                    }
                }
            } else {
                return arr;
            }
        }
        sendRequest ('//pvlt.test.com:8080').then(
            response => {
                recuriveSearchProrepty(JSON.parse(response).markers.items);
                _this.setState({points:points})
            },
            error => console.log(error)
        );
    console.log(this.state);
  }
  render() {
      return (
          <Map style={mapStyles} height={'100%'}  width={'100%'}  center={[59.9304132,30.3332581]} zoom={10}>
        {this.state.points.map(([lon,lat], i) =>  (
            <Marker key={'marker_' + i} lat={lat} lon={lon} />
        ))}
        </Map>
       )
  }
}
export default App;
