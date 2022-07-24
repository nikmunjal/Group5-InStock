import { API_URL_Warehouse } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem';
import Header from '../../components/Header';

function WarehousePage() {
    const [warehouse,setwarehouse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await axios.get(`${API_URL_Warehouse}`);
            setwarehouse(response.data);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };

      fetchData();
    }, []);

    if (loading) {
        return <div className="Loading">Loading warehouse list...</div>;
      }



      return(

        <>
        <Header
            warehouseLink={"warehouses__link-active"}
            inventoryLink={""}/>
        <h2>Warehouse List</h2>

      {warehouse.map(w =>
      <WarehouseItem key={w.id}
      name = {w.name}
      address = {w.address}
      contactName = {w.contact.name}
      contactPhone = {w.contact.phone}
      contactEmail = {w.contact.email}

      />
     )}

        
        </>



    )
}

export default WarehousePage;