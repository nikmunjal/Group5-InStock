import './WarehousePage.scss';
import { API_URL_Warehouse } from '../../utilities/utility';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import sort from "../../assets/Icons/sort-24px.svg";

function WarehousePage() {
    const [warehouse, setwarehouse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL_Warehouse}`);
                setwarehouse(response.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="Loading">Loading warehouse list...</div>;
    }

    return (
        <>
        <Header
            warehouseLink={"warehouses__link-active"}
            inventoryLink={""}/>

          <section className='warehouse-page'>
            <div className='page-header'>
                <h1 className='page-header__title'>Warehouse</h1>
                <input type ="text" className="page-header__search" placeholder="Search..." />
                <Link to="/add">
                <button className='page-header__button' type = "button">+ Add New Warehouse</button>
                </Link>

            </div>
            <ul className='table-titles'>
                <li className='table-titles__item'><p className='title-tablet'>WAREHOUSE</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
                <li className='table-titles__item'><p className='title-tablet'>ADDRESS</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
                <li className='table-titles__item'><p className='title-tablet'>CONTACT NAME</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
                <li className='table-titles__item'><p className='title-tablet'>CONTACT INFORMATION</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>
                <li className='table-titles__item'><p className='title-tablet'>ACTIONS</p><img  className= "logo" alt = "updown arrows" src = {sort} /></li>

               </ul>

            {warehouse.map((w) => (
                <WarehouseItem
                    key={w.id}
                    id={w.id}
                    name={w.name}
                    address={w.address}
                    contactName={w.contact.name}
                    contactPhone={w.contact.phone}
                    contactEmail={w.contact.email}
                />
            ))}


      </section>
        <Footer />
        </>
    );
}

export default WarehousePage;
