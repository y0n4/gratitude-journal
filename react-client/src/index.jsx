//react essentials to use react
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; //use jquery
import List from './components/List.jsx'; //react model
import Gratitude from './components/Gratitude.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [] //gratitude
    }
  }

  //immediate initializer when page loads
  componentDidMount() {
    $.ajax({
      url: '/items',
      method: 'GET',
      //fill the rest here as get request?
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  //post request from Gratitude.jsx
  search (info) {
    console.log(`${JSON.stringify(info)} is sent as post`);

    $.ajax({
      url: '/items',
      method: 'POST',
      data: info,
      success: function(data) {
        console.log('data went to server!');
      },
      error: function(error) {
        console.log('failed to send', error);
      }
    });
  }

  //put request from Gratitude.jsx
  update (info) {
    console.log(`${JSON.stringify(info)} is sent as put`);

    $.ajax({
      url: '/items',
      method: 'PUT',
      data: info,
      success: function(data) {
        console.log('data went to server!');
      },
      error: function(error) {
        console.log('failed to send', error);
      }
    });
  }

  render () {
    return (<div>
      <h1>Gratitude Journal</h1>
      <Gratitude onSearch={this.search.bind(this)} onUpdate={this.update.bind(this)}/>
      <List items={this.state.items}/>
    </div>)
  }
}

//class App will get rendered into #app on index.html
ReactDOM.render(<App />, document.getElementById('app'));