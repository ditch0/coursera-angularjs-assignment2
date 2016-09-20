(function() {
    angular
        .module('ShoppingListCheckOff', [])
        .service('shoppingListCheckOffService', ShoppingListCheckOffService)
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

    ToBuyShoppingController.$inject = ['shoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['shoppingListCheckOffService'];

    function ToBuyShoppingController(shoppingListCheckOffService) {
        this.getItems = function() {
            return shoppingListCheckOffService.getItemsToBuy();
        };
        this.checkOffItem = function(index) {
            shoppingListCheckOffService.markItemAsBought(index);
        }
    };

    function AlreadyBoughtShoppingController(shoppingListCheckOffService) {
        this.getItems = function() {
            return shoppingListCheckOffService.getBoughtItems();
        };
    }

    function ShoppingListCheckOffService() {
        var items = [
            { name: 'cookies',   quantity: 10 },
            { name: 'milk',      quantity: 2 },
            { name: 'chocolate', quantity: 7 },
            { name: 'apples',    quantity: 3 },
            { name: 'oranges',   quantity: 5 }
        ];

        this.getItemsToBuy = function() {
            return items.filter(function(item) { return !item.isBought });
        };

        this.getBoughtItems = function() {
            return items.filter(function(item) { return item.isBought });
        };

        this.markItemAsBought = function(index) {
            var item = this.getItemsToBuy()[index];
            item.isBought = true;
        };
    }
})();