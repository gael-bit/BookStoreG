import {reactive} from 'vue'


export const store = reactive({
    order : [],
    price: 0,

    ajouterPanier(book){
        this.order.push(book);
        this.price += book.price;
    },

    supprimerDuPanier(book,index){
        this.order.splice(index, 1);
        this.price -= book.price;
    }
})