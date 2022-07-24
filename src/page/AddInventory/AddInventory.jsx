import "./AddInventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL_Warehouse, API_URL_Inventory } from "../../utilities/utility";
import { Link } from "react-router-dom"
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";
import Select from "react-select"


function AddInventory(props) {
    const [warehouses, setWarehouses] = useState([]);
    const [allWarehouses, setAllWarehouses] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [inStock, setInStock] = useState(true);
    const [validation, setValidation] = useState({
        warehouseID: true,
        warehouseName: true,
        itemName: true, 
        description: true, 
        category: true,
        status: true, 
        quantity: true, 
    });

    useEffect(() => {
        axios.get(`${API_URL_Warehouse}`)
        .then((res) => {
            setAllWarehouses(res.data);
            let warehouseArr = res.data.map((warehouse) => {
                const container = {};
                container.value = warehouse.name;
                container.label = warehouse.name;
                return container;
            });
            setWarehouses(warehouseArr);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    const handleTrue = () => {
        setInStock(true);
    };

    const handleFalse = () => {
        setInStock(false);
    }

    const invCategory = [
        {value: "accessories", label: "Accessories"},
        {value: "apparel", label: "Apparel"},
        {value: "electronics", label: "Electronics"},
        {value: "gear", label: "Gear"},
        {value: "health", label: "Health"},
    ];

    const handleChangeCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };
    
    const handleChangeWarehouse = (selectedWarehouse) => {
        setSelectedWarehouse(selectedWarehouse);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { itemName, itemDescription, quantity } = e.target;
        const status = inStock ? "In Stock" : "Out of Stock";
        const updatedQuantity = inStock ? quantity.value : 0;
        const itemNameValidity = itemName.value.length > 0;
        const itemDescriptionValidity = itemDescription.value.length > 0;
        const quantityValidity = updatedQuantity.length >= 0;
        const warehouseValidity = !!selectedWarehouse;
        const statusValidity = status.length > 0;
        const categoryValidity = !!selectedCategory;

        setValidation({
            warehouseName: warehouseValidity,
            itemName: itemNameValidity,
            description: itemDescriptionValidity,
            category: categoryValidity,
            status: statusValidity,
            quantity: quantityValidity,
        });

        if(
            !warehouseValidity ||
            !itemNameValidity ||
            !itemDescriptionValidity ||
            !categoryValidity ||
            !statusValidity ||
            !quantityValidity 
        ) {
            return;
        }

        const findWarehouse = allWarehouses.find((warehouse) => {
            return warehouse.name === selectedWarehouse.value;
        })

        const newInventory = {
            warehouseID: findWarehouse.id,
            warehouseName: selectedWarehouse.value,
            itemName: itemName.value,
            description: itemDescription.value,
            category: selectedCategory.value,
            status: status, 
            quantity: updatedQuantity
        };

        axios.post(`${API_URL_Inventory}`, newInventory)
        .then(() => {
            console.log(findWarehouse.id)
            props.history.push("/inventory");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <article className="add-inv">
            <section className="add-inv__section">
                <Link to="/inventory">
                    <img src={backArrow} alt="back arrow" />
                </Link>
                <h1 className="add-inv__title">Add New Inventory Item</h1>
            </section>
            <form onSubmit={handleSubmit} className="add-inv__form">
                <section className="add-inv__container">
                    <h2 className="add-inv__subheader">Item Details</h2>
                    <label htmlFor="itemName" className="add-inv__label">Item Name</label>
                    <input 
                        type="text" 
                        id="itemName"
                        className={`add-inv__name-value ${ 
                            !validation.itemName && "add-inv__name-value--error"
                        }`}
                        placeholder="Item Name"
                        name="itemName"
                        />
                    {!validation.itemName && (
                        <div className="add-inv__input-error">
                            <img 
                            src={error} 
                            alt="error"
                            className="add-inv__error-icon" 
                            />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="description" className="add-inv__label">Description</label>
                    <textarea 
                    name="itemDescription" 
                    id="description" 
                    className={`add-inv__desc-value ${
                        !validation.itemName && "add-inv__desc-value--error"
                    }`}
                    placeholder="Please enter a brief item description"
                    >
                    </textarea>
                    {!validation.description && (
                        <div className="add-inv__input-error">
                            <img 
                                src={error} 
                                alt="error" 
                                className="add-inv__error-icon"
                                />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="category" className="add-inv__label">
                        Category
                    </label>
                    <Select
                        id="category"
                        name="category"
                        placeholder="Please select"
                        className="add-inv__select"
                        options={invCategory}
                        onChange={handleChangeCategory}
                    />
                    {!validation.category && (
                        <div classame="add-inv__input-error">
                            <img 
                                src={error}
                                alt="error" 
                                className="add-inv__error-icon"
                            />
                            <span>This field is required</span>
                        </div>
                    )}
                </section>
                <section className="add-inv__section">
                    <h2 className="add-inv__subheader">Item Availability</h2>
                    <h4 className="add-inv__label">Status</h4>
                    <div className="add-inv__radio-buttons">
                        <div className="add-inv__rb-container">
                            <input 
                                type="radio"
                                name="status"
                                className="add-inv__rb"
                                id="inStock"
                                onClick={handleTrue}
                                defaultChecked="checked"
                            />
                            <label htmlFor="instock" className="add-inv__radio-label">In stock</label>
                        </div>
                        <div className="add-inv__radio-buttons">
                            <input 
                                type="radio"
                                name="status"
                                className="add-inv__rb"
                                id="outOfStock"
                                onClick={handleFalse}
                            />
                            <label htmlFor="outOfStock" className="add-inv__radio-label">Out of stock</label>
                        </div>
                    </div>
                    <label
                        htmlFor="quantity"
                        className={`add-inv__label ${
                            !inStock && "add-inv__label--hidden"
                        }`}
                    >
                        Quantity
                    </label>
                    <input 
                        type="number"
                        id="quantity"
                        placeholder="0"
                        name="quantity"
                        className={`add-inv__quantity ${
                            !inStock && "add-inv__quantity--hidden" 
                        } ${!validation.quantity && "add-inv__quantity--invalid"}`}
                    />
                    {!validation.quantity && inStock && (
                        <div className="add-inv__input-error">
                            <img 
                                src={error} 
                                alt="error"
                                className="add-inv__error-icon" 
                            />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="warehouse" className="add-inv__label">Warehouse</label>
                    <Select
                        id="warehouse"
                        name="warehouse"
                        placeholder="Please select"
                        className="add-inv__select"
                        options={warehouses}
                        onChange={handleChangeWarehouse}
                    />
                    {!validation.warehouseName && (
                        <div className="add-inv__input-error">
                            <img 
                                src={error} 
                                alt="error"
                                className="add-inv__error-icon" 
                            />
                            <span>This field is required</span>
                        </div>
                    )}
                </section>
                <section className="add-inv__buttons">
                    <Link to="/inventory">
                        <button className="add-inv__cancel">Cancel</button>
                    </Link>
                    <button type="submit" className="add-inv__add-button">+ Add Item</button>
                </section>
            </form>
        </article>
    )
}

export default AddInventory;