var Mobiles = function(faker) {
    var self = this;
    var fake = faker.fake;

    self.color = function() {
        return faker.random.arrayElement(faker.definitions.mobiles.color);
    };
    self.price = function() {
        return faker.random.arrayElement(faker.definitions.mobiles.price);
    };
    self.name = function() {
        return faker.random.arrayElement(faker.definitions.mobiles.name);
    };


};

module['exports'] = Mobiles;
