import React from "react";

class GenericEffect extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showOptionsPanel: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow(){
        this.setState({showOptionsPanel: true});
    }

    handleClose(){
        this.setState({showOptionsPanel: false});
    }

    handleBack(){
        window.location.assign("/")
    }
}

export default GenericEffect;
