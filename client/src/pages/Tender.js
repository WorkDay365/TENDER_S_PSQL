import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneTender } from "../http/tenderAPI";

const Tender = () => {
  const [tender, setTender] = useState({ info: [] });
  //   {id: 1, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2}

  const params = useParams();
  const { id } = useParams();
  console.log(params);
  console.log(id);

  console.log(setTender);
  console.log(tender);
  console.log("");
  useEffect(() => {
    fetchOneTender(id).then((data) => setTender(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + tender.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{tender.name}</h2>
            статус тендера:
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              <p />
              {tender.tender_status}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
          // className="d-flex flex-column align-items-center justify-content-around"
          // style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            {/* <h3>От: {tender.price} руб.</h3> */}
            <h3>Від: 200 000 грн.</h3>
            <Button variant={"outline-dark"}>Додати в кабінет</Button>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex flex-column m-3">
        <h1>Опис тендера </h1>

        <h2>{tender.tender_description}</h2>
        {/* {tender.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )} */}
      </Row>
    </Container>
  );
};

export default Tender;
