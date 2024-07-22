import React, { useEffect } from "react";
import * as API from "../service/API_CONSTANT";
import axiosInstance from "../service/axiosInstance";
import UserCards from "../components/UserCards";
import "./viewUser.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ViewUser() {
   const [userList, setUserList] = React.useState([]);
   const [userData, setUserData] = React.useState();
   const navigate = useNavigate();

   useEffect(() => {
      fetchUser();
   }, []);

   const fetchUser = () => {
      axiosInstance
         .get(API.BASE_URL + API.LIST_USER)
         .then((response) => {
            console.log(response.data);
            setUserList(response.data);
         })
         .catch((error) => {
            console.error("Error fetching users:", error);
         });
   };

   const handleOnDelete = (userId) => {
      axiosInstance
        .get(API.BASE_URL + API.GET_USER_BY_ID + "/" + userId)
        .then((res) => {
          const userData = res.data;  // Fetch user data
    
          Swal.fire({
            title: `Are you sure you want to delete ${userData.userName}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
               axiosInstance
                  .delete(`${API.BASE_URL}${API.DELETE_USER_BY_ID}/${userId}`)
                  .then((response) => {
                     console.log(response.data);
                     const updatedUsers = userList.filter(user => user.id !== userId);
                     setUserList(updatedUsers);
                     Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                     );
                  })
                  .catch((error) => {
                     console.error("Error deleting user:", error);
                     Swal.fire(
                        'Error!',
                        'Something went wrong.',
                        'error'
                     );
                  });
            }
          });
        })
        .catch((error) => {
          console.log("Something went wrong");
        });
    };

    const handleOnEdit = (userId) => {
      axiosInstance
        .get(API.BASE_URL + API.GET_USER_BY_ID + "/" + userId)
        .then((res) => {
          const userData = res.data;  // Fetch user data
    
          Swal.fire({
            title: `Are you sure you want to change ${userData.userName}?`,
            text: "You won't be able to revert this changes!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Edit it!",
          }).then((result) => {
            if (result.isConfirmed) {
               navigate(`/edit/${userData.id}`);
            }
          });
        })
        .catch((error) => {
          console.log("Something went wrong");
        });
    };

   return (
      <div className="user__details">
         {userList.map((user) => (
            <div key={user.id}>
               <UserCards user={user} onDelete={handleOnDelete} onEdit={handleOnEdit}/>
            </div>
         ))}
      </div>
   );
}
