import closeIcon from '../../assets/Icons/close-24px.svg';
import { useEffect, useState } from 'react';


function InventoryDelete(props) {

    const [item, setItem] = useState("");

    return (
        <div className="inventory__delete">

            <img className="close__icon" src={closeIcon} alt="close icon"/>

            <h1 className="inventory__delete-header">
                Delete {props.itemName} inventory item?
            </h1>

            <p className="inventory__delete-desc">
                Please confirm that you'd like to delete {props.itemName} from the inventory list. You won't be able to undo this action.
            </p>

            <section className="inventory__delete-options">
                <button className="inventory__cancel-button">
                    Cancel
                </button>
                <button className="inventory__delete-button">
                    Delete
                </button>

            </section>
        </div>
    )
};

export default InventoryDelete;