'use strict';

var React = require('react-native');
var ListViewData = require('./ListViewData.js');

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
        <ListViewData/>
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
