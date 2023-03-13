const ContentWraper = (props) => {
  return (
    <main
      style={{
        width: "1200px",
        margin: "0 auto",
        minHeight: "86vh",
      }}
    >
      {props.children}
    </main>
  );
};
export default ContentWraper;
