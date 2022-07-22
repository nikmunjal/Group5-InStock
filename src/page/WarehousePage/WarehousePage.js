import { API_URL_warehouse } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem';

function WarehousePage() {
    const [warehouse,setwarehouse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:8080/warehouse');
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