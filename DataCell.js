'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

class DataCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeShop: this.props.coffeeShop
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          {this.state.coffeeShop.name}
        </Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textTitle: {
    height: 50,
    color: 'blue'
  }
});

module.exports = DataCell;
