import "./WarehouseDetail.scss";
import WarehouseItemCard from "../WarehouseItemCard/WarehouseItemCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { API_URL_Warehouse } from "../../utilities/utility";

function WarehouseDetails(props) {
    const [warehouse, setWarehouse] = useState(null);
    const [inventory, setInventory] = useState([]);

    const deleteItem = (id) => {
        const newInventory = inventory.filter(inventory => inventory.id !== id)
        setInventory(newInventory)
    }
    const warehouseID = props.match.params.id;

    useEffect((res) => {
        axios.get(`${API_URL_Warehouse}/${warehouseID}`)
        .then((res) => {
            if(res.status === 200){
                setWarehouse(res.data);
            }
        });

        axios.get(`${API_URL_Warehouse}/${warehouseID}/inventory`)
        .then((res) => {
            if(res.status === 200){
                setInventory(res.data);
            }
        }); 
    },[warehouseID]); 

    if (!warehouse) return null;

    return(
        <>
        <Header
        warehouseLink={"warehouses__link-active"}
        inventoryLink={""}/>
        <section className="warehouse-details">
            <article className="head">
                <div className="head__back">
                    <Link to="/">
                        <img className="head__back--arrow"src={backArrow} alt="back arrow" />
                    </Link>
                </div>
                <h1 className="head__title">{warehouse.name}</h1>
                <div>
                    <Link className="head__edit" to={`/edit/${warehouse.id}`}>
                        <img className="head__edit--icon" src={editIcon} alt="edit icon" />
                        <p className="head__edit--text">Edit</p>
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
                        <p className="inventory-list__header--txt">INVENTORY ITEM</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--sub">
                        <p className="inventory-list__header--txt">CATEGORY</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                </div>

                <div className="inventory-list__header--right">
                    <div className="inventory-list__header--sub">
                        <p className="inventory-list__header--txt">STATUS</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--sub">
                        <p className="inventory-list__header--txt">QUANTITY</p>
                        <img className="inventory-list__header--icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inventory-list__header--actions">
                        <p className="inventory-list__header--txt">ACTIONS</p>
                    </div>
                </div>
            </article>
            <article>
                {inventory.map((item) => (
                    <WarehouseItemCard key={item.id} item={item} deleteInvItem={deleteItem} />
                ))}
            </article>
        </section>
        <Footer/>
        </>
    )
}

export default WarehouseDetails;