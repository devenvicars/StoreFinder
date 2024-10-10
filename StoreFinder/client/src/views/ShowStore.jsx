import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import StoreCard from '../components/StoreCard'

const ShowStore = (props) => {
    const [store, setStore] = useState(null);

    const { id } = useParams()

    const { setPageTitle } = props


    useEffect(() => {

        axios.get(`http://localhost:3000/api/stores/${id}`)
            .then(res => {
                setPageTitle(`${res.data.storeNumber}Details`)
                setStore(res.data)
            })
    }, [id])

    return (
        <div>
            {store ? <StoreCard store={store} /> : "loading..."}
        </div>
    )
}

export default ShowStore