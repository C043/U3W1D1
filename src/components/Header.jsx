import ButtonComponent from "./ButtonComponent";

const Header = props => {
  return (
    <header className="my-2">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>My First React App</h1>
        <ButtonComponent btnText="Cliccami" />
      </div>
    </header>
  );
};

export default Header;
