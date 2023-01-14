import React from "react";
import { Card } from "react-bootstrap";

const StudentCard = ({student}) => {
  const { isim, yas, kurs, img } = student;

  return (
    <Card style={{marginTop:"2rem"}}>
      <Card.Img variant="top" src={img} style={{height:"350px"}} />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>{isim}</Card.Title>
        <Card.Title>{yas}</Card.Title>
        <Card.Text>{kurs}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
