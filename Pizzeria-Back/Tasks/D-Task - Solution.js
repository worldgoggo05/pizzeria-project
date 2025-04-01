//--------D-Task---------
const date = require('date-fns');
const time = date.format(new Date(), 'HH:mm');
class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non,
            lagmon: lagmon, 
            cola: cola
        };
    }

    qoldiq() {
        return `hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
    }

    sotish(product, amount) {
        if (this.products[product] >= amount) {
            this.products[product] -= amount;
            return `hozir ${time}da ${amount}ta ${product} sotildi`;
        }
        return `Kechirasiz, ${product} yetarli emas`;
    }

    qabul(product, amount) {
        this.products[product] += amount;
        return `hozir ${time}da ${amount}ta ${product} qabul qilindi`;
    }
}

// Test
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 2ta cola
console.log(shop.sotish('non', 3)); // hozir 12:00da 3ta non sotildi
console.log(shop.qabul('cola', 4)); // hozir 12:00da 4ta cola qabul qilindi
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 6ta cola