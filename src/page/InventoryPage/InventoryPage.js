import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <h2>Inventory List</h2>
        <div className="Items">
      {inventory.map((item) => (
        <div className="item">{item.itemName}</div>
      ))}
    </div>
        </>


    //     <>

    //    <section className = 'Inventory List'>

    //    {props.comments.map(comment =>
    //         <CommentCard key={comment.name}
    //         name = {comment.name}
    //         timestamp = {comment.timestamp}
    //         comment = {comment.comment}
    //         />
    //        )}
    //    </section>
    //     </>
    )
}

export default InventoryPage;