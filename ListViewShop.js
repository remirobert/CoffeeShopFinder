'use strict';

var React = require('react-native');
var ShopCell = require('./ShopCell.js');
var CoffeeShop = require('./CoffeeShop.js');
var config = require('./configAPI.json');

var REQUEST_URL = "https://api.foursquare.com/v2/venues/search?client_id=" + config.CLIENT_ID + "&client_secret=" + config.CLIENT_SECRET + "&v=20130815&ll=40.7,-74&query=coffee"

var {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Image
} = React;

class ListViewShop extends React.Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.response);
      var coffees = responseData.response.venues.map(function(currentItem) {
        return new  CoffeeShop(currentItem);
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(coffees)
      });
    })
    .done();
  }

  componentDidMount() {
    this.fetchData();
  }

  renderRow(currentRow) {
    return (
      <ShopCell coffeeShop={currentRow}/>
    );
  }

  render() {
    return (
      <ListView style={styles.list}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      />
    );
  }
}

var styles = StyleSheet.create({
  list: {
    backgroundColor: 'gray'
  }
});

module.exports = ListViewShop;