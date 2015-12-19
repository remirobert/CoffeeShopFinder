/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var MainView = require('./MainView.js');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var CoffeApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: MainView,
          title: 'My View Title'
        }}
        />
    );
  }
});

AppRegistry.registerComponent('CoffeApp', () => CoffeApp);
