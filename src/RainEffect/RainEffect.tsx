import React from "react";
import './RainEffect.css';
import Drop from "./Drop/Drop";
import OptionsPanel from "./OptionsPanel/OptionsPanel"
import {Button} from "react-bootstrap";

class RainEffect extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            amount: 100,
            showOptionsPanel: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    generateSize(){
        return (Math.random() * 5) + 0.2;
    }

    generatePosX(){
        return Math.floor(Math.random() * window.innerWidth);
    }

    generateDelay(){
        return (Math.random() * -20) + "s";
    }

    generateDuration(){
        return (Math.random() * 5) + 1 + "s";
    }

    handleShow(){
        this.setState({showOptionsPanel: true});
    }

    handleClose(){
        this.setState({showOptionsPanel: false});
    }

    handleOnChange(a: any){
        this.setState({amount: Number(a.target.value)})
    }

    render() {
        const drops = [];

        for(let i = 0; i < this.state.amount; i++) {
            drops.push(
                <Drop
                    key={i}
                    size={this.generateSize()}
                    posX={this.generatePosX()}
                    delay={this.generateDelay()}
                    duration={this.generateDuration()}
                />
            );
        }

        return (
            <div className={"rain-effect-container"}>
                <div className={"rain-effect-button-container"}>
                    <Button className={"rain-effect-button"} variant="primary" onClick={this.handleShow}>options</Button>
                </div>
                {drops}
                <OptionsPanel amount={this.state.amount} show={this.state.showOptionsPanel} handleClose={this.handleClose} handleOnChange={this.handleOnChange}/>
            </div>
        );
    }
}

export default RainEffect