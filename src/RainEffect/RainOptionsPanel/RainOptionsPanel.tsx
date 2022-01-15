import React from "react";
import { Offcanvas, Form } from "react-bootstrap";

class RainOptionsPanel extends React.Component<any, any> {

    render() {
        return (
            <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <Form.Label>Nombre d'éléments : {this.props.amount}</Form.Label>
                        <Form.Range min={0} max={500} value={this.props.amount} onChange={this.props.handleOnChange}/>
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        );
    }

}

export default RainOptionsPanel;