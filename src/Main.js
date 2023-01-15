import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                                key={hornedBeast._id} />
                            )}
                        </Row>
                    </Container>
                </main>
            </>);
    }
}

export default Main;


// import HornedBeast from "./HornedBeast";
// import data from "./data.json"

// class Main extends React.Component{
//     render(){
//         return(
//             <main>
//                 <HornedBeast title={'cow'} image= {'Cow-366742-PSD-file-with-small-and-medium-free-transparent-PNG-images.png'} alt= {'cow image'} titl= {'cow image'} description={'This is a image of a 2 horned animal'}/>
//                 <HornedBeast title={'rhino'} image= {'PNG-images-Rhino-27png.png'}  alt= {'rhino image'} titl= {'rhino image'} description={'This is a image of a 1 horned animal'}/>
//             </main>
//         )
//     }
// }

// export default Main;

