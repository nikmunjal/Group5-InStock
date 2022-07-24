// import { useState } from "react";
// import { Modal, ReactModal } from "react-modal";
// import { API_URL_Warehouse } from "../../utilities/utility";
// import axios from "axios";
// import closeIcon from "../../assets/Icons/close-24px.svg";

// const DeleteWareHouse = () => {
//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [warehouseData, setWarehouseData] = useState([]);

//     function openModal() {
//         setIsOpen(true);
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed.
//         subtitle.style.color = "#f00";
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     // const removeWarehouse = (id) => {
//     //     axios({
//     //         url: `${API_URL_Warehouse}/${id}`,
//     //         method: "DELETE",
//     //     }).then((response) => {
//     //         setWarehouseData(response.data);
//     //     });
//     // };

//     // const handleClick = (e) => {
//     //     // warehouseData.map(warehouse => {
//     //     //     const {id} = warehouse
//     //     // })
//     // };

//     return (
//         <>
//             <h1>Hello</h1>
//             <button onClick={onClickModal}>Click Me</button>
//             <ReactModal
//                 className="modal"
//                 isOpen={modal}
//                 contentLabel="minimal information"
//             >
//                 <img
//                     className="modal__icon"
//                     src={closeIcon}
//                     alt="close icon"
//                     onClick={onCloseModal}
//                 ></img>
//                 <h1 className="modal__title">Delete {} Warehouse?</h1>
//                 <p className="modal__message">
//                     Please confirm that you'd like to delete the {} from the
//                     list of warehouses.You won't be able to undo this action.
//                 </p>
//                 <div className="modal__button-container">
//                     <button onClick={onCloseModal}>Cancel</button>
//                     <button onClick="{handleClick}">Delete</button>
//                 </div>
//             </ReactModal>
//         </>
//     );
// };
// export default DeleteWareHouse;
