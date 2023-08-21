import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { TENDER_ROUTE } from "../utils/consts";

const DeviceItem = ({ tender }) => {
  const history = useHistory();
  return (
    <Col
      md={16}
      className={"mt-3"}
      onClick={() => history.push(TENDER_ROUTE + "/" + tender.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <tr>
          <td>
            <div>
              <Image
                width={150}
                height={150}
                src={process.env.REACT_APP_API_URL + tender.img}
              />
              <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                {/* <div>Samsung...</div> */}
                <div className="d-flex align-items-center">
                  <div>{tender.rating}</div>
                  <Image width={18} height={18} src={star} />
                </div>
              </div>
              <div>{tender.name}</div>
            </div>
            {/* <div>dfgfdgdfgdfgdfgdfg</div> */}
          </td>
          <td>
            <div>{tender.tender_description}</div>
          </td>
        </tr>
      </Card>
    </Col>
  );
};

export default DeviceItem;
