'use strict';

var React = require('react-native');
var ShopCell = require('./ShopCell.js');
var CoffeeShop = require('./CoffeeShop.js');
var config = require('./configAPI.json');
var DetailShopView = require('./DetailShopView');

var REQUEST_URL = "https://api.foursquare.com/v2/venues/search?client_id=" + config.CLIENT_ID + "&client_secret=" + config.CLIENT_SECRET + "&v=20130815&ll=40.7,-74&query=coffee"

var {
  AppRegistry,
  StyleSheet,
  ListView,
  NavigatorIOS,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

class ListViewShop extends React.Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.didSelectShop = this.didSelectShop.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      navigator: props.navigator,
      coffees: [],
      dataSource: ds.cloneWithRows([])
    };
  }

  didSelectShop(shop) {
    this.state.navigator.push({
      title: shop.name,
      component: DetailShopView,
      passProps: {shop}
    });
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      var coffees = responseData.response.venues.map(function(currentItem) {
        return new  CoffeeShop(currentItem);
      });
      this.setState({
        coffees: coffees,
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
      <TouchableHighlight
      onPress={() => this.didSelectShop(currentRow)}>
        <View>
          <ShopCell coffeeShop={currentRow}/>
        </View>
      </TouchableHighlight>
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
