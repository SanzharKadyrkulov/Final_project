import React from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductContext";
import Song from "../../Song/Song";
import logo from "./logo.png";

const Header = () => {
  const { history } = useProducts();
  const { user, logout } = useAuth();

  // const handleValue = (e) => {
  //   const search = new URLSearchParams(history.location.search)
  //   search.set('q', e.target.value)
  //   search.set('_page', 1)
  //   history.push(`${history.location.pathname}?${search.toString()}`)
  //   getProductsData()
  // }
  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{ backgroundColor: "#fff", height: "100px" }}
        color="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="#"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ fontSize: "18px" }} className="mr-auto">
              {/* <Song /> */}
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/browsinghistory"
              >
                Browsing history
              </Link>
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/productlist"
              >
                Catalog
              </Link>
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/chat"
              >
                Chat
              </Link>
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/cart"
              >
                Cart
              </Link>
              <Link
                style={{ color: "#4c4d4f", fontWeight: 500 }}
                className="nav-link"
                to="/fav"
              >
                Favorite
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-4"
              onChange={(e) => handleValue(e)}
            />
          </Form> */}
          {user ? (
            <>
              <div
                style={{
                  color: "#000",
                  margin: "10px",
                  border: "1px solid #ea721b",
                  padding: "5px",
                  borderRadius: "5px",
                  fontWeight: 500,
                }}
              >
                {user.email}
              </div>
              <Button
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  backgroundColor: "#efeeec",
                  color: "#ea721b",
                  fontWeight: 500,
                  border: "1px solid #ea721b",
                }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => history.push("/login")}
                variant="danger"
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  backgroundColor: "#efeeec",
                  color: "#ea721b",
                  fontWeight: 500,
                  border: "1px solid #ea721b",
                }}
              >
                Log In
              </Button>
              <Button
                onClick={() => history.push("/registration")}
                variant="danger"
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  backgroundColor: "#efeeec",
                  color: "#ea721b",
                  fontWeight: 500,
                  border: "1px solid #ea721b",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
