import React from "react";
import data from "./data.json"; 
import "./Main.css"
import Main from "./Main";
import Header from './Header';
import Footer from './Footer';
import { Form } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      image_url: "",
      description: "",
      hornedBeastData: data 
    }
  }

  handleShowModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  updateHornedBeastData = (e) => {
    e.preventDefault();
    const horns = e.target.value;
    let updatedHorns;

    if (horns === "") {
      updatedHorns = data;
    }
    else {
      updatedHorns = data.filter(beast => beast.horns === Number(horns))
    }
    this.setState({
      hornedBeastData: updatedHorns
    })
  }

  render(){ 
    return(
      <>
        <Form>
          <Form.Group>
            <Form.Label>The Great Gallery of Horn Beasts</Form.Label>
            <Form.Select onChange={this.updateHornedBeastData}>
            <option value={""}>All Beasts</option>
              <option value={"1"}>1 Horn</option>
              <option value={"2"}>2 Horns</option>
              <option value={"3"}>3 Horns</option>
              <option value={"100"}>100 Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Header />
        <Main data={this.state.hornedBeastData} handleShowModal={this.handleShowModal}/>
        <Footer/>
        <SelectedBeast show={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}/>
      </>
    ) 
  }
}

export default App; 
