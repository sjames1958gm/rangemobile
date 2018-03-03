import React, { Component } from "react";
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { 
  getExercises
} from '../actions';

class Exercises extends Component {
  componentWillMount() {
    this.props.getExercises(this.props.ipAddr);
  }

  renderExerciseList() {
    if (this.props.exercises.length > 0) {
      return this.props.exercises.map((e, i) =>
        <CardSection key={i}>
          <Button>{e}</Button>
        </CardSection>
      );
    }

    return (
      <CardSection>
        <Text>No exercises found</Text>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        {this.renderExerciseList()}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ipAddr: state.addr.ipAddr,
    exercises: state.exercises.exercises
  }
}

const actionsToMap = { getExercises }
export default connect(mapStateToProps, actionsToMap)(Exercises);