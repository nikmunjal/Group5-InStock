import closeIcon from '../../assets/Icons/close-24px.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function InventoryDelete(props) {

    //  idea: get inventory data and then target specific inventory id

    const [inventory, setInventory] = useState([]);
    const [item, setItem] = useState("");

    useEffect(() => {
        const inventoryList = axios.get(`http://localhost:8080/inventory/`)
            setInventory(inventoryList.data);

        const inventoryItem = axios.get(`http://localhost:8080/inventory/${inventory.data.id}`)
            setItem(inventoryItem.data);

        if (item) {
            return item.itemName
        }

        
    });

    const itemDelete = () => {
        item.id.remove()
    }



    return (
        <div className="inventory__delete">

            <img className="close__icon" src={closeIcon} alt="close icon"/>

            <h1 className="inventory__delete-header">
                Delete {props.itemName} inventory item?
            </h1>

            <p className="inventory__delete-desc">
                Please confirm that you'd like to delete {props.itemName} from the inventory list. You won't be able to undo this action.
            </p>

            <section className="inventory__delete-options">
                <button className="inventory__cancel-button">
                    Cancel
                </button>
                
                <button className="inventory__delete-button" onClick={itemDelete()}>
                    Delete
                </button>
                

            </section>
        </div>
    )
};

export default InventoryDelete;