const ContentWraper = (props) => {
  return (
    <main
      style={{
        width: "1200px",
        margin: "0 auto",
      }}
    >
      {props.children}
    </main>
  );
};
export default ContentWraper;
