import { useParams } from 'react-router-dom';
import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InventoryDetailsPage(){


  const [details,setdetails] = useState({});
  const {id} = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const fetchData = async () => {
       try {
          const response = await axios.get(`${API_URL_Inventory}/${id}`);
          setdetails(response.data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
      return <div className="Loading">Loading Details...</div>;
    }

    console.log(details)
  return (

          <h2>the item is {details.itemName}</h2>

  )
}


export default InventoryDetailsPage;