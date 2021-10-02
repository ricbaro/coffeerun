(function (window) {
    'use strict';

    var App = window.App || {};

    class Truck {
        constructor(truckId, db) {
            this.truckId = truckId;
            this.db = db;
            console.log('in the Truck constructor');
        }
        createOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            this.db.add(order.emailAddress, order);
        }
        deliverOrder(customerId) { 
            console.log('Delivering order for ' + customerId);
            this.db.remove(customerId);
        }
        printOrders() {
            var customerIdArray = Object.keys(this.db.getAll());
            console.log('Truck #' + this.truckId + ' has pending orders: ');
            customerIdArray.forEach(function(id) {
                console.log(this.db.get(id));
            }.bind(this));
        }
        // static runTests(ds) {
        //     truck = new Truck(10, ds);
        //     truck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
        //     truck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
        //     truck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
        //     truck.printOrders();
        //     truck.deliverOrder('dr@no.com');
        //     truck.deliverOrder('m@bond.com');
        //     truck.printOrders();
        // }
    }

    App.Truck = Truck;
    window.App = App;
})(window);