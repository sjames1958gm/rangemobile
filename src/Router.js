import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import Exercises from './components/Exercises';
import Sensors from './components/Sensors';
import Leds from './components/Leds';

const RouterComponent = (props) => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene>
          <Scene
            key="main"
            component={Main}
            title="Shooting Range"
            initial
            titleStyle={{alignSelf: 'center'}} 
          />
          <Scene
            key="exercises"
            component={Exercises}
            title="Exercises"
            titleStyle={{alignSelf: 'center'}} 
          />
          <Scene
            key="sensors"
            component={Sensors}
            title="Sensors"
            titleStyle={{alignSelf: 'center'}} 
          />
          <Scene
            key="leds"
            component={Leds}
            title="Leds"
            titleStyle={{alignSelf: 'center'}} 
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent; 