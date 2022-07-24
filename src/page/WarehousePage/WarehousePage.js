import { API_URL_Warehouse } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';

function WarehousePage() {
    const [Warehouse,setWarehouse] = useState({items:[]});

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios(
            {API_URL_Warehouse},
          );

          setWarehouse(response.data);
        };

        fetchData();
      }, []);

      return(
        <>
          <Header 
          warehouseLink={"warehouses__link-active"}
          inventoryLink={""}
          />
          <ul>
            {Warehouse.items.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </>
      )
}

export default WarehousePage;