import './InventoryItem.scss';
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import { Link } from 'react-router-dom';



function InventoryItem(props)
{
  return (
      <>
          <ul className='inventory__details-list'>
            <li className='inventory__detail'><Link to={`/inventory/${props.id}`}>{props.name}</Link></li>
            <li className='inventory__detail'>{props.category}</li>
            <li className='inventory__detail'>{props.status}</li>
            <li className='inventory__detail'>{props.qty}</li>
            <li className='inventory__detail'>{props.warehouse}</li>
            <li className='inventory__detail'><img  className= "inventory__logo" alt = "delete icon" src = {delete__icon} /> <img  className= "inventory__logo" alt =  "edit icon" src = {edit__icon} /></li>
          </ul>
      </>
  )
}


export default InventoryItem;