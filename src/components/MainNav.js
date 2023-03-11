const MainNav = () => {
  return (
    <div
      style={{
        backgroundColor: "#EE6E73",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div>Logo</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "25px" }}>
        <li>About</li>
        <li>Reload</li>
        <li>Grid</li>
      </ul>
    </div>
  );
};

export default MainNav;
