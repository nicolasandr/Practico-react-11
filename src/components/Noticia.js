import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = (props) => {
  return (
    <div className='col-12 col-md-4 '>
      <div className="py-4 mx-2">
        <Card>
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Header></Card.Header>
            <Card.Title className="pt-3">{props.noticiaCargada.name}</Card.Title>
            <Card.Text>{props.noticiaCargada.description}</Card.Text>
            <div className=" text-center">
                <a href={props.noticiaCargada.url}>
                <Button className="btn-color py-2">Ver noticias completas</Button>
                </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Noticia;
