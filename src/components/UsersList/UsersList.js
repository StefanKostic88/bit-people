import UsersListItem from "./UsersListItem/UsersLIstItem";

const UsersList = ({ usersData }) => {
  return (
    <div className="Users-list">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
      >
        {usersData.map((user, index) => (
          <UsersListItem {...user} key={`${user.id}-${index}`} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
