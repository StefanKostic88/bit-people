import React from "react";

const UsersGridLIst = ({ usersData }) => {
  console.log(usersData);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)" }}>
      {usersData.map((user, index) => (
        <figure
          key={`${user.id}-${index}`}
          style={{
            boxShadow: "0 0 0 1px black",
            borderRadius: "3px",
            minWidth: "320px",
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src={user.imgLarge}
              alt={`User: ${user.userName}`}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h3
              style={{
                position: "absolute",
                bottom: 0,
                left: "20px",
                color: "#fff",
              }}
            >
              {user.userName.split(" ")[0]}
            </h3>
          </div>
          <div
            className="card-content"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <span>{user.email}</span>
            <span>Birth Date: {user.birthDate}</span>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default UsersGridLIst;
