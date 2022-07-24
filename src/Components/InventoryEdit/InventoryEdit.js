import arrowBack from '../../assets/Icons/arrow_back-24px.svg';


function InventoryEdit() {

    return (
        <div className="inventory__edit">
        
            <img className="back__arrow" src={arrowBack} alt="back arrow"/>

            <h1 className="inventory__edit-header">
                Edit Inventory Item
            </h1>

            <form className="inventory__form">
                <section className="inventory__details-form">

                    <label htmlFor="addName" className="inventory__form-label">
                        Item Name
                    </label>
                    <input
                        className="inventory__item-name"
                        id="addName"
                        type="text"
                        placeholder=""
                    />

                    <label htmlFor="addDesc" className="inventory__form-label">
                        Description
                    </label>
                    <input
                        className="inventory__description"
                        id="addDesc"
                        type="text"
                        placeholder=""
                    />

                    <label htmlFor="addCategory" className="inventory__form-label">
                        Category
                    </label>
                    <input
                        className="inventory__category"
                        id="addCategory"
                        type="text"
                        placeholder=""
                    />

                </section>

                <section className="inventory__availability-form">

                    <label htmlFor="addStatus" className="inventory__form-label">
                        Status
                    </label>
                    <section id="addStatus">
                        <input
                            className="inventory__status"
                            type="radio"
                            value="In stock"
                        />
                        <input
                            className="inventory__status"
                            type="radio"
                            value="Out of stock"
                        />
                    </section>

                    <label htmlFor="addWarehouse" className="inventory__form-label">
                        Warehouse
                    </label>
                    <input
                        className="inventory__warehouse"
                        id="addWarehouse"
                        type="text"
                        placeholder=""
                    />

                </section>


                <section className="inventory__edit-buttons">
                    
                    <button className="cancel__button">
                        Cancel
                    </button>
                    <button className="save__button">
                        Save
                    </button>

                </section>


            </form>
        
        </div>
    )
}

export default InventoryEdit;