import React, { Component  } from 'react'
import { Marker, MarkerLayout } from 'yandex-map-react'

const markerStyles = {
    width: '40px',
    height: '40px',
    // overflow: 'hidden',
    border: '1px solid orange',
    background: '#FFF',
    borderRadius: '50%'

}
export default class Points extends Component {
    showTooltip (point, i) {
        !point.c ? point.c = true : point.c = !point.c;
        point.c ?
            document.getElementById('marker_tooltip'+i).className = " tooltip_clicked":
            document.getElementById('marker_tooltip'+i).className = "";
    }
    componentDidMount() {
       this.props.getPoints()
       console.log(123123)
    }
    render() {
         let {points } = this.props
        const _this = this 
        return (<div>{ points.map((point,i) => { 
            <Marker onClick={function(){_this.showTooltip(point, i)}} key={'marker_' + i} lat={point.marker[0].lat} lon={point.marker[0].long} >
                <MarkerLayout>
                    <div id={"marker_tooltip" + i} style={markerStyles} data-tooltip={point.text}>
                        <img src="http://loremflickr.com/40/40"/>
                    </div>
                </MarkerLayout>
            </Marker>
            })
            }</div>) 
        }

}

// Points.propTypes = {
//     points: PropTypes.array.isRequired
// }
