import React, { Component } from 'react';
import { Map, Marker} from 'yandex-map-react';
import points from './data';

const APPID = 5618842;
const APPSECRET = 'R7AIAbXopL693wQeDsnp';
const REDIRECT_URL = 'http://pvlt.test.com:3000';

const vkontakte = require('vkontakte');

let vk = vkontakte(APPID, APPSECRET);
vk('users.get', { user_ids: 'pavlletto', fields: 'uid,first_name,photo'  }, function (err, user) {
 console.log(user);
});

const mapStyles = {
    float: 'left'
};

class App extends Component {
  render() {
      return (
          <Map style={mapStyles} height={'100%'}  width={'100%'}  center={[59.9304132,30.3332581]} zoom={10}>
        {points.map(([lon,lat], i) =>  (
            <Marker key={'marker_' + i} lat={lat} lon={lon} />
        ))}
        </Map>
)}}
export default App;
