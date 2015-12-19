'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
} = React;

class DescriptionLabel extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    console.log("constructor");
  }

  render() {
    return (
      <Text style={styles.welcome}>
        {this.props.text}
      </Text>
    );
  }
};

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = DescriptionLabel;
