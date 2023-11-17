import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm() {
  return (
    <Form className='w-50 mx-auto mb-5'>
      <Form.Group className="mb-3 w-100" controlId="Image">
        <Form.Label className='text-center d-block fs-3 fw-semibold p-3'>Search a picture</Form.Label>
        <Form.Control type="text" placeholder="Type Image name" />
      </Form.Group>

      <Button className='w-50 d-block mx-auto' variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SearchForm