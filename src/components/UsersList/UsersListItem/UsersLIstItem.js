import { HiEnvelope, HiCake } from "react-icons/hi2";

const UsersListItem = ({ userName, email, birthDate, img }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        boxShadow: "0 0 0 1px #c7c7c7",
        padding: "10px 15px",
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        <img
          style={{
            borderRadius: "50%",
          }}
          src={img}
          alt={`User: ${userName}`}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span> {userName}</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <HiEnvelope />
          email: {email}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <HiCake />
          {birthDate}.
        </span>
      </div>
    </li>
  );
};

export default UsersListItem;
