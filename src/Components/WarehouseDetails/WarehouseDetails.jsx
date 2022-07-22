import "./WarehouseDetails.scss";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
const api = "http://localhost:8080"

function WarehouseDetails(props) {
    const [warehouse, setWarehouse] = useState([]);
    const [inventory, setInventory] = useState([]);
    const warehouseID = props.match.params.id;

    useEffect((res) => {
        axios.get(`${api}/warehouse/${warehouseID}`)
        .then((res) => {
            if(res.status === 200){
                setWarehouse(res.data);
            }
        });

        axios.get(`${api}/warehouse/${warehouseID}/inventory`)
        .then((res) => {
            if(res.status === 200){
                setInventory(res.data);
            }
        });
    }, []);

    return(
        <section className="warehouse-details">
            <article className="header">
                <div className="header__back">
                    <Link to="/warehouse">
                        <img src={backArrow} alt="back arrow" />
                    </Link>
                </div>
                <h1 className="header__title">{warehouse.name}</h1>
                <div>
                    <Link to={`/warehouse/edit/${warehouse.id}`}>
                        <img className="header__edit-icon" src={editIcon} alt="edit icon" />
                        <p className="header__edit-text">Edit</p>
                    </Link>
                </div>
            </article>
            <article>
                
            </article>
        </section>
    )

}
