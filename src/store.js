import {reactive} from 'vue'


export const store = reactive({
    order : [],
    price: 0,

    ajouterPanier(book){
        this.order.push(book);
        //this.price += book.price;
    },

    supprimerDuPanier(index){
        this.order.splice(index, 1);
        //this.price -= book.price;
    },

    calculPrix(){
        this.price = this.order.reduce((previousValue,currentValue) => previousValue + currentValue.price, 0);
    }



})