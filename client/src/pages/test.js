import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import TenderList from "../components/TenderList";
import Pages from "../components/Pages";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypesTender, fetchTenders } from "../http/tenderAPI";

const Test = observer(() => {
  const { tender } = useContext(Context);

  useEffect(() => {
    fetchTypesTender().then((data) => tender.setTypesTender(data));
    fetchTenders(null, 1, 4).then((data) => {
      // tender.setTender(data.rows));
      tender.setTender(data.rows);
      tender.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchTenders(tender.selectedTypeTender.id, tender.page, 2).then((data) => {
      tender.setTender(data.rows);
      tender.setTotalCount(data.count);
    });
  }, [tender.page, tender.selectedTypeTender]);

  return (
    <Container>
      <div>
        <h1>TEST</h1>
        <h3>TEST</h3>
        <h6>TEST</h6>
      </div>
    </Container>
  );
});

// export default TenderUA;
// const Test = () => {
//   return (
//     <div>
//       <h1>TEST</h1>
//       <h3>TEST</h3>
//       <h6>TEST</h6>
//     </div>
//   );
// };

export default Test;
