import React, { Component, PropTypes  } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators  } from 'redux'
import {Map} from 'yandex-map-react';   
import Points from '../components/Points';
import PointCard from '../components/Card';
import './App.css';
import * as pointsActions from '../actions/Points'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStyles = {
    float: 'left'
};
class App extends Component {
    render() {
    const {map, points} = this.props
       const {getPoints} = this.props.pointsActions 
        return <div>
        <MuiThemeProvider>
        <Map style={mapStyles} height={'100%'} width={'100%'} zoom={map.zoom} center={[map.long,map.lat]}>
            <Points getPoints={getPoints} points={points.points}/>
            <PointCard  />
        </Map>
        </MuiThemeProvider>
        </div>
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
