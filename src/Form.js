import React from 'react';

class Form extends React.Component{
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: '',
    };

    this.state = this.initialState
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState)
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;