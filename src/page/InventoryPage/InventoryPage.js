
import Header from "../../components/Header";
import Footer from "../../components/Footer";


import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryItem from '../../components/InventoryItem/InventoryItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function InventoryPage() {
    const [inventory,setinventory] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await axios.get(`${API_URL_Inventory}`);
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
      id = {item.id}
      name = {item.itemName}
      category = {item.category}
      status = {item.status}
      qty = {item.quantity}
      warehouse = {item.warehouseName}

      />

     )}

        <Footer />
        </>



    )
}

export default InventoryPage;