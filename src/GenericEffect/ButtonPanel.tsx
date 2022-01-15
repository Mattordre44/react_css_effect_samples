import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";
import './ButtonPanel.css';

export default function ButtonPanel(props: any) {
    return (
        <div className={"effect-button-container"}>
            <ButtonGroup>
                <Button className={"effect-button"} variant="primary" onClick={props.handleBack}>
                    <i className="bi bi-arrow-left-circle" style={{fontSize: "1.2em"}}/>
                </Button>
                <Button className={"effect-button"} variant="primary" onClick={props.handleShow}>
                    <i className="bi bi-gear" style={{fontSize: "1.2em"}}/>
                </Button>
            </ButtonGroup>
        </div>
    )
}