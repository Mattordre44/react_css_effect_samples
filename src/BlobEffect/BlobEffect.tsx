import GenericEffect from "../GenericEffect/GenericEffect";
import React from "react";
import ButtonPanel from "../GenericEffect/ButtonPanel";
import './BlobEffect.css';
import Blob from "./Blob/Blob";
import BlobOptionsPanel from "./BlobOptionsPanel/BlobOptionsPanel";

class BlobEffect extends GenericEffect {
    constructor(props: any) {
        super(props);
        this.state = {
            startLinearGradientColor: '#E96443',
            endLinearGradientColor: '#904e95'
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(changes: any) {
        this.setState({
            startLinearGradientColor: changes.startLinearGradientColor,
            endLinearGradientColor: changes.endLinearGradientColor
        });
    }

    render() {
        return (
            <div className={"blob-effect-container"}>
                <ButtonPanel
                    handleBack={this.handleBack}
                    handleShow={this.handleShow}
                />
                <section className={"blob-section"}>
                    <Blob
                        className={"blob"}
                        startLinearGradientColor={this.state.startLinearGradientColor}
                        endLinearGradientColor={this.state.endLinearGradientColor}
                    />
                    <Blob
                        className={" blob blob-light"}
                        startLinearGradientColor={this.state.startLinearGradientColor}
                        endLinearGradientColor={this.state.endLinearGradientColor}
                    />
                </section>
                <BlobOptionsPanel
                    show={this.state.showOptionsPanel}
                    handleClose={this.handleClose}
                    handleOnChange={this.handleOnChange}
                    startLinearGradientColor={this.state.startLinearGradientColor}
                    endLinearGradientColor={this.state.endLinearGradientColor}
                />
            </div>
        );
    }
}

export default BlobEffect
