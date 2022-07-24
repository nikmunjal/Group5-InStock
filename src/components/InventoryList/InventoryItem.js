import './InventoryItem.scss';
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';





function InventoryItem(props){



  return (
      <>


          <div className='inventory-item__card'>

            <ul className='name-list'>
              <li className='name-list__item'><p className="title">INVENTORY ITEM</p></li>
              <li className='name-list__item'><p className='name'><Link to={`/inventory/${props.id}`}>{props.name}</Link></p> <img  className= "logo" alt = "chevron" src = {chevron} /></li>
            </ul>
            <ul className='category-list'>
              <li className='category-list__item'><p className="title">CATEGORY</p></li>
              <li className='category-list__item'><p className='category'>{props.category}</p></li>
            </ul>
            <ul className='status-list'>
              <li className='status-list__item'><p className="title">STATUS</p></li>
              <li className='status-list__item'><p className={`status ${props.status}`}>{props.status}</p></li>
            </ul>
            <ul className='qty-list'>
              <li className='qty-list__item'><p className="title">QTY</p></li>
              <li className='qty-list__item'><p className='qty'>{props.qty}</p></li>
            </ul>
            <ul className='warehouse-list'>
              <li className='warehouse-list__item'><p className="title">WAREHOUSE</p></li>
              <li className='warehouse-list__item'><p className='warehouse'>{props.warehouse}</p></li>
            </ul>
            <ul className='action-list'>
              <li className='action-list__item'><p className="title">ACTIONS</p></li>
              <li className='action-list__item'>
                <Link to={`/inventory/delete/${props.id}`}>
                  <img  className= "logo" alt = "delete icon" src = {delete__icon} /> 
                </Link>
                <img  className= "logo" alt =  "edit icon" src = {edit__icon} />
              </li>
            </ul>
            <ul className='placeholder-container'>
              <li className='placeholder-container__item'><p className="title">blank</p></li>
              <li className='placeholder-container__item'><p className='blank'>"blank"</p></li>
            </ul>
          </div>
      </>
  )
}


export default InventoryItem;