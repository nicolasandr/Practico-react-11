import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = () => {
  return (
    <div className="py-4 mx-2">
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className=" text-center">
          <Button className="btn-color py-2">Ver noticias completas</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;
