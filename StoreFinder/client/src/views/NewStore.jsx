import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewStore = (props) => {
    const [storeName, setStoreName] = useState("")
    const [storeNumber, setStoreNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const { setPageTitle } = props
    setPageTitle("New Store")

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/stores/add", { storeName: storeName, storeNumber: storeNumber, isOpen: isOpen })
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })

        setStoreName("")
        setStoreNumber(0)
        setIsOpen(false)
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
                <button type="submit">Add a new Store</button>
            </form>
        </div>
    )
}

export default NewStore;