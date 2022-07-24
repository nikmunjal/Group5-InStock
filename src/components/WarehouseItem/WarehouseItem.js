import "./WarehouseItem.scss";
import { useState } from "react";
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { API_URL_Warehouse } from "../../utilities/utility";

function WarehouseItem(props) {
    const [open, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }

    const removeWarehouse = () => {
        axios({
            url: `${API_URL_Warehouse}/${props.id}`,
            method: "DELETE",
        }).catch((err) => {
            console.log(err);
        });
        setIsOpen(false);
    };

    return (
        <>
            <ul className="warehosue__details-list">
                <li className="warehouse__detail">{props.name}</li>
                <li className="warehouse__detail">{props.address}</li>
                <li className="warehouse__detail">{props.contactName}</li>
                <li className="warehouse__detail">
                    {props.contactPhone} {props.contactEmail}
                </li>
                <li className="warehouse__detail">
                    <Link to="">
                        <img
                            className="warehouse__logo"
                            onClick={openModal}
                            alt="delete icon"
                            src={delete__icon}
                        />
                        {/* <Modal
                            isOpen={open}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                        >
                            <h1>Delete {props.name} warehouse?</h1>
                            <div>
                                <p>
                                    Please confirm that you'd like to delete the
                                    {props.name} from the list of warehouses.
                                    You won't be able to undo this action
                                </p>
                            </div>
                            <button onClick={closeModal}>Cancel</button>
                            <button onClick={removeWarehouse}> Delete</button>
                        </Modal> */}
                    </Link>
                    <Link to={`/edit/${props.id}`}>
                        <img
                            className="warehouse__logo"
                            alt="edit icon"
                            src={edit__icon}
                        />
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default WarehouseItem;
