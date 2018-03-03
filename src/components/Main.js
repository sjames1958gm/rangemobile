import React, { Component } from "react";
import { View, Text, AccessibilityInfo } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { Actions } from 'react-native-router-flux';

import { 
  addrChanged
} from '../actions';

class Main extends Component {
  onAddressChange(text) {
    this.props.addrChanged(text);
  }
  onExercisesPressed() {
    console.log(this.props);
    if (this.props.ipAddr.length > 0) {
      Actions.exercises();
    }
  }
  onSensorsPressed() {
    if (this.props.ipAddr.length > 0) {
      Actions.sensors();
    }
  }
  onLedsPressed() {
    if (this.props.ipAddr.length > 0) {
      Actions.leds();
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
        <Input
            label=""
            type="ip-address"
            placeholder="ip address"
            onChangeText={(text) => this.onAddressChange(text)}
            value={this.props.ipAddr}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onExercisesPressed()}>Exercises</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onSensorsPressed()}>Sensors</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedsPressed()}>Leds</Button>
        </CardSection>  
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ipAddr: state.addr.ipAddr
  }
}

const actionsToMap = { addrChanged }
export default connect(mapStateToProps, actionsToMap)(Main);