import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import AddHospital from "./AddHospital";
import HospitalList from "./HospitalList";
import { Container, Button, Row, Col } from "react-bootstrap";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard! This is a protected route.</p>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Hospital Management</h2>
          <AddHospital />
          <HospitalList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
