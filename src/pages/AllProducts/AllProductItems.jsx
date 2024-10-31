import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const AllItems = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item.id}`); // Navigate to service details page
  };

  return (
    <Card className="mb-3">
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
        <Button onClick={handleViewDetails} color="primary">
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default AllItems;
