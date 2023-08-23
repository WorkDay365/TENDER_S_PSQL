import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {tender} = useContext(Context)
    return (
       

    <ListGroup>
        
       {tender.typesTender.map(typeTender =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active = {typeTender.id === tender.selectedTypeTender.id}
                    onClick={() => tender.setSelectedTypeTender(typeTender)}
                    key={typeTender.id}
                 >
                    {typeTender.title}
                </ListGroup.Item>
            )}
    </ListGroup>
  

    );
});

export default TypeBar;
