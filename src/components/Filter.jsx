import React from "react";
import { FaSearch } from "react-icons/fa";
import { FormControl, Button, Form, Container } from "react-bootstrap";


export default function Filter({handleSearchMovie}) {
  return (
    <>
        <Container>
            <div className="searchbar m-6" style={{ width: "450px", marginLeft: "20px" }}>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search for a movie"
                        className="me-2"
                        aria-label="Search"
                        style={{ backgroundColor: "#040484", color: "#fff" }}
                        onChange={(e) => handleSearchMovie}
                    />
                    <Button
                    variant="outline-success"
                    style={{ backgroundColor: "orange", border: "none" }}
                    >
                        <FaSearch style={{ fontSize: "30px", fontWeight: "bold" }} />
                    </Button>
                </Form>
            </div>
        </Container>
    </>
  );
}
