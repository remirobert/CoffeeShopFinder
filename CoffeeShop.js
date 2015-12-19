'use_strict';

class CoffeeShop {
    constructor(shop) {
      this.name = shop.name;
      this.address = shop.location.formattedAddress.reduce(function(prev, next){
        return prev + ", " + next;
      });
      console.log(this.address);
    }
}

module.exports = CoffeeShop;
