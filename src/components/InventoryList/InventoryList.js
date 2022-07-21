import './InventoryList.scss';
import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';

function InventoryList() {
    const [inventory,setinventory] = useState({items:[]});

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios(
            {API_URL_Inventory},
          );

          setinventory(response.data);
        };

        fetchData();
      }, []);

      return(
        <ul>
      {inventory.items.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    //     <>

    //    <section className = 'InventoryList'>

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

export default InventoryList;