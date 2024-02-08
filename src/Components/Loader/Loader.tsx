import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <h1 className="text-center">
      loading...
      <Spinner animation="grow" />
    </h1>
  );
}

export default Loader;
