import Header from "./Header";
import ImageComponent from "./ImageComponent";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <ImageComponent
        src="https://images.unsplash.com/photo-1718202248507-9b6a498bcec2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="abstract-image"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default Container;
