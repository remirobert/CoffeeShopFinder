'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

class ShopCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeShop: this.props.coffeeShop
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.nameShop}>
            {this.state.coffeeShop.name}
          </Text>
          <Text style={styles.addressShop}
            numberLines={0}>
            {this.state.coffeeShop.address}
          </Text>
          <View style={styles.separator}/>
        </View>
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
    padding: 10
  },
  nameShop: {
    height: 50,
    fontSize: 25,
    color: 'blue',
    marginBottom: 8
  },
  addressShop: {
    height: 50,
    fontSize: 15,
    color: 'blue',
  },
  subContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: 'darkGray'
  }
});

module.exports = ShopCell;
