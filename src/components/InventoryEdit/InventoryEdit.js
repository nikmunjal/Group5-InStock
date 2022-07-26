import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL_Inventory, API_URL_Warehouse } from '../../utilities/utility';
// import { useParams } from 'react-router-dom';
import error from '../../assets/Icons/error-24px.svg';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Select from "react-select"

function InventoryEdit(props) {
    const [warehouses, setWarehouses] = useState([]);
    const [, setAllWarehouses] = useState([]);
    const [inventory, setInventory] = useState({});
    const [, setSelectedWarehouse] = useState(null);
    const [, setSelectedCategory] = useState(null);
    const [inStock, setInStock] = useState(false);
    const [validation, setValidation] = useState({
        warehouseName: true,
        itemName: true, 
        description: true, 
        category: true,
        status: true,  
    });
    

    useEffect(() => {
        console.log(props.match.params.id)
        axios.get(`${API_URL_Inventory}/${props.match.params.id}`)
        .then((res) => {
            setInventory(res.data)
        })
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
            })
            .catch((err) => {
                console.log(err)
            });
    }, [props.match.params.id]);

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
        console.log(e.target);

        const status = inStock ? "In Stock" : "Out of Stock";
        const updatedQuantity = inStock ? inventory : 0;      
        const updatedInventory = {
            warehouseName: e.target.warehouseName.value,
            itemName: e.target.itemName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            status: status,
            quantity: updatedQuantity, 
        };
        console.log(inventory);
        console.log(updatedInventory)


        const warehouseValidity = updatedInventory.warehouseName.length > 0;
        const itemNameValidity = updatedInventory.itemName.length > 0;
        const itemDescriptionValidity = updatedInventory.description.length > 0;
        const categoryValidity = updatedInventory.category.length > 0;
        const statusValidity = updatedInventory.status.length > 0;

        setValidation({
            warehouseName: warehouseValidity,
            itemName: itemNameValidity,
            description: itemDescriptionValidity,
            category: categoryValidity,
            status: statusValidity,
        });

        if(
            !warehouseValidity ||
            !itemNameValidity ||
            !itemDescriptionValidity ||
            !categoryValidity ||
            !statusValidity 
        ) {
            return;
        }

        axios.put(`${API_URL_Inventory}/edit/${inventory.id}`, updatedInventory)
        .then((res) => {
            console.log(res)
            props.history.push("/inventory");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <>
        <Header
        warehouseLink={""}
        inventoryLink={"inventory__link-active"}
        />
        <article className="add-inv">
            <section className="add-inv__header">
                <Link to="/inventory">
                    <img src={backArrow} alt="back arrow" />
                </Link>
                <h1 className="add-inv__title">Edit Inventory Item</h1>
            </section>
            <form onSubmit={handleSubmit} className="add-inv__form">
            <div className="add-inv__container">
                <section className="add-inv__section">
                    <h2 className="add-inv__subheader">Item Details</h2>
                    <label htmlFor="itemName" className="add-inv__label">Item Name</label>
                    <input 
                        type="text" 
                        id="itemName"
                        className={`add-inv__name-value ${ 
                            !validation.itemName && "add-inv__name-value--error"
                        }`}
                        defaultValue={inventory.itemName}
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
                    defaultValue={inventory.description}
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
                        placeholder={inventory.category}
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
                        <div className="add-inv__rb-container">
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
                    
                    <label htmlFor="warehouse" className="add-inv__label">Warehouse</label>
                    <Select
                        id="warehouse"
                        name="warehouse"
                        placeholder={inventory.warehouseName}
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
                </div>
                <section className="add-inv__buttons">
                    <Link to="/inventory">
                        <button className="add-inv__cancel">Cancel</button>
                    </Link>
                    <button type="submit" className="add-inv__add-button">Save</button>
                </section>
            </form>
        </article>
        <Footer/>
        </>
    )
}

    // const { id } = useParams();

    // const [itemData, setItemData] = useState({
    //     id : {id},
    //     itemName: "",
    //     description: "",
    //     category: "",
    //     status: "",
    //     warehouseName: "",
    // });

    // console.log(itemData);
    
    // const [saved, setSave] = useState(false);

    // const itemNameChange = (e) => {
    //     setItemData((itemData) => ({
    //         ...itemData,
    //         itemName: e.target.value,
    //     }));

    //     console.log('name'+e.target.value);
    // };

    // const descChange = (e) => {
    //     setItemData((itemData) => ({
    //         ...itemData,
    //         description: e.target.value,
    //     }));

    //     console.log('desc'+e.target.value);
    // };

    // const categoryChange = (e) => {
    //     setItemData((itemData) => ({
    //         ...itemData,
    //         category: e.target.value,
    //     }));

    //     console.log("category"+e.target.value);
    // };


    // const statusChange = (e) => {
    //     setItemData((itemData) => ({
    //         ...itemData,
    //         status: e.target.value,
    //     }));

    //     console.log("status"+e.target.value);
    // };


    // const warehouseNameChange = (e) => {
    //     setItemData((itemData) => ({
    //         ...itemData,
    //         warehouseName: e.target.value,
    //     }));

    //     console.log("warhouse"+e.target.value);
    // };


    // const editInventory = (
    //     e,
    //     id,
    //     itemName,
    //     description,
    //     category,
    //     status,
    //     warehouseName
    // ) => {
    //     axios({
    //         url: `${API_URL_Inventory}/${id}`,
    //         method: "PUT",
    //         data: {
    //             itemName,
    //             description,
    //             category,
    //             status,
    //             warehouseName,
    //         },
    //         headers: { "Content-Type": "application/json" },
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const [
    //         itemName,
    //         description,
    //         category,
    //         status,
    //         warehouseName,
    //     ] = [
    //         itemData.itemName,
    //         itemData.description,
    //         itemData.category,
    //         itemData.status,
    //         itemData.warehouseName,
    //     ];
    //     if (
    //         itemName &&
    //         description &&
    //         category &&
    //         status &&
    //         warehouseName
    //     ) {
    //         editInventory(
    //             e,
    //             id,
    //             itemName,
    //             description,
    //             category,
    //             status,
    //             warehouseName
    //         );
            
    //     }
    //     e.target.reset();
    //     setSave(true);
    // };

    // const clickFunc = (e) => {
    //     props.history.push("/inventory");
    // };

    // useEffect(() => {
    //     axios.get(`${API_URL_Warehouse}`)
    //     .then((res) => {
    //         setAllWarehouses(res.data);
    //         let warehouseArr = res.data.map((warehouse) => {
    //             const container = {};
    //             container.value = warehouse.name;
    //             container.label = warehouse.name;
    //             return container;
    //         });
    //         setWarehouses(warehouseArr);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });
    // }, []);


//     return (
//         <>
//             <Header 
//                 warehouseLink={""}
//                 inventoryLink={"inventory__link-active"}
//             />
//             <div className="inventory__edit-container">
//                 <div className="inventory__edit">
//                     <section className="inventory__edit-top">
//                         <Link to="/inventory/">
//                             <img className="back__arrow" src={arrowBack} alt="back arrow"/>
//                         </Link>
//                         <h1 className="inventory__edit-header">
//                             Edit Inventory Item
//                         </h1>
//                     </section>
//                     <form className="inventory__form" onSubmit={handleSubmit}>
//                         <section className="inventory__form-body">
//                             <section className="inventory__details-form">
//                                 <h1 className="inventory__form-header">
//                                     Item Details
//                                 </h1>
//                                 <section className="inventory__form-section">
//                                     <label htmlFor="addName" className="inventory__form-label">
//                                         Item Name
//                                     </label>
//                                     <input
//                                         className="inventory__item-name inventory__item-field"
//                                         id="addName"
//                                         type="text"
//                                         placeholder=""
//                                         value={itemData.itemName}
//                                         onChange={itemNameChange}
//                                     />
//                                     {saved && !itemData.itemName ? (
//                                                 <div>
//                                                     <img src={error} alt="error" />
//                                                     <span>This field is required</span>
//                                                 </div>
//                                     ) : null}
//                                 </section>
//                                 <section className="inventory__form-section">
//                                     <label htmlFor="addDesc" className="inventory__form-label">
//                                         Description
//                                     </label>
//                                     <input
//                                         className="inventory__description inventory__item-field"
//                                         id="addDesc"
//                                         type="text"
//                                         placeholder=""
//                                         value={itemData.description}
//                                         onChange={descChange}
//                                     />
//                                     {saved && !itemData.description ? (
//                                                 <div>
//                                                     <img src={error} alt="error" />
//                                                     <span>This field is required</span>
//                                                 </div>
//                                     ) : null}
//                                 </section>
//                                 <section className="inventory__form-section">
//                                     <label htmlFor="addCategory" className="inventory__form-label">
//                                         Category
//                                     </label>
//                                     <input
//                                         className="inventory__category inventory__item-field"
//                                         id="addCategory"
//                                         type="text"
//                                         placeholder=""
//                                         value={itemData.category}
//                                         onChange={categoryChange}
//                                     />
//                                     {saved && !itemData.category ? (
//                                                 <div>
//                                                     <img src={error} alt="error" />
//                                                     <span>This field is required</span>
//                                                 </div>
//                                     ) : null}
//                                 </section>
//                             </section>

//                             <section className="inventory__availability-form">
//                                 <h1 className="inventory__form-header">
//                                     Item Availability
//                                 </h1>

//                                 <label htmlFor="addStatus" className="inventory__form-label">
//                                     Status
//                                 </label>
//                                 <section id="addStatus" className="status__options">
//                                     <section className="status__left">
//                                         <input
//                                             className="inventory__status"
//                                             name="status"
//                                             type="radio"
//                                             value="In stock"
//                                             onChange={statusChange}
//                                             id="inStock"
//                                             defaultChecked="checked"
//                                         />
//                                         <label htmlFor="inStock" className='status__instock'>
//                                             In stock
//                                         </label>
//                                     </section>
//                                     <section className="status__right">
//                                         <input
//                                             className="inventory__status"
//                                             name="status"
//                                             type="radio"
//                                             value="Out of stock"
//                                             onChange={statusChange}
//                                             id="outStock"
//                                         />
//                                         <label htmlFor="outStock" className='status__outstock'>
//                                             Out of stock
//                                         </label>
//                                     </section>
//                                     {saved && !itemData.status ? (
//                                             <div>
//                                                 <img src={error} alt="error" />
//                                                 <span>This field is required</span>
//                                             </div>
//                                 ) : null}
//                                 </section>
//                                 <section className="inventory__form-section">
//                                     <label htmlFor="addWarehouse" className="inventory__form-label">
//                                         Warehouse
//                                     </label>
//                                     <input
//                                         className="inventory__warehouse inventory__item-field"
//                                         id="addWarehouse"
//                                         type="text"
//                                         placeholder=""
//                                         value={itemData.warehouseName}
//                                         onChange={warehouseNameChange}
//                                     />
//                                     {saved && !itemData.warehouseName ? (
//                                                 <div>
//                                                     <img src={error} alt="error" />
//                                                     <span>This field is required</span>
//                                                 </div>
//                                     ) : null}
//                                 </section>
//                             </section>
//                         </section>


//                         <section className="inventory__edit-buttons">
                            
//                             <button className="cancel__button edit__form-button" onClick={clickFunc}>
//                                 Cancel
//                             </button>
                            
//                             <button className="save__button edit__form-button">
//                                 Save
//                             </button>

//                         </section>


//                     </form>
                
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

export default InventoryEdit;