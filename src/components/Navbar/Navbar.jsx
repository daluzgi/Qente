import { useState } from "react";
import {
  Navbar as BsNavbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const close = () => setExpanded(false);

  return (
    <BsNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
      className="shadow-sm"
    >
      <Container fluid>
        <BsNavbar.Brand href="/">Qente Mikhuy</BsNavbar.Brand>

        <BsNavbar.Toggle onClick={() => setExpanded(!expanded)} />

        <BsNavbar.Collapse>
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#restaurant" onClick={close}>
              Restaurant
            </Nav.Link>
            <Nav.Link href="#reservas" onClick={close}>
              Reservas
            </Nav.Link>

            <Nav.Link
              href="https://wa.me/54911XXXXYYYY"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsLink}
              onClick={close}
            >
              <BsWhatsapp size={18} className="me-1" /> WhatsApp
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
