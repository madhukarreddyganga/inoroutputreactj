import React, { Component } from 'react';
import Parent from './components/parentToChild/parent';
import './App.css';
/*issue in code we need to check*/
class App extends Component {
  state={
    title:'place holder'

  }
  doWhatEver=(newTitle)=>{
    this.setState({
      title:newTitle
    });
  }
  
  render() {
    return (
      <div className="App">
      <br/>
       <Parent changeName={this.doWhatEver.bind(this,'how are u')} 
       changeNumbers={this.doWhatEver.bind(this,'How is u mom doing')}  title={this.state.title}/>
      </div>
    );
  }
}

export default App;
