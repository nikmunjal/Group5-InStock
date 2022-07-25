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




};

export default InventoryDelete;