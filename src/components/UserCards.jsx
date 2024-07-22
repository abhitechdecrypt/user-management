import React from "react";
import "./usercard.scss";

export default function UserCards({ user, onDelete,onEdit }) {
   return (
      <div className="user-card">
         <h2 className="user-card__name">{user.userName}</h2>
         <p className="user-card__email">Email: {user.userEmail}</p>
         <p className="user-card__role">Role: {user.userRole}</p>
         <p className="user-card__date">Date of Creation: {user.dateOfCreation.split("T")[0]}</p>
         <p className="user-card__status">Status: {user.userStatus}</p>
         <hr />
         <div className="footer__section">
            <button className="danger__button" onClick={()=> onDelete(user.id)}>Delete User</button>
            <button className="edit__button" onClick={()=> onEdit(user.id)}>Edit User</button>
         </div>
      </div>
   );
}
