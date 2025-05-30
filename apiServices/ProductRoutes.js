import {handler} from "@/apiServices/apiHandler.js";

const ProductOriginal = {
  create: (data) => ({method: 'POST',url: `/product`}, data),
  findById: (id) =>({method: 'GET', url:`/product/${id}`}),
  listAll: () =>({method: 'GET',url: '/product/all'}),
  listAllSimple: () => ({method: 'GET',url: `/product`})
};

export const productRoutes = new Proxy(userRoutesOriginal, handler);

// ------ index ------
// const indexData = productRoutes.index()
//     .then((data) =>   { console.log('Dados recebidos:', data); })
//     .catch((error) => { console.error('Erro ao buscar dados:', error); });

// ------ show ------
// const indexData = productRoutes.show(1)
//     .then((data) =>   { console.log('Dados recebidos:', data); })
//     .catch((error) => { console.error('Erro ao buscar dados:', error); });

// ------ create ------
// const indexData = productRoutes.create({name: "fulano", idade: 23, apelido: "ciclano"})
//     .then((data) =>   { console.log('Dados recebidos:', data); })
//     .catch((error) => { console.error('Erro ao buscar dados:', error); });

// ------ update ------
// const indexData = productRoutes.update(1, {name: "fulano", idade: 23, apelido: "ciclano"})
//     .then((data) =>   { console.log('Dados recebidos:', data); })
//     .catch((error) => { console.error('Erro ao buscar dados:', error); });

// ------ delete ------
// const indexData = productRoutes.delete(1)
//     .then((data) =>   { console.log('Dados recebidos:', data); })
//     .catch((error) => { console.error('Erro ao buscar dados:', error); });

//bodies

// create(data)
//status: created
const create = {
  "name": "batata",
  "address": "R33",
  "noAddress": false,
  "brand": "marca da esquina",
  "minimumAmount": 23,
  "supplierId": 1 //not null
}

// findById(id)
//status: ok
const findById =  {
  "id": id,
  "name": "batata",
  "address": "R44",
  "noAddress": false,
  "brand": "uma qualquer",
  "availableAmount": 0,
  "reservedAmount": 0,
  "pendingAmount": 0,
  "minimumAmount": 0,

  "supplier": {}
}

//listAllSimple()
//status: ok
const listAllSimple = [
  {
    "id": 1,
    "name": "batata",
    "availableAmount": 0,
    "reservedAmount": 0,
    "pendingAmount": 0,
    "minimumAmount": 0,
    "address": "R33",
  },
  {
    "id": 2,
    "name": "batata",
    "availableAmount": 0,
    "reservedAmount": 0,
    "pendingAmount": 0,
    "minimumAmount": 0,
    "address": "R33",
  }
]































