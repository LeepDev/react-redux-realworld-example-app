import React from "react";

import RefiTest1 from "./refiTestStep1";
import RefiTest2 from "./refiTestStep2";

class RefiForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
        currentStep: 1,
        lastStep: 7,
        //set all formFields here
    };

    this.handleChange = this.handleChange.bind(this)
}

next() {
  const { currentStep } = this.state;
  this.setState({
    currentStep: currentStep + 1
  })
}
  
prev() {
  const { currentStep } = this.state;
  this.setState({
    currentStep: currentStep - 1
  })
}

handleChange(event) {
  const {name, value} = event.target
  this.setState({
    [name]: value
  })    
}

// Trigger an alert on form submission
handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your information was submitted!`)
  }

  render() {
    const {currentStep} = this.state;

    switch(currentStep) {
      case 1:
        return (
          <RefiTest1 handleChange={this.handleChange} next={this.next} submit={this.handleSubmit} />
        )
      case 2:
        return (
          <RefiTest2 handleChange={this.handleChange} prev={this.prev} submit={this.handleSubmit} />
        )
    }
  }
}

export default RefiForm;
