import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./App.css" 

class Main extends React.Component {
    render() {
        return (
            <>
                <main>
                    <Container>
                        <Row xs={1} sm={2} md={3}>
                            {this.props.data.map((hornedBeast, idx) => <HornedBeast
                                id={hornedBeast._id}
                                image_url={hornedBeast.image_url}
                                title={hornedBeast.title}
                                description={hornedBeast.description}
                                keyword={hornedBeast.keyword}
                                horns={hornedBeast.horns}
                                key={hornedBeast._id} 
                                handleShowModal={this.props.handleShowModal} />
                            )}
                        </Row>
                    </Container>
                </main>
            </>);
    }
}

export default Main;
