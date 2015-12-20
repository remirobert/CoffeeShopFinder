'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class DetailShopView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          "salut second detail page"
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30
  }
});

module.exports = DetailShopView;
