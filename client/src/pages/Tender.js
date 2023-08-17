import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
//import {fetchOneDevice} from "../http/deviceAPI";

const Tender = () => {
    const tender =    {id: 1, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2}
    const description = [
                {id:1, title: 'херня', description: '65hfh'},
                {id:2, title: 'хеgffdgрня', description: '53453'},
                {id:3, title: 'хеdfgdfрня', description: '56756'},
                {id:4, title: 'хdfgd', description: 'ghjtyjut'},
                {id:5, title: 'dfghdfgre', description: 'ghhgjghjh'},
            ]
    return (
        <Container className="mt-3">
             <Row>
           <Col md={4}>
             <Image width={300} height={300} src={tender.img}/>
            </Col> 
            <Col md={4}>
            <Row className="d-flex flex-column align-items-center">
                     <h2>{tender.name}</h2>
                     <div
                         className="d-flex align-items-center justify-content-center"
                         style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                     >
                         {tender.rating}
                     </div>
                 </Row>
            </Col>
            <Col md={4}>
            <Card
                    // className="d-flex flex-column align-items-center justify-content-around"
                    // style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    {/* <h3>От: {tender.price} руб.</h3> */}
                    <h3>От: 200 000 грн.</h3> 
                    <Button variant={"outline-dark"}>Додати в кабінет</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
             <h1>Опис тендера </h1>
             {description.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
            )}
        </Row>
        </Container>
    )
}

// const Tender = () => {
//     const tender =    {id: 1, name: "BBB_72",   img: "093a65c5-13f8-4dc7-9e5f-7f9a477fc70d.jpg"	,tender_description: "ghdfhggfhfhd",  tender_status: 7,	userId: 2,	typeTenderId: 2}
//     const description = [
//         {id:1, title: 'херня', description: '65hfh'},
//         {id:2, title: 'хеgffdgрня', description: '53453'},
//         {id:3, title: 'хеdfgdfрня', description: '56756'},
//         {id:4, title: 'хdfgd', description: 'ghjtyjut'},
//         {id:5, title: 'dfghdfgre', description: 'ghhgjghjh'},
//     ]

//     return (
//         <Container className="mt-3">
//         <Row>
//             <Col md={4}>
//                 {/* <Image width={300} height={300} src={process.env.REACT_APP_API_URL + tender.img}/> */}
//                     <Image width={300} height={300} src={tender.img}/>
//             </Col>
//             <Col md={4}>
//                 <Row className="d-flex flex-column align-items-center">
//                     <h2>{tender.name}</h2>
//                     <div
//                         className="d-flex align-items-center justify-content-center"
//                         style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
//                     >
//                         {tender.rating}
//                     </div>
//                 </Row>
//             </Col>
//             <Col md={4}>
//                 <Card
//                     className="d-flex flex-column align-items-center justify-content-around"
//                     style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
//                 >
//                     {/* <h3>От: {tender.price} руб.</h3> */}
//                     <Button variant={"outline-dark"}>Додати в кабінет</Button>
//                 </Card>
//             </Col>
//         </Row>
//         <Row className="d-flex flex-column m-3">
//             <h1>Опис тендера </h1>
//             {tender.info.map((info, index) =>
//                 <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
//                     {info.title}: {info.description}
//                 </Row>
//             )}
//         </Row>
//     </Container>
//     )
// }

export default Tender