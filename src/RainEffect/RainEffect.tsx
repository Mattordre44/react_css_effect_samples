import React from "react";
import './RainEffect.css';
import Drop from "./Drop/Drop";
import RainOptionsPanel from "./RainOptionsPanel/RainOptionsPanel"
import GenericEffect from "../GenericEffect/GenericEffect";
import ButtonPanel from "../GenericEffect/ButtonPanel";

class RainEffect extends GenericEffect {
    constructor(props: any) {
        super(props);
        this.state = {
            amount: 100,
        }
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
                <ButtonPanel
                    handleBack={this.handleBack}
                    handleShow={this.handleShow}
                />
                {drops}
                <RainOptionsPanel
                    amount={this.state.amount}
                    show={this.state.showOptionsPanel}
                    handleClose={this.handleClose}
                    handleOnChange={this.handleOnChange}
                />
            </div>
        );
    }
}

export default RainEffect