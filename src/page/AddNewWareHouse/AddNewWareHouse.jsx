import "./AddNewWareHouse.scss";
import error from "../../assets/Icons/error-24px.svg";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL_Warehouse } from "../../utilities/utility";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AddNewWareHouse = (props) => {
    const [wareHouseData, setWarehouseData] = useState({
        name: "",
        address: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phone: "",
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleNameInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            name: e.target.value,
        }));
    };

    const handleAddressInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            address: e.target.value,
        }));
    };
    const handleCityInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            city: e.target.value,
        }));
    };

    const handleCountryInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            country: e.target.value,
        }));
    };

    const handleContactNameInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            contactName: e.target.value,
        }));
    };

    const handlePositionInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            position: e.target.value,
        }));
    };

    const handlePhoneInputChange = (e) => {
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            phone: e.target.value,
        }));
    };

    const handleEmailInputChange = (e) => {
        e.persist();
        setWarehouseData((wareHouseData) => ({
            ...wareHouseData,
            email: e.target.value,
        }));
    };

    // To Validate the Email
    const isValidateEmail = (email) => {
        const emailRe =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRe.test(email);
    };

    // To Validate the Phone Number
    const isValidPhoneNumber = (phone) => {
        const phoneRe =
            /^(\+{0,})(\d{0,})[-. ]([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
        return phoneRe.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const [
            name,
            address,
            city,
            country,
            contactName,
            position,
            phone,
            email,
        ] = [
            wareHouseData.name,
            wareHouseData.address,
            wareHouseData.city,
            wareHouseData.country,
            wareHouseData.contactName,
            wareHouseData.position,
            wareHouseData.phone,
            wareHouseData.email,
        ];

        if (
            name &&
            address &&
            city &&
            country &&
            contactName &&
            position &&
            isValidPhoneNumber(phone) &&
            isValidateEmail(email)
        ) {
            axios.post(API_URL_Warehouse, {
                name,
                address,
                city,
                country,
                contactName,
                position,
                phone,
                email,
            });

            setPhoneError(true);
            setEmailError(true);
        }
        e.target.reset();
        setSubmitted(true);
    };

    const handleClick = (e) => {
        props.history.push("/");
    };

    return (
        <>
            <Header />
            <div className="addnewwarehouse">
                <div className="addnewwarehouse__flex-wrapper">
                    <Link to="/">
                        <img
                            className="addnewwarehouse__backarrow"
                            src={backArrow}
                            alt="back arrow"
                        />
                    </Link>
                    <h1 className="addnewwarehouse__header">
                        Add New Warehouse
                    </h1>
                </div>
                <div className="addnewwarehouse__form-div">
                    <form
                        className="addnewwarehouse__form"
                        onSubmit={handleSubmit}
                    >
                        <div className="addnewwarehouse__form-flex">
                            <div className="addnewwarehouse__form-container">
                                <h3 className="addnewwarehouse__form-title">
                                    Warehouse Details
                                </h3>
                                <label className="addnewwarehouse__form-label">
                                    Warehouse Name
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Warehouse Name"
                                    name="name"
                                    value={wareHouseData.name}
                                    onChange={handleNameInputChange}
                                />
                                {submitted && !wareHouseData.name ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    Street Address
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Street Address"
                                    name="address"
                                    value={wareHouseData.address}
                                    onChange={handleAddressInputChange}
                                />
                                {submitted && !wareHouseData.address ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    City
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="City"
                                    name="city"
                                    value={wareHouseData.city}
                                    onChange={handleCityInputChange}
                                />
                                {submitted && !wareHouseData.city ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    Country
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Country"
                                    name="country"
                                    value={wareHouseData.country}
                                    onChange={handleCountryInputChange}
                                />
                                {submitted && !wareHouseData.country ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                            </div>
                            <div className="addnewwarehouse__form-container addnewwarehouse__form-container--border">
                                <h3 className="addnewwarehouse__form-title">
                                    Contact Details
                                </h3>
                                <label className="addnewwarehouse__form-label">
                                    Contact Name
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Contact Name"
                                    name="contactName"
                                    value={wareHouseData.contactName}
                                    onChange={handleContactNameInputChange}
                                />
                                {submitted && !wareHouseData.contactName ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    Position
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Position"
                                    name="position"
                                    value={wareHouseData.position}
                                    onChange={handlePositionInputChange}
                                />
                                {submitted && !wareHouseData.position ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    Phone Number
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={wareHouseData.phone}
                                    onChange={handlePhoneInputChange}
                                />
                                {submitted &&
                                !wareHouseData.phone &&
                                !phoneError ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                                <label className="addnewwarehouse__form-label">
                                    Email
                                </label>
                                <input
                                    className="addnewwarehouse__form-input"
                                    placeholder="Email"
                                    name="email"
                                    value={wareHouseData.email}
                                    onChange={handleEmailInputChange}
                                />
                                {submitted &&
                                !wareHouseData.email &&
                                !emailError ? (
                                    <div>
                                        <img src={error} alt="error" />
                                        <span>This field is required</span>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="addnewwarehouse__button-container">
                            <button className="addnewwarehouse__button-add">
                                + Add Warehouse
                            </button>
                            <button
                                className="addnewwarehouse__button-cancel"
                                onClick={handleClick}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AddNewWareHouse;
