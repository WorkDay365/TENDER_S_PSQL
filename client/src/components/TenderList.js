import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import TenderItem from "./TenderItem";

const TenderList = observer(() => {
  const { tender } = useContext(Context);
  console.log(
    "++  ++                     ++          ++         ++            ++       ++"
  );
  console.log(tender.tenders);

  return (
    <Row className="d-flex">
      {tender.tenders.map((tender) => (
        <TenderItem key={tender.id} tender={tender} />
      ))}
    </Row>
  );
});

export default TenderList;
