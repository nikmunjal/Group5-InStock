import './WarehouseItem.scss';
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";



function WarehouseItem(props)
{
  return (
      <>
          <ul className='warehosue__details-list'>
            <li className='warehouse__detail'>{props.name}</li>
            <li className='warehouse__detail'>{props.address}</li>
            <li className='warehouse__detail'>{props.contactName}</li>
            <li className='warehouse__detail'>{props.contactPhone} {props.contactEmail}</li>
            <li className='warehouse__detail'><img  className= "warehouse__logo" alt = "delete icon" src = {delete__icon} /> <img  className= "warehouse__logo" alt =  "edit icon" src = {edit__icon} /></li>
          </ul>
      </>
  )
}


export default WarehouseItem;