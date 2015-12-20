'use strict';

var React = require('react-native');
var ListViewShop = require('./ListViewShop.js');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View
} = React;

class MainView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.navigator);
    return (
      <View style={styles.container}>
        <ListViewShop navigator={this.props.navigator}/>
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
