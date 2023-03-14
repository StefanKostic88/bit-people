import React from "react";

const UsersNumber = ({ femlaUsers, maleUsers }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div>
        Male: {maleUsers} Female: {femlaUsers}
      </div>
    </div>
  );
};

export default UsersNumber;
