import { Router } from 'express';
import { createStore, getAllStores, getOneStore, updateStore, deleteStore } from '../controllers/store.controller.js';

const stores = Router()

// read all
stores.route("/")
    .get(getAllStores)

// create
stores.route("/add")
    .post(createStore)

//update
stores.route("/edit/:id")
    .put(updateStore)

//read one and delete by id
stores.route("/:id")
    .get(getOneStore)
    .delete(deleteStore)

export default stores