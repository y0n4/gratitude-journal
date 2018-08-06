import React from 'react';

class Gratitude extends React.Component {
  constructor(props) { //react thing
    super(props); //react thing
    this.state = {
      name: '', //set as empty string
      gratitude: []
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.update = this.update.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value, //set name to user input form
    });
  }

  //putting values into gratitude array
  handleEvent (index, e) {
    var gratitudeCopy = this.state.gratitude.slice();
    gratitudeCopy[index] = e.target.value;

    this.setState({
      gratitude: gratitudeCopy
    });
  }

  clear() {
    this.setState({ //clears form
      name: '',
      gratitude: ['', '', ''] //ok?????
    });
  }

  //post request to index.jsx
  search() {
    this.props.onSearch(this.state); //onSearch is referring to the attribute in index.jsx
    this.clear();
  }

  //update
  update() {
    this.props.onUpdate(this.state);
    this.clear();
  }

  //note: make sure to .bind(this) one the local funcs in html so the the this key stays consistent throughout parent and child
  render() {
    return (
      <div>
        <h4>Hi! What are the 3 things that you're grateful for today?</h4>
        name <input name="name" value={this.state.name} onChange={this.onChange}/><br />
        1. <input name="gratitude" value={this.state.gratitude[0]} onChange={this.handleEvent.bind(this, 0)}/><br />
        2. <input name="gratitude" value={this.state.gratitude[1]} onChange={this.handleEvent.bind(this, 1)}/><br />
        3. <input name="gratitude" value={this.state.gratitude[2]} onChange={this.handleEvent.bind(this, 2)}/><br />
        <button onClick={this.search}>Submit</button>
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}

export default Gratitude;