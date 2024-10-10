import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StoreCard = ({ store }) => {

    const [stores, setStores] = useState([])

    const { storeName, storeNumber, isOpen, _id } = store

    const handleDelete = id => {
        axios.delete(`http://localhost:3000/api/stores/${id}`)
            .then(res => {
                const filteredStores = stores.filter(store => store._id != id)
                setStores(filteredStores)
            })
    }

    return (
        <div>

            <p>{storeName}</p>
            <p>{storeNumber}</p>
            <p>{isOpen ? "Open" : "Closed"}</p>
            <Link to={`/stores/edit/${_id}`}><button>Edit Store Details</button></Link>
        </div>
    )
}

export default StoreCard