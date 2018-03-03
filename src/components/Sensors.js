import React, { Component } from "react";
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { 
  getSensorList
} from '../actions';

class Sensors extends Component {
  componentWillMount() {
    this.props.getSensorList(this.props.ipAddr);
  }

  renderSensorList() {
    if (this.props.sensors.length > 0) {
      return this.props.sensors.map((e, i) =>
        <CardSection key={i}>
          <Button>{e}</Button>
        </CardSection>
      );
    }

    return (
      <CardSection>
        <Text>No sensors found</Text>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        {this.renderSensorList()}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ipAddr: state.addr.ipAddr,
    sensors: state.sensors.sensorList
  }
}

const actionsToMap = { getSensorList }
export default connect(mapStateToProps, actionsToMap)(Sensors);