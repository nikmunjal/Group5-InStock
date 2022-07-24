import './WarehouseItem.scss';
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg"


function WarehouseItem(props)
{
  return (


      <>





          <div className='warehouse-item__card'>
            <div className='grouping' id='1'>
            <ul className='name-list'>
              <li className='name-list__item'><p className="title">WAREHOUSE</p></li>
              <li className='name-list__item'><p className='name'>{props.name}</p> <img  className= "logo" alt = "chevron" src = {chevron} /></li>
            </ul>
            <ul className='address-list'>
              <li className='address-list__item'><p className="title">ADDRESS</p></li>
              <li className='address-list__item'><p className='address'>{props.address}</p></li>
            </ul></div>

          <div className='grouping' id="2">
          <ul className='contactName-list'>
            <li className='contactName-list__item'><p className="title">CONTACT NAME</p></li>
            <li className='contactName-list__item'><p className='contactName'>{props.contactName}</p></li>
          </ul>
          <ul className='contactInfo-list'>
            <li className='contactInfo-list__item'><p className="title">CONTACT INFORMATION</p></li>
            <li className='contactInfo-list__item'><p className='contactInfo'>{props.contactPhone} {props.contactEmail}</p></li>
          </ul></div>
          <div className='grouping' id='3'>
          <ul className='action-list'>
            <li className='action-list__item'><p className="title">ACTIONS</p></li>
            <li className='action-list__item'><img  className= "logo" alt = "delete icon" src = {delete__icon} /> <img  className= "logo" alt =  "edit icon" src = {edit__icon} /></li>
          </ul></div>

          </div>

      </>
  )
}


export default WarehouseItem;