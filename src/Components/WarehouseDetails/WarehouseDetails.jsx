import "./WarehouseDetails.scss";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { API_URL_Warehouse } from "../../utilities/utility";

function WarehouseDetails(props) {
    const [warehouse, setWarehouse] = useState(null);
    // const [inventory, setInventory] = useState([]);
    const warehouseID = props.match.params.id;

    useEffect((res) => {
        axios.get(`${API_URL_Warehouse}/${warehouseID}`)
        .then((res) => {
            if(res.status === 200){
                setWarehouse(res.data);
                console.log(res.data);
            }
        });

        // axios.get(`${API_URL_Warehouse}/${warehouseID}/inventory`)
        // .then((res) => {
        //     if(res.status === 200){
        //         setInventory(res.data);
        //     }
        // });
    },[warehouseID]);

    if (!warehouse) return null;

    return(
        <section className="warehouse-details">
            <article className="header">
                <div className="header__back">
                    <Link to="/">
                        <img className="header__back--arrow"src={backArrow} alt="back arrow" />
                    </Link>
                </div>
                <h1 className="header__title">{warehouse.name}</h1>
                <div>
                    <Link className="header__edit" to={`/warehouse/edit/${warehouse.id}`}>
                        <img className="header__edit--icon" src={editIcon} alt="edit icon" />
                        <p className="header__edit--text">Edit</p>
                    </Link>
                </div>
            </article>
            <article className="details">
                <div className="details__address-container">
                    <h6 className="details__subheader">WAREHOUSE ADDRESS:</h6>
                    <p className="details__value">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                </div>
                <div className="details__contact-container">
                    <div className="details__name-container">
                        <h6 className="details__subheader">CONTACT NAME:</h6>
                        <p className="details__value">{warehouse.contact.name}</p>
                        <p className="details__value">{warehouse.contact.position}</p>
                    </div>
                    <div className="details__info-container">
                        <h6 className="details__subheader">CONTACT INFORMATION:</h6>
                        <p className="details__value">{warehouse.contact.phone}</p>
                        <p className="details__value">{warehouse.contact.email}</p>
                    </div>
                </div>
            </article>
            <article className="inventory-list__header">

                <div className="inventory-list__header--left">
                    <div className="inventory-list__header--sub">
                        <p className="inventory_list__header--text">INVENTORY ITEM</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--sub">
                        <p className="inventory_list__header--text">CATEGORY</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                </div>

                <div className="inventory-list__header--right">
                    <div className="inventory-list__header--sub">
                        <p className="inventory_list__header--text">STATUS</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--sub">
                        <p className="inventory_list__header--text">QUANTITY</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--actions">
                        <p className="inventory_list__header--text">ACTIONS</p>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default WarehouseDetails;
