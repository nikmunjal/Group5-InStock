import './InventoryDetail.scss';
import back__icon from "../../assets/Icons/arrow_back-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import { Link } from 'react-router-dom';

function InventoryDetail(props){



return (
    <>

        <div className='inventory-detail__card'>

            <div className='detail-header'>
            <div className='title__container'> 
            <Link to="/inventory">
                <img  className= "logo" alt =  "back icon" src = {back__icon} /> 
            </Link>
            <h1 className='detail-header__title'>{props.details.itemName}</h1> </div>
                <Link className='detail-header__edit' to={`/inventory/edit/${props.details.id}`}>
                        <img className="detail-header__edit--icon" src={edit__icon} alt="edit icon" />
                        <p className="detail-header__edit--text">Edit</p>
                </Link>
            </div>
            <div className='details__card'>
            <div>
            <ul className='detail-description-list'>
            <li className='detail-description-list__item'><p className="detail-title"> ITEM DESCRIPTION</p></li>
            <li className='detail-description-list__item'><p className='detail-description'>{props.details.description}</p></li>
            </ul>
            <div className='detail__subcard'>
                <ul className='detail-category-list'>
                <li className='detail-category-list__item'><p className="detail-title">CATEGORY</p></li>
                <li className='detail-category-list__item'><p className='detail-category'>{props.details.category}</p></li>
                </ul>

                <ul className='detail-placeholder-container' id='1'>
                <li className='detail-placeholder-container__item'><p className="detail-title">blank</p></li>
                <li className='detail-placeholder-container__item'><p className='detail-blank'>"blank"</p></li>
                </ul>
            </div></div>
            <div>
            <div className='detail__subcard'>
                <ul className='detail-status-list'>
                <li className='detail-status-list__item'><p className="detail-title">STATUS</p></li>
                <li className='detail-status-list__item'><p className={`detail-status ${props.details.status}`}>{props.details.status}</p></li>
                </ul>
                <ul className='detail-qty-list'>
                <li className='detail-qty-list__item'><p className="detail-title">QTY</p></li>
                <li className='detail-qty-list__item'><p className='detail-qty'>{props.details.quantity}</p></li>
                </ul>
                </div>
                <div className='detail__subcard'>
                <ul className='detail-warehouse-list'>
                <li className='detail-warehouse-list__item'><p className="detail-title">WAREHOUSE</p></li>
                <li className='detail-warehouse-list__item'><p className='detail-warehouse'>{props.details.warehouseName}</p></li>
                </ul>

                <ul className='detail-placeholder-container' id='2'>
                <li className='detail-placeholder-container__item'><p className="detail-title">blank</p></li>
                <li className='detail-placeholder-container__item'><p className='detail-blank'>"blank"</p></li>
                </ul>
            </div></div>
            </div>
        </div>
    </>
)
}


export default InventoryDetail;