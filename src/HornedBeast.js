import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./HornedBeast.css";


class HornedBeast extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          clickFavorite: false,
          totalFavorites: 0
        }
      };

    handleFavorite = () => {
        this.setState({
            clickFavorite: this.state.clickFavorite ? false : true,
            totalFavorites: this.state.totalFavorites + 1
        })
    };

    fillModal = () => {
        this.props.handleShowModal(this.props.title, this.props.image_url, this.props.description);
    }
    
    render(){
        return(
            <Col className="hornedBeast">
                <Card style={{width: '18rem'}}>
                    <Card.Title as="h2" >{this.props.title}</Card.Title>
                    <Card.Img src={this.props.image_url} 
                        title={this.props.title}
                        alt={this.props.keyword}
                        height={300} 
                        onClick={this.handleFavorite}/>
                    <Card.Text>{this.props.description}</Card.Text>
                    {this.state.clickFavorite ? <Card.Text>Favorited: ❤️ ️</Card.Text> : <Card.Text>Favorited: 🖤 </Card.Text>}
                </Card>
            </Col>
        )
    }
}

export default HornedBeast;