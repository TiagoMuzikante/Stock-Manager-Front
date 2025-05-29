import {handler} from "@/apiServices/apiHandler.js";

const ProductEntryOutOriginal = {
  createIncrementAmount: (data) => ({method: 'POST',url: `/product_entry`}, data),
  findIncrementById: (id) => ({method: 'GET',url: `/product_entry/${id}`}),
  listAllIncrements: () =>({method: 'GET',url: '/product_entry/all'}),
  listAllIncrementsWithId: (productId) => ({method: 'GET',url: `/product_entry/product/${productId}`}),
  
  createDecrementAmount: (data) =>({method: 'POST', url:`/product_out`}),
  findDecrementById: (id) => ({method: 'GET',url: `/product_out/${id}`}),
  listAllDecrements: () => ({method: 'GET',url: `/product_out/all`}),
  listAllDecrementsWithId: (productId) => ({method: 'GET',url: `/product_out/product/${productId}`}),
};

export const productRoutes = new Proxy(userRoutesOriginal, handler);


//status: created
const incrementAmount = {
  "amount": 20,
  "productId": 2 
}

//status: created
const decrementAmount = {
  "amount": 15,
  "productId": 2
}

//status: ok
const listIncrementDecrement = [
  {
    "id": 2,
    "amount": 12,
    "product": {
      "id": 1,
      "name": "batata",
      "availableAmount": 0,
      "reservedAmount": 0,
      "pendingAmount": 0,
      "minimumAmount": 0,
      "address": "R33"
    }
  },
  {
    "id": 2,
    "amount": 12,
    "product": {
      "id": 1,
      "name": "batata",
      "availableAmount": 0,
      "reservedAmount": 0,
      "pendingAmount": 0,
      "minimumAmount": 0,
      "address": "R33"
    }
  }
]

