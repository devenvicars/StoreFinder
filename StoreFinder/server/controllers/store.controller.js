import Store from '../models/stores.model.js'

// create a store
async function createStore(req, res) {
    try {
        const newStore = await Store.create(req.body);
        res.json(newStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// get all stores
async function getAllStores(req, res) {
    try {
        const allStores = await Store.find();
        res.json(allStores);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// get one store by id
async function getOneStore(req, res) {
    try {
        const foundStore = await Store.findById(req.params.id);
        res.json(foundStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// update a store by id
async function updateStore(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// delete a store by id
async function deleteStore(req, res) {
    try {
        const deletedStore = await Store.findByIdAndDelete(req.params.id);
        res.json(deletedStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createStore,
    getAllStores,
    getOneStore,
    updateStore,
    deleteStore
};