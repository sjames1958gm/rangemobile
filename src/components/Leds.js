import React, { Component } from "react";
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { 
  changeLed
} from '../actions';

class Leds extends Component {
  onLedPressed(led, state) {
    console.log(this.props);
    console.log(led, state);
    this.props.changeLed(this.props.ipAddr, led, state);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.onLedPressed("1", "on")}>Led 1 On</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedPressed("1", "off")}>Led 1 Off</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedPressed("2", "on")}>Led 2 On</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedPressed("2", "off")}>Led 2 Off</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedPressed("3", "on")}>Led 3 On</Button>
        </CardSection>  
        <CardSection>
          <Button onPress={() => this.onLedPressed("3", "off")}>Led 3 Off</Button>
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

const actionsToMap = { changeLed }
export default connect(mapStateToProps, actionsToMap)(Leds);