import React from 'react';

class AddDev extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  onNameChange = ({target}) => {
    this.setState({name: target.value});
  }

  addDev = () => {
    const {name} = this.state;
    this.setState({name: ''});
    this.props.addDev(name);
  }

  render() {
    const {name} = this.state;
    return(
      <div className="add-dev">
        <input type="text" onChange={this.onNameChange} value={name}/>
        <button onClick={this.addDev}>Add</button>
      </div>
    )
  };
}

export default AddDev;
