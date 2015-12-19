'use strict';

var React = require('react-native');
var ListViewShop = require('./ListViewShop.js');

var {
  AppRegistry,
  StyleSheet,
  View
} = React;

class MainView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListViewShop/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGray'
  }
});

module.exports = MainView;
