import React, { useState } from "react";
import axiosInstance from "../service/axiosInstance";
import * as API from "../service/API_CONSTANT";
import Swal from "sweetalert2";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export default function DeleteUser() {
   const [userId, setUserId] = useState("");
   const navigate = useNavigate();

   const handleOnDelete = () => {
      Swal.fire({
         title: "Delete User",
         input: "text",
         inputLabel: "Enter User ID",
         inputPlaceholder: "Enter User ID",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
         inputValidator: (value) => {
            if (!value) {
               return "Please enter a valid User ID";
            }
         },
      }).then((result) => {
         if (result.isConfirmed) {
            axiosInstance
               .delete(`${API.BASE_URL}${API.DELETE_USER_BY_ID}/${result.value}`)
               .then((response) => {
                  console.log(response.data);
                  Swal.fire("Deleted!", "User has been deleted successfully.", "success").then(
                     () => {
                        navigate("/list");
                     }
                  );
               })
               .catch((error) => {
                  console.error("Error deleting user:", error);
                  Swal.fire("Error!", "Something went wrong.", "error");
               });
         }
      });
   };

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "10px",
         }}
      >
         <button onClick={handleOnDelete} className="secondary-button">
            Delete User Data{" "}
         </button>
      </div>
   );
}
