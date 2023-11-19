import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (search.trim().length > 0) {
      setSearch("");
      navigate(`/search/${search}`);
    }
    setSearch("");
  }
  return (
    <Form className="col-xl-6 mx-auto mb-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-100" controlId="Image">
        <Form.Label className="text-center d-block fs-3 fw-semibold p-3">Search a picture</Form.Label>
        <Form.Control
          className="w-100"
          type="text"
          placeholder="Type Image name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Form.Group>
      <Button className="w-50 d-block mx-auto" variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchForm;
