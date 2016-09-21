import React, { Component  } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators  } from 'redux'
import {Map} from 'yandex-map-react';   
import Points from '../components/Points';
import './App.css';
import * as pointsActions from '../actions/Points'


const mapStyles = {
    float: 'left'
};
class App extends Component {
    render() {
    const {map, points} = this.props
       const {getPoints} = this.props.pointsActions 
        return <Map style={mapStyles} height={'100%'} width={'100%'} zoom={map.zoom} center={[map.long,map.lat]}>
            <Points getPoints={getPoints} points={points.points}/>
        </Map>
    }   
}

function mapStateToProps (state) {
    return {
       map: state.map.position,
       points: state.points
    }

}

function mapDispatchToProps(dispatch) {
    return {
        pointsActions: bindActionCreators(pointsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
