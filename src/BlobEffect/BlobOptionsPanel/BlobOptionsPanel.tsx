import React from "react";
import { Offcanvas } from "react-bootstrap";

class BlobOptionsPanel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(a: any) {
        this.props.handleOnChange({
            startLinearGradientColor: a.target.id === "startLinearGradientColor" ? a.target.value : this.props.startLinearGradientColor,
            endLinearGradientColor: a.target.id === "endLinearGradientColor" ? a.target.value : this.props.endLinearGradientColor
        })
    }

    render() {
        return (
            <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <div className={"d-flex align-items-center"}>
                            <p className={"m-4"}>start color : </p>
                            <input id={"startLinearGradientColor"} type={"color"} value={this.props.startLinearGradientColor} onChange={this.handleOnChange}/>
                        </div>
                        <div className={"d-flex align-items-center"}>
                            <p className={"m-4"}>end color : </p>
                            <input id={"endLinearGradientColor"} type={"color"} value={this.props.endLinearGradientColor} onChange={this.handleOnChange} />
                        </div>
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        );
    }

}

export default BlobOptionsPanel;