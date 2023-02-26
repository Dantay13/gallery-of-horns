import React from "react";
import { Modal } from "react-bootstrap";

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal className="modal"
                show={this.props.show}
                onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beastIMG}
                        alt={this.props.beastDescription}
                        title={this.props.beastName}
                        height={300}
                        width={200}
                    />
                    <p>{this.props.description}</p>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast;