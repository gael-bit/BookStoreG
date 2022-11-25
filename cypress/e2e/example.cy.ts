// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the panier', () => {
    cy.visit('http://127.0.0.1:5173')

    cy.contains('Acheter').click()
    cy.contains('panier').click()
    //cy.visit('http://127.0.0.1:5173/panier')
    cy.url().should('include','/panier')

    cy.get('.title').contains('harry potter')
   /* cy.visit('/')
    cy.contains('h1', 'You did it!')*/
  })
})

/*
describe('test store', () => {
  it('should check that the cart is empty', () => {
  expect(store.cart.length).toBe(0);
  })
  it('should add a element', () => {
  let book =   { "id": 1, "title": "harry potter", "price": 10 };
  store.addElement(book);
  expect(store.cart).toContain(book);
  })
  it('should add a element and update the length', () => {
  let book =   { "id": 1, "title": "harry potter", "price": 10 };
  store.addElement(book);
  expect(store.cart.length).toBe(1);
  })
  })*/