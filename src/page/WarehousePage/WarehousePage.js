import { API_URL_Warehouse } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <ul>
      {Warehouse.items.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    //     <>

    //    <section className = 'Warehouse List'>

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

export default WarehousePage;