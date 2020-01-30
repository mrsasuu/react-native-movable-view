import React, { Component } from 'react';
import { PanResponder, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class MovableView extends Component {
  constructor(props) {
    super(props);
    var x = 0;
    var y = 0;
    if(props.X){
      x = props.X;
    }
    if(props.Y){
      y = props.Y;
    }
    this.state = {
      pan: new Animated.ValueXY({x: x, y: y}),
      disabled: props.disabled,
      xOffset: x,
      yOffset: y,
    };

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => !this.state.disabled,
      onMoveShouldSetPanResponderCapture: () => !this.state.disabled,
      onPanResponderGrant: () => {
        this.state.pan.setOffset({ x: this.state.xOffset, y: this.state.yOffset });
        this.props.onDragStart();
      },
      onPanResponderMove:
        Animated.event([null, {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        }]),
      onPanResponderRelease: (e, gestureState) => {
        const xOffset = this.state.xOffset + gestureState.dx;
        const yOffset = this.state.yOffset + gestureState.dy;
        this.setState({ xOffset , yOffset });
        this.props.onDragEnd();
      }
    });
  }

  componentWillMount() {
    if (typeof this.props.onMove === 'function')
      this.state.pan.addListener((values) => this.props.onMove(values));
  }

  componentWillUnmount() {
    this.state.pan.removeAllListeners();
  }

  changeDisableStatus = () => {
    this.state.disabled = !this.state.disabled
  };

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.props.style, this.state.pan.getLayout()]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

MovableView.propTypes = {
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onMove: PropTypes.func,
  disabled: PropTypes.bool,
};

MovableView.defaultProps = {
  onDragStart: () => {},
  onDragEnd: () => {},
  disabled: false,
};
