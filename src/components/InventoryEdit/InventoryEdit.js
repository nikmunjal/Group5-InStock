import arrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { useState } from 'react';
import { API_URL_Inventory } from '../../utilities/utility';
import { useParams } from 'react-router-dom';
import error from '../../assets/Icons/error-24px.svg';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function InventoryEdit(props) {

    const { id } = useParams();

    const [itemData, setItemData] = useState({
        id : {id},
        itemName: "",
        description: "",
        category: "",
        status: "",
        warehouseName: "",
    });

    console.log(itemData);
    
    const [saved, setSave] = useState(false);

    const itemNameChange = (e) => {
        setItemData((itemData) => ({
            ...itemData,
            itemName: e.target.value,
        }));

        console.log('name'+e.target.value);
    };

    const descChange = (e) => {
        setItemData((itemData) => ({
            ...itemData,
            description: e.target.value,
        }));

        console.log('desc'+e.target.value);
    };

    const categoryChange = (e) => {
        setItemData((itemData) => ({
            ...itemData,
            category: e.target.value,
        }));

        console.log("category"+e.target.value);
    };


    const statusChange = (e) => {
        setItemData((itemData) => ({
            ...itemData,
            status: e.target.value,
        }));

        console.log("status"+e.target.value);
    };


    const warehouseNameChange = (e) => {
        setItemData((itemData) => ({
            ...itemData,
            warehouseName: e.target.value,
        }));

        console.log("warhouse"+e.target.value);
    };


    const editInventory = (
        e,
        id,
        itemName,
        description,
        category,
        status,
        warehouseName
    ) => {
        axios({
            url: `${API_URL_Inventory}/${id}`,
            method: "PUT",
            data: {
                itemName,
                description,
                category,
                status,
                warehouseName,
            },
            headers: { "Content-Type": "application/json" },
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const [
            itemName,
            description,
            category,
            status,
            warehouseName,
        ] = [
            itemData.itemName,
            itemData.description,
            itemData.category,
            itemData.status,
            itemData.warehouseName,
        ];
        if (
            itemName &&
            description &&
            category &&
            status &&
            warehouseName
        ) {
            editInventory(
                e,
                id,
                itemName,
                description,
                category,
                status,
                warehouseName
            );
            
        }
        e.target.reset();
        setSave(true);
    };

    const clickFunc = (e) => {
        props.history.push("/inventory");
    };


    return (
        <>
            <Header 
                warehouseLink={""}
                inventoryLink={"inventory__link-active"}
            />
            <div className="inventory__edit-container">
                <div className="inventory__edit">
                    <section className="inventory__edit-top">
                        <Link to="/inventory/">
                            <img className="back__arrow" src={arrowBack} alt="back arrow"/>
                        </Link>
                        <h1 className="inventory__edit-header">
                            Edit Inventory Item
                        </h1>
                    </section>
                    <form className="inventory__form" onSubmit={handleSubmit}>
                        <section className="inventory__form-body">
                            <section className="inventory__details-form">
                                <h1 className="inventory__form-header">
                                    Item Details
                                </h1>
                                <section className="inventory__form-section">
                                    <label htmlFor="addName" className="inventory__form-label">
                                        Item Name
                                    </label>
                                    <input
                                        className="inventory__item-name inventory__item-field"
                                        id="addName"
                                        type="text"
                                        placeholder=""
                                        value={itemData.itemName}
                                        onChange={itemNameChange}
                                    />
                                    {saved && !itemData.itemName ? (
                                                <div>
                                                    <img src={error} alt="error" />
                                                    <span>This field is required</span>
                                                </div>
                                    ) : null}
                                </section>
                                <section className="inventory__form-section">
                                    <label htmlFor="addDesc" className="inventory__form-label">
                                        Description
                                    </label>
                                    <input
                                        className="inventory__description inventory__item-field"
                                        id="addDesc"
                                        type="text"
                                        placeholder=""
                                        value={itemData.description}
                                        onChange={descChange}
                                    />
                                    {saved && !itemData.description ? (
                                                <div>
                                                    <img src={error} alt="error" />
                                                    <span>This field is required</span>
                                                </div>
                                    ) : null}
                                </section>
                                <section className="inventory__form-section">
                                    <label htmlFor="addCategory" className="inventory__form-label">
                                        Category
                                    </label>
                                    <input
                                        className="inventory__category inventory__item-field"
                                        id="addCategory"
                                        type="text"
                                        placeholder=""
                                        value={itemData.category}
                                        onChange={categoryChange}
                                    />
                                    {saved && !itemData.category ? (
                                                <div>
                                                    <img src={error} alt="error" />
                                                    <span>This field is required</span>
                                                </div>
                                    ) : null}
                                </section>
                            </section>

                            <section className="inventory__availability-form">
                                <h1 className="inventory__form-header">
                                    Item Availability
                                </h1>

                                <label htmlFor="addStatus" className="inventory__form-label">
                                    Status
                                </label>
                                <section id="addStatus" className="status__options">
                                    <section className="status__left">
                                        <input
                                            className="inventory__status"
                                            name="status"
                                            type="radio"
                                            value="In stock"
                                            onChange={statusChange}
                                            id="inStock"
                                            defaultChecked="checked"
                                        />
                                        <label htmlFor="inStock" className='status__instock'>
                                            In stock
                                        </label>
                                    </section>
                                    <section className="status__right">
                                        <input
                                            className="inventory__status"
                                            name="status"
                                            type="radio"
                                            value="Out of stock"
                                            onChange={statusChange}
                                            id="outStock"
                                        />
                                        <label htmlFor="outStock" className='status__outstock'>
                                            Out of stock
                                        </label>
                                    </section>
                                    {saved && !itemData.status ? (
                                            <div>
                                                <img src={error} alt="error" />
                                                <span>This field is required</span>
                                            </div>
                                ) : null}
                                </section>
                                <section className="inventory__form-section">
                                    <label htmlFor="addWarehouse" className="inventory__form-label">
                                        Warehouse
                                    </label>
                                    <input
                                        className="inventory__warehouse inventory__item-field"
                                        id="addWarehouse"
                                        type="text"
                                        placeholder=""
                                        value={itemData.warehouseName}
                                        onChange={warehouseNameChange}
                                    />
                                    {saved && !itemData.warehouseName ? (
                                                <div>
                                                    <img src={error} alt="error" />
                                                    <span>This field is required</span>
                                                </div>
                                    ) : null}
                                </section>
                            </section>
                        </section>


                        <section className="inventory__edit-buttons">
                            
                            <button className="cancel__button edit__form-button" onClick={clickFunc}>
                                Cancel
                            </button>
                            
                            <button className="save__button edit__form-button">
                                Save
                            </button>

                        </section>


                    </form>
                
                </div>
            </div>
            <Footer />
        </>
    )
}

export default InventoryEdit;