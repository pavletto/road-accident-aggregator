import React, { Component  } from 'react'
import { Marker, MarkerLayout } from 'yandex-map-react'
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PointCard from './Card'

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
        var formatDate = function(dateString) {
          
             return dateString.replace(/^(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1');
          //
        };
            document.getElementById('point-card_text').innerText = point.text 
            // document.getElementById('point-card_date').innerText = formatDate(new Date(point.date))
            document.getElementById('point-card_date').innerText = new Date(point.date *1000);
            console.log(PointCard);
           console.log(PointCard.state)
    }
    componentDidMount() {
       this.props.getPoints()
    }
    render() {
         let {points } = this.props
        const _this = this 
        return (<div>{ points.map((point,i) => ( 
            <Marker onClick={function(){_this.showTooltip(point, i)}} key={'marker_' + i} lat={point.marker[0].lat} lon={point.marker[0].long} >
            </Marker>
            ))
            }</div>) 
        }

}

// Points.propTypes = {
//     points: PropTypes.array.isRequired
// }
