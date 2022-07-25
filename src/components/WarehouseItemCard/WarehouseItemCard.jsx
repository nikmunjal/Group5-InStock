import "./WarehouseItemCard.scss";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";


function WarehouseItemCard({ item, deleteInvItem}) {
    const [open, setOpen] = useState(false);

        function openDeleteModal() {
            setOpen(true);
        };
    
        function closeDeleteModal() {
            setOpen(false);
        };
    
        function deleteItem() {
            axios.delete(`http://localhost:8080/inventory/${item.id}`);
            setOpen(false);
            deleteInvItem(item.id);
        };
    
        useEffect(() => console.log('mounted'), []);

  // conditional className based on status
    let statusClass = "item-card__value";
    if (item.status === "In Stock") {
        statusClass = "item-card__value item-card__value--instock";
    } else {
        statusClass = "item-card__value item-card__value--outstock";
    }

    return (
    <article className="item-card">
        <section className="item-card__left">
        <div className="item-card__section">
            <h6 className="item-card__subhead">INVENTORY ITEM</h6>
            <div className="item-card__subsec">
            <Link to={`/inventory/${item.id}`}>
                <p className="item-card__value--item">{item.itemName}</p>
            </Link>
            <img className="item-card__value--icon" src={chevron} alt="" />
            </div>
        </div>
        <div className="item-card__section">
            <h6 className="item-card__subhead">CATEGORY</h6>
            <p className="item-card__value">{item.category}</p>
        </div>
        </section>
        <section className="item-card__right">
        <div className="item-card__section">
            <h6 className="item-card__subhead">STATUS</h6>
            <p className={statusClass}>{item.status}</p>
        </div>
        <div className="item-card__section">
            <h6 className="item-card__subhead">QTY</h6>
            <p className="item-card__value">{item.quantity}</p>
        </div>
        </section>
        <section className="item-card__chg-cont">
            <div onClick={openDeleteModal} className="item-card__delete"></div>
            <Modal isOpen={open} close={closeDeleteModal} className="modal">
                    
                    <h1 className="inventory__delete-header">
                    Delete {item.name} inventory item?
                    </h1>
                    <p className="inventory__delete-desc">
                    Please confirm that you'd like to delete {item.itemName} from the inventory list. You won't be able to undo this action.
                    </p>
                    <section className="inventory__delete-options">
                    <button className="inventory__cancel-button inventory__modal-button" onClick={closeDeleteModal}>
                        Cancel
                    </button>
                    
                    <button className="inventory__delete-button inventory__modal-button" onClick={deleteItem} >
                        Delete
                    </button>
                    </section>

                </Modal>
            <Link to={`/inventory/edit/${item.id}`}>
                <div className="item-card__edit"></div>
            </Link>
        </section>
    </article>
    );
}

export default WarehouseItemCard;