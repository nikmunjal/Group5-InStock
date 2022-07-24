import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryItem from '../../components/InventoryList/InventoryItem';
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
import Header from '../../components/Header';


function InventoryPage() {
    const [inventory,setinventory] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:8080/inventory');
            setinventory(response.data);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };

      fetchData();
    }, []);

    if (loading) {
        return <div className="Loading">Loading Inventory...</div>;
      }



      return(

        <>
        <Header 
          warehouseLink={""}
          inventoryLink={"inventory__link-active"}
        />
        <h2>Inventory List</h2>

        {inventory.map(item =>
        <InventoryItem key={item.id}
        name = {item.itemName}
        category = {item.category}
        status = {item.status}
        qty = {item.quantity}
        warehouse = {item.warehouseName}
        />
        )}

        {inventory.map(item =>
        <InventoryDelete
          itemName = {item.itemName}
        />
        )}
        
        </>



    )
}

export default InventoryPage;