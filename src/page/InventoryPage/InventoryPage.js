import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";

import axios from "axios";
import React, { useState, useEffect } from 'react';

function InventoryPage() {

    // to set item based on id
    const [item, setItem] = useState('');

    useEffect(() => {
        
    })

    return (
        <div>
            <Header />

            <Footer />
        </div>
    )

};

export default InventoryPage;