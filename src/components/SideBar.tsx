import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TypeBar = () => {
    const navigate = useNavigate();
    
    return (
    <Card style={{ width: '18rem' }} className="m-4">
        <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => navigate('/home')}>Home</ListGroup.Item>
            <ListGroup.Item action onClick={() => navigate('/task-list')}>Task list</ListGroup.Item>
        </ListGroup>
    </Card>
    )
};

export default TypeBar;
