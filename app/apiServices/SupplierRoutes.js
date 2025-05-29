import {handler} from "@/apiServices/apiHandler.js";

const ProductOriginal = {
  create: (data) => ({method: 'POST',url: `/supplier`}, data),
  findById: (id) =>({method: 'GET', url:`/supplier/${id}`}),
  listAll: () =>({method: 'GET',url: '/supplier'}),
  destroy: (id) => ({method: 'DELETE',url: `/supplier/${id}`})
};

export const userRoutes = new Proxy(userRoutesOriginal, handler);

// bodies


// status: created
const create = {
  "name": "fornecedor",
  "contact": "whatsapp email telefone fisicamente qualquer coisa",
}

// findById(id)
// status: ok
const findById = {
  "id": 2,
  "name": "nome qualquer",
  "contact": "12 3 4567-8901"
}

//listAll()
//status: ok
const listAll = [
  {
    "id": 1,
    "name": "nome qualquer",
    "contact": "12 3 4567-8901"
  },
  {
    "id": 2,
    "name": "nome qualquer 2",
    "contact": "12 3 4567-8901"
  }
]

//destroy(id)
//status: no_content
const destroy = {}