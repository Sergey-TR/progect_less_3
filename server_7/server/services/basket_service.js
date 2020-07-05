module.exports = {
    // obj === item
    add(basket, item) {
        basket.contents.push(item);
        return basket
    },
    change(basket, id, amount) {
       
        let find = this._search(basket.contents, id);
        find.quantity += amount; //amount: +1 || -1
        
        return basket
    },
    delete(basket, id) {
        let find = this._search(basket.contents, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        return basket
    },
    // total(basket) {
    //     let totalSumm = 0;
    //     let mutch = 0;

    // for (let key in basket.contents) {
    //     totalSumm += basket.contents[key].price * basket.contents[key].quantity;
    //     mutch += basket.contents[key].quantity;
    // }
    // return basket
    // },
    _search(array, id) {
        return array.find(item => item.id_product == id);
    }
    
}