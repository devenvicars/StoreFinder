import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const [stores, setStores] = useState([])

    const { setPageTitle } = props

    useEffect(() => {
        setPageTitle("Store Finder")
        axios.get("http://localhost:3000/api/stores")
            .then(res => setStores(res.data))
    }, []);

    const handleDelete = id => {
        axios.delete(`http://localhost:3000/api/stores/${id}`)
            .then(res => {
                const filteredStores = stores.filter(store => store._id != id)
                setStores(filteredStores)
            })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Store</th>
                        <th scope="col">Store Number</th>
                        <th scope="col">Open</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {stores && stores.map(store => (
                        <tr>
                            <td><Link to={`/stores/${store._id}`}>{store.storeName}</Link> </td>
                            <td>{store.storeNumber}</td>
                            <td>{store.isOpen ? "Yes" : "No"}</td>
                            <td>
                                <Link to={"/"}><button onClick={() => handleDelete(store._id)}>Delete</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button><Link to={"/stores/add"}>Can't find your store?</Link></button>
            </div>
        </div>
    )
}

export default Home