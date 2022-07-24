import './InventoryPage.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { API_URL_Inventory } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import InventoryItem from '../../components/InventoryList/InventoryItem.js';
import sort from "../../assets/Icons/sort-24px.svg"



function InventoryPage() {
    const [inventory,setinventory] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await axios.get(`${API_URL_Inventory}`);

            setinventory(response.data);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };

      fetchData();
    }, []);

    if (loading) {
        return <div className="Loading">Loading Inventory...</div>;
      }



      return(

        <>

   <Header
            warehouseLink={""}
            inventoryLink={"inventory__link-active"}
        />
        <section className='inventory-page'>
          <div className='page-header'>
            <h1 className='page-header__title'>Inventory</h1>
            <input type ="text" className="page-header__search" placeholder="Search..." />
            <Link to="/inventory/add">
            <button className='page-header__button' type = "button">+ Add New Item</button>
            </Link>
          </div>
          <div className='inventory__flex-container'>
          <ul className='table-titles'>
              <li className='table-titles__item'><p className='title-tablet'>INVENTORY ITEM</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
              <li className='table-titles__item'><p className='title-tablet'>CATEGORY</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
              <li className='table-titles__item'><p className='title-tablet'>STATUS</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
              <li className='table-titles__item'><p className='title-tablet'>QTY</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
              <li className='table-titles__item'><p className='title-tablet'>WAREHOUSE</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
              <li className='table-titles__item'><p className='title-tablet'>ACTIONS</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
            </ul>

          {inventory.map(item =>
          <InventoryItem key={item.id}
          id = {item.id}
          name = {item.itemName}
          category = {item.category}
          status = {item.status}
          qty = {item.quantity}
          warehouse = {item.warehouseName}
          />
        )}
          </div>
      </section>






        <Footer />

        </>



    )
}

export default InventoryPage;