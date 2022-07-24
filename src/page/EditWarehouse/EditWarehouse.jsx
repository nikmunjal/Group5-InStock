// import "./EditWarehouse.scss";
// import error from "../../assets/Icons/error-24px.svg";
// import backArrow from "../../assets/Icons/arrow_back-24px.svg";
// import React, { useState } from "react";
// import axios from "axios";
// import { API_URL_Warehouse } from "../../utilities/utility";
// import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";

// const EditWarehouse = (props) => {
//     const [wareHouseData, setWarehouseData] = useState({
//         name: "",
//         address: "",
//         city: "",
//         country: "",
//         contactName: "",
//         position: "",
//         phone: "",
//         email: "",
//     });

//     const [submitted, setSubmitted] = useState(false);
//     const [phoneError, setPhoneError] = useState(false);
//     const [emailError, setEmailError] = useState(false);

//     const handleNameInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             name: e.target.value,
//         }));
//     };

//     const handleAddressInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             address: e.target.value,
//         }));
//     };
//     const handleCityInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             city: e.target.value,
//         }));
//     };

//     const handleCountryInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             country: e.target.value,
//         }));
//     };

//     const handleContactNameInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             contactName: e.target.value,
//         }));
//     };

//     const handlePositionInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             position: e.target.value,
//         }));
//     };

//     const handlePhoneInputChange = (e) => {
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             phone: e.target.value,
//         }));
//     };

//     const handleEmailInputChange = (e) => {
//         e.persist();
//         setWarehouseData((wareHouseData) => ({
//             ...wareHouseData,
//             email: e.target.value,
//         }));
//     };

//     // To Validate the Email
//     const isValidateEmail = (email) => {
//         const emailRe =
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return emailRe.test(email);
//     };

//     // To Validate the Phone Number
//     const isValidPhoneNumber = (phone) => {
//         const phoneRe =
//             /^(\+{0,})(\d{0,})[-. ]([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
//         return phoneRe.test(phone);
//     };

//     const editWarehouse = (
//         e,
//         id,
//         name,
//         address,
//         city,
//         country,
//         contactName,
//         position,
//         phone,
//         email
//     ) => {
//         axios({
//             url: `${API_URL_Warehouse}/${id}`,
//             method: "PUT",
//             data: {
//                 name,
//                 address,
//                 city,
//                 country,
//                 contactName,
//                 position,
//                 phone,
//                 email,
//             },
//             headers: { "Content-Type": "application/json" },
//         }).catch((err) => {
//             console.log(err);
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const [
//             name,
//             address,
//             city,
//             country,
//             contactName,
//             position,
//             phone,
//             email,
//         ] = [
//             wareHouseData.name,
//             wareHouseData.address,
//             wareHouseData.city,
//             wareHouseData.country,
//             wareHouseData.contactName,
//             wareHouseData.position,
//             wareHouseData.phone,
//             wareHouseData.email,
//         ];

//         if (
//             name &&
//             address &&
//             city &&
//             country &&
//             contactName &&
//             position &&
//             isValidPhoneNumber(phone) &&
//             isValidateEmail(email)
//         ) {
//             editWarehouse(
//                 e,
//                 id,
//                 name,
//                 address,
//                 city,
//                 country,
//                 contactName,
//                 position,
//                 phone,
//                 email
//             );
//             setPhoneError(true);
//             setEmailError(true);
//         }
//         e.target.reset();
//         setSubmitted(true);
//     };

//     const handleClick = (e) => {
//         props.history.push("/");
//     };

//     return (
//         <div className="editwarehouse">
//             <div className="editwarehouse__flex-wrapper">
//                 <img src={backArrow} alt="back arrow" />
//                 <h1>Add New Warehouse</h1>
//             </div>
//             <div className="editwarehouse__form-div">
//                 <form className="editwarehouse__form" onSubmit={handleSubmit}>
//                     <div className="editwarehouse__form-flex">
//                         <div className="editwarehouse__form-container">
//                             <h3 className="editwarehouse__form-title">
//                                 Warehouse Details
//                             </h3>
//                             <label className="editwarehouse__form-label">
//                                 Warehouse Name
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Warehouse Name"
//                                 name="name"
//                                 value={wareHouseData.name}
//                                 onChange={handleNameInputChange}
//                             />
//                             {submitted && !wareHouseData.name ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 Street Address
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Street Address"
//                                 name="address"
//                                 value={wareHouseData.address}
//                                 onChange={handleAddressInputChange}
//                             />
//                             {submitted && !wareHouseData.address ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 City
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="City"
//                                 name="city"
//                                 value={wareHouseData.city}
//                                 onChange={handleCityInputChange}
//                             />
//                             {submitted && !wareHouseData.city ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 Country
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Country"
//                                 name="country"
//                                 value={wareHouseData.country}
//                                 onChange={handleCountryInputChange}
//                             />
//                             {submitted && !wareHouseData.country ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                         </div>
//                         <div className="editwarehouse__form-container editwarehouse__form-container--border">
//                             <h3 className="editwarehouse__form-title">
//                                 Contact Details
//                             </h3>
//                             <label className="editwarehouse__form-label">
//                                 Contact Name
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Contact Name"
//                                 name="contactName"
//                                 value={wareHouseData.contactName}
//                                 onChange={handleContactNameInputChange}
//                             />
//                             {submitted && !wareHouseData.contactName ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 Position
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Position"
//                                 name="position"
//                                 value={wareHouseData.position}
//                                 onChange={handlePositionInputChange}
//                             />
//                             {submitted && !wareHouseData.position ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 Phone Number
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Phone Number"
//                                 name="phone"
//                                 value={wareHouseData.phone}
//                                 onChange={handlePhoneInputChange}
//                             />
//                             {submitted &&
//                             !wareHouseData.phone &&
//                             !phoneError ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                             <label className="editwarehouse__form-label">
//                                 Email
//                             </label>
//                             <input
//                                 className="editwarehouse__form-input"
//                                 placeholder="Email"
//                                 name="email"
//                                 value={wareHouseData.email}
//                                 onChange={handleEmailInputChange}
//                             />
//                             {submitted &&
//                             !wareHouseData.email &&
//                             !emailError ? (
//                                 <div>
//                                     <img src={error} alt="error" />
//                                     <span>This field is required</span>
//                                 </div>
//                             ) : null}
//                         </div>
//                     </div>
//                     <div className="editwarehouse__button-container">
//                         <button className="editwarehouse__button-add">
//                             + Add Warehouse
//                         </button>
//                         <button
//                             className="editwarehouse__button-cancel"
//                             onClick={handleClick}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default EditWarehouse;
