import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {tender} = useContext(Context)
    return (
       

    <ListGroup>
        
       {tender.typesTender.map(types =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active = {types.id === tender.selectedTypesTender.id}
                    onClick={() => tender.setSelectedTypesTender(types)}
                    key={types.id}
                 >
                    {types.title}
                </ListGroup.Item>
            )}
    </ListGroup>
  

    );
});

export default TypeBar;
