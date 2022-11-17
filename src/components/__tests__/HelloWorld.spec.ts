 /*import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
*/
import { describe, it, expect, test } from 'vitest'

import { store } from '../../store.js'


describe('test store', () => {
  test('should add a element', () => {
    let book =   { "id": 1, "title": "harry potter", "price": 10, "img":"https://m.media-amazon.com/images/I/916DM68L6cS.jpg"};
    let book1 = { "id": 2, "title": "blanche neige", "price": 20, "img":"https://static.fnac-static.com/multimedia/images_produits/ZoomPE/9/2/9/9782230007929/tsp20130902232503/Blanche-Neige-et-les-sept-nains.jpg" };
    let book2 = { "id": 3, "title": "alice", "price": 30, "img": "https://cdn.franceloisirs.com/13479-3368278-thickbox/alice-au-pays-des-merveilles.jpg"};
    let book3 = { "id": 4, "title": "cendrillon", "price": 20, "img": "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/9/9/8/9782230007899/tsp20090122221956/Cendrillon.jpg"  };
    let book4 = { "id": 5, "title": "luke cage", "price": 10,"img": "https://www.syfy.com/sites/syfy/files/lukecagecityfire2021001_cvr.jpg"};
    let book5 = { "id": 6, "title": "Jessica Jones", "price": 15,"img": "https://i.annihil.us/u/prod/marvel/i/mg/1/60/5e149e4447993/clean.jpg"};
    let book6 = { "id": 7, "title": "Le seigneur des anneaux", "price": 25,"img": "https://m.media-amazon.com/images/I/71wmwLm32nL.jpg"};
    store.ajouterPanier(book);
    store.ajouterPanier(book1);
    store.ajouterPanier(book2);
    store.ajouterPanier(book3);
    store.ajouterPanier(book4);
    store.ajouterPanier(book5);
    store.ajouterPanier(book6);
    expect(store.order).toContain(book);
  })
})

describe('test price', () => {
  test("should increment price", () => {
    store.calculPrix();
    expect(store.price).toBe(130);

  })
})

describe('test price', () => {
  test("should increment price", () => {
    store.calculPrix();
    expect(store.price).toBe(130);

  })
})

describe('test remove function', () => {
  test("should remove book and set the price to zero", () => {
   
    store.order.forEach(() => store.supprimerDuPanier(0));
    store.order.forEach(() => store.supprimerDuPanier(0));
    store.order.forEach(() => store.supprimerDuPanier(0));
      
    
    
    store.calculPrix();
    expect(store.order.length).toEqual(0);
    expect(store.price).toBe(0);

  })
})