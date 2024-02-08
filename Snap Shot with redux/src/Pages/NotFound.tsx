import Menu from "../Components/Navbar/Menu";

function NotFound() {
  return (
    <>
      <Menu />
      <h1 className="text-center text-capitalize">This route is not valid. Please check a valid address</h1>;
    </>
  );
}

export default NotFound;
