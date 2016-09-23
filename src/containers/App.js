import React, { Component, PropTypes  } from 'react'
import { connect  } from 'react-redux'
import { bindActionCreators  } from 'redux'
import {Map} from 'yandex-map-react';   
import Points from '../components/Points';
import './App.css';
import * as pointsActions from '../actions/Points'
import PointCard from '../components/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const mapStyles = {
    float: 'left'
};
class App extends Component {
    static childContextTypes = {
            muiTheme: PropTypes.object
                
    }
    getChildContext() {
                    return { muiTheme: getMuiTheme(baseTheme)  };
                                
    } 
    render() {
    const {map, points} = this.props
       const {getPoints} = this.props.pointsActions 
        return <div> <Map style={mapStyles} height={'100%'} width={'100%'} zoom={map.zoom} center={[map.long,map.lat]}>
            <Points getPoints={getPoints} points={points.points}/>
        </Map>
        <PointCard />
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
