const ButtonComponent = props => {
  return (
    <button
      className="btn btn-danger my-3"
      onClick={() => {
        window.alert("Never gonna give you up! Never gonna let you down!");
      }}
    >
      {props.btnText}
    </button>
  );
};

export default ButtonComponent;
