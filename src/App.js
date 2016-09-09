import React, { Component  } from 'react';                                                   
import { Map, Marker, MarkerLayout } from 'yandex-map-react';   
// import points from './data';
import sendRequest from './Promise';
import './App.css';

const mapStyles = {
    float: 'left'
};

const markerStyles = {
    width: '40px',
    height: '40px',
    // overflow: 'hidden',
    border: '1px solid orange',
    background: '#FFF',
    borderRadius: '50%'

};

class App extends Component {
    constructor(props){
        super(props)
        this.state = { points: [] }
    }
  componentDidMount() {
            let _this = this;
            sendRequest ('//pvlt.test.com:8080').then(
            response => {
                let points = JSON.parse(response).points,
                filtredPoints = points.filter(function(point){
                    return (point.marker.length > 0 &&  +new Date(point.date * 1000 +  2 * 3600 * 1000) > +new Date())
                });
                _this.setState({points:filtredPoints});
                console.log(filtredPoints);
            },
            error => console.log(error)
        );
  }
  showTooltip (point, i) {
  console.log(point.c)
        !point.c ? point.c = true : point.c = !point.c;
        point.c ?
            document.getElementById('marker_tooltip'+i).className = " tooltip_clicked":
            document.getElementById('marker_tooltip'+i).className = "";
  }
  render() {
  let _this = this;
      return (
          <Map style={mapStyles} height={'100%'}  width={'100%'}  center={[59.9304132,30.3332581]} zoom={10}>
        {
        this.state.points.map((point, i) => 
        (
        <Marker onClick={function(){_this.showTooltip(point, i)}} key={'marker_' + i} lat={point.marker[0].lat} lon={point.marker[0].long} >
            <MarkerLayout>
                <div id={"marker_tooltip" + i} style={markerStyles} data-tooltip={point.text}>
                    <img src="http://loremflickr.com/40/40"/>
                </div>
            </MarkerLayout>

        </Marker>
        ))}
        </Map>
       )
  }
}
export default App;
