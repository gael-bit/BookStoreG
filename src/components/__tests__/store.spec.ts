import { describe, it, expect, test } from 'vitest'
import { store } from '../../store.js'


describe('test store', () => {
  test('should add a element and check if is equal', () => {
    store.order=[];
    let book =   { "id": 1, "title": "harry potter", "price": 10, "img":"https://m.media-amazon.com/images/I/916DM68L6cS.jpg"};
    let book1 = { "id": 2, "title": "blanche neige", "price": 20, "img":"https://static.fnac-static.com/multimedia/images_produits/ZoomPE/9/2/9/9782230007929/tsp20130902232503/Blanche-Neige-et-les-sept-nains.jpg" };
    let result  = [book, book1];
    store.ajouterPanier(book);
    store.ajouterPanier(book1);

    expect(store.order).toEqual(result);
  })
})

describe('test price', () => {
  test("should increment price", () => {
    store.order=[];
    store.price = 0;
    let book =   { "id": 1, "title": "harry potter", "price": 10, "img":"https://m.media-amazon.com/images/I/916DM68L6cS.jpg"};
    let book1 = { "id": 2, "title": "blanche neige", "price": 20, "img":"https://static.fnac-static.com/multimedia/images_produits/ZoomPE/9/2/9/9782230007929/tsp20130902232503/Blanche-Neige-et-les-sept-nains.jpg" };
    store.ajouterPanier(book);
    store.ajouterPanier(book1);
    store.calculPrix();
    expect(store.price).toBe(30);

  })
})

describe('test remove function', () => {
  test("should remove a book", () => {
    store.order=[];
    store.price = 0;
    let book =   { "id": 1, "title": "harry potter", "price": 10, "img":"https://m.media-amazon.com/images/I/916DM68L6cS.jpg"};
    let book1 = { "id": 2, "title": "blanche neige", "price": 20, "img":"https://static.fnac-static.com/multimedia/images_produits/ZoomPE/9/2/9/9782230007929/tsp20130902232503/Blanche-Neige-et-les-sept-nains.jpg" };
    let book2 = { "id": 3, "title": "alice", "price": 30, "img": "https://cdn.franceloisirs.com/13479-3368278-thickbox/alice-au-pays-des-merveilles.jpg"};
    store.ajouterPanier(book);
    store.ajouterPanier(book1);
    store.ajouterPanier(book2);
    let result = [book, book2]
    store.supprimerDuPanier(1)

    expect(store.order.length).toEqual(2);
    store.calculPrix();
    expect(store.price).toBe(40);
    expect(store.order).toEqual(result);
  })
})