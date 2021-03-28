import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Mini forecast weather</Navbar.Brand>
    </Navbar>
  );
}
