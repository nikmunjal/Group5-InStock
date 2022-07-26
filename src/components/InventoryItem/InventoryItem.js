import './InventoryItem.scss';
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';
import close from '../../assets/Icons/close-24px.svg';


function InventoryItem(props){

  const [open, setOpen] = useState(false);

  function openDeleteModal() {
    setOpen(true);
  };

  function closeDeleteModal() {
    setOpen(false);
  };

  function deleteItem() {
    axios.delete(`http://localhost:8080/inventory/${props.id}`)
    props.deleteItem(props.id);
    setOpen(false);
  };


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
                <img onClick={openDeleteModal} className= "logo" alt = "delete icon" src = {delete__icon} id='delete__icon' />

                <Modal isOpen={open} close={closeDeleteModal} className="modal">
                    <section className="modal__body">
                        <img className="inventory__modal-close" onClick={closeDeleteModal} src={close} alt="close icon"/>
                      <section className="modal__body-text">
                        <h1 className="inventory__delete-header">
                          Delete {props.name} inventory item?
                        </h1>
                        <p className="inventory__delete-desc">
                          Please confirm that you'd like to delete {props.itemName} from the inventory list. You won't be able to undo this action.
                        </p>
                      </section>

                      <section className="inventory__delete-options">
                          <section className="inventory__left-option">
                            <button className="inventory__cancel-button inventory__modal-button" onClick={closeDeleteModal}>
                                Cancel
                            </button>
                          </section>

                          <section className="inventory__right-option">
                            <button className="inventory__delete-button inventory__modal-button" onClick={deleteItem}>
                                Delete
                            </button>
                          </section>
                      </section>
                    </section>

                </Modal>
                <Link to={`/inventory/edit/${props.id}`}>
                  <img  className= "logo" alt =  "edit icon" src = {edit__icon} />
                </Link>
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