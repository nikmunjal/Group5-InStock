import "./WarehouseItem.scss";
import { useState } from "react";
import delete__icon from "../../assets/Icons/delete_outline-24px.svg";
import edit__icon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { API_URL_Warehouse } from "../../utilities/utility";
<<<<<<< HEAD
// import sort from "../../assets/Icons/sort-24px.svg";
=======
import close from "../../assets/Icons/close-24px.svg";
>>>>>>> 9f01c3dfff2b22c4d799f46b7899866d4e6bacb6

function WarehouseItem(props) {
    const [open, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //To remove warehouse
    const removeWarehouse = () => {
        axios({
            url: `${API_URL_Warehouse}/${props.id}`,
            method: "DELETE",
        }).catch((err) => {
            console.log(err);
        });
        props.deleteWarehouse(props.id);
        setIsOpen(false);
    };

    return (
        <>
            <div className="warehouse-item__card">


                <div className="warehouse-item__card" id="mobile">
                    <div className="grouping" id="1">
                        <ul className="name-list">
                            <li className="name-list__item">
                                <p className="title">WAREHOUSE</p>
                            </li>
                            <li className="name-list__item">
                                <Link to={`/${props.id}`}>
                                    <p className="name">{props.name}</p>
                                    <img
                                        className="logo"
                                        alt="chevron"
                                        src={chevron}
                                    />
                                </Link>
                            </li>
                        </ul>
                        <ul className="address-list">
                            <li className="address-list__item">
                                <p className="title">ADDRESS</p>
                            </li>
                            <li className="address-list__item">
                                <p className="address">{props.address}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="grouping" id="2">
                        <ul className="contactName-list">
                            <li className="contactName-list__item">
                                <p className="title">CONTACT NAME</p>
                            </li>
                            <li className="contactName-list__item">
                                <p className="contactName">
                                    {props.contactName}
                                </p>
                            </li>
                        </ul>
                        <ul className="contactInfo-list">
                            <li className="contactInfo-list__item">
                                <p className="title">CONTACT INFORMATION</p>
                            </li>
                            <li className="contactInfo-list__item">
                                <p className="contactInfo">
                                    {props.contactPhone} {props.contactEmail}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="grouping" id="3">
                        <ul className="action-list">
                            <li className="action-list__item">
                                <p className="title">ACTIONS</p>
                            </li>
                            <li className="action-list__item">
                                <Link to="">
                                    <img
                                        className="warehouse__logo"
                                        id="delete__icon"
                                        onClick={openModal}
                                        alt="delete icon"
                                        src={delete__icon}
                                    />
                                    <Modal
                                        isOpen={open}
                                        className="modal"
                                        onRequestClose={closeModal}
                                    >
                                        <section className="modal__body">
                                            <img
                                                className="modal__modal-close"
                                                onClick={closeModal}
                                                src={close}
                                                alt="close icon"
                                            />
                                            <section className="modal__body-text">
                                                <h1 className="modal__delete-header">
                                                    Delete {props.name}{" "}
                                                    warehouse?
                                                </h1>
                                                <p className="model__delete-desc">
                                                    Please confirm that you'd
                                                    like to delete the
                                                    {props.name} from the list
                                                    of warehouses. You won't be
                                                    able to undo this action
                                                </p>
                                            </section>
                                            <section className="modal__delete-options">
                                                <section className="modal__left-option">
                                                    <button
                                                        className="modal__cancel-button modal__modal-button"
                                                        onClick={closeModal}
                                                    >
                                                        Cancel
                                                    </button>
                                                </section>
                                                <section className="modal__right-option">
                                                    <button
                                                        className="modal__delete-button modal__modal-button"
                                                        onClick={
                                                            removeWarehouse
                                                        }
                                                    >
                                                        {" "}
                                                        Delete
                                                    </button>
                                                </section>
                                            </section>
                                        </section>
                                    </Modal>
                                </Link>
                                <Link to={`/edit/${props.id}`}>
                                    <img
                                        className="warehouse__logo"
                                        id="edit__icon"
                                        alt="edit icon"
                                        src={edit__icon}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="warehouse-item__card" id="tablet">
                    <ul className="name-list" id="warehouse">
                        <li className="name-list__item">
                            <p className="title">WAREHOUSE</p>
                        </li>
                        <li className="name-list__item">
                            <Link to={`/${props.id}`}>
                                <p className="name">{props.name}</p>
                                <img
                                    className="logo"
                                    alt="chevron"
                                    src={chevron}
                                />
                            </Link>
                        </li>
                    </ul>
                    <ul className="address-list">
                        <li className="address-list__item">
                            <p className="title">ADDRESS</p>
                        </li>
                        <li className="address-list__item">
                            <p className="address">{props.address}</p>
                        </li>
                    </ul>

                    <ul className="contactName-list">
                        <li className="contactName-list__item">
                            <p className="title">CONTACT NAME</p>
                        </li>
                        <li className="contactName-list__item">
                            <p className="contactName">{props.contactName}</p>
                        </li>
                    </ul>
                    <ul className="contactInfo-list">
                        <li className="contactInfo-list__item">
                            <p className="title">CONTACT INFORMATION</p>
                        </li>
                        <li className="contactInfo-list__item">
                            <p className="contactInfo">
                                {props.contactPhone} {props.contactEmail}
                            </p>
                        </li>
                    </ul>

                    <ul className="action-list"id="warehouse">
                        <li className="action-list__item">
                            <p className="title">ACTIONS</p>
                        </li>
                        <li className="action-list__item">
                            <Link to="">
                                <img
                                    className="warehouse__logo"
                                    id="delete__icon"
                                    onClick={openModal}
                                    alt="delete icon"
                                    src={delete__icon}
                                />
                                <Modal
                                    isOpen={open}
                                    className="modal"
                                    onRequestClose={closeModal}
                                >
                                    <section className="modal__body">
                                        <img
                                            className="modal__modal-close"
                                            onClick={closeModal}
                                            src={close}
                                            alt="close icon"
                                        />
                                        <section className="modal__body-text">
                                            <h1 className="modal__delete-header">
                                                Delete {props.name} warehouse?
                                            </h1>
                                            <p className="model__delete-desc">
                                                Please confirm that you'd like
                                                to delete the
                                                {props.name} from the list of
                                                warehouses. You won't be able to
                                                undo this action
                                            </p>
                                        </section>
                                        <section className="modal__delete-options">
                                            <section className="modal__left-option">
                                                <button
                                                    className="modal__cancel-button modal__modal-button"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </section>
                                            <section className="modal__right-option">
                                                <button
                                                    className="modal__delete-button modal__modal-button"
                                                    onClick={removeWarehouse}
                                                >
                                                    {" "}
                                                    Delete
                                                </button>
                                            </section>
                                        </section>
                                    </section>
                                </Modal>
                            </Link>
                            <Link to={`/edit/${props.id}`}>
                                <img
                                    className="warehouse__logo"
                                    id="edit__icon"
                                    alt="edit icon"
                                    src={edit__icon}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default WarehouseItem;
