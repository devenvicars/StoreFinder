import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStore = (props) => {
    const [storeName, setStoreName] = useState("")
    const [storeNumber, setStoreNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(Boolean)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const { id } = useParams()


    useEffect(() => {

        const { setPageTitle } = props

        axios.get(`http://localhost:3000/api/stores/${id}`)
            .then(res => {
                setStoreName(res.data.storeName)
                setStoreNumber(res.data.storeNumber)
                setIsOpen(res.data.isOpen)
                setPageTitle(`Update Store ${res.data.storeNumber}`)
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(storeName)

        axios.put(`http://localhost:3000/api/stores/edit/${id}`, { storeName: storeName, storeNumber: storeNumber, isOpen: isOpen })
            .then(res => {
                navigate(`/stores/${id}`)
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })

        setStoreName(storeName)
        setStoreNumber(storeNumber)
        setIsOpen(isOpen)
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    Store Name <input type="text" name="storeName" id="storeName" onChange={e => setStoreName(e.target.value)} value={storeName} />
                    <p style={{ color: "red" }}>{errors.storeName ? errors.storeName.message : ""}</p>
                </div>
                <div>
                    Store Number <input type="number" name="storeNumber" id="storeNumber" onChange={e => setStoreNumber(e.target.value)} value={storeNumber} />
                    <p style={{ color: "red" }}>{errors.storeNumber && errors.storeNumber.message}</p>
                </div>
                <div>
                    Open? <input type="checkBox" name="isOpen" id="isOpen" onChange={e => setIsOpen(e.target.checked)} value={isOpen} />
                </div>
                <button type="submit">Edit Store</button>
            </form>
        </div>
    )
}

export default UpdateStore