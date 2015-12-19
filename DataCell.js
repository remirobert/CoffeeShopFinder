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
        <Text style={styles.nameShop}>
          {this.state.coffeeShop.name}
        </Text>
        <Text style={styles.addressShop}>
          {this.state.coffeeShop.address}
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
  nameShop: {
    height: 50,
    fontSize: 15,
    color: 'blue'
  },
  addressShop: {
    height: 50,
    fontSize: 10,
    color: 'blue'
  }
});

module.exports = DataCell;
