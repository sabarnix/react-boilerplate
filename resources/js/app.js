import React from 'react';
import List from './list';
import Search from './search';
import Header from './header';
import AddDev from './addDev';
import '../css/style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      devs: [
        {name: 'John Doe', id: 1},
        {name: 'Jane Roe', id: 2}
      ],
      search: ''
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  }

  addDev = (name) => {
    const { devs } = this.state;
    if(!name) return;

    const maxId  = devs.reduce((acc, curr) => acc > curr.id ? acc : curr.id, 0);

    this.setState( { devs: [...devs, {name, id: (maxId + 1)} ] } );
  }

  deleteDev = (id) => {
    const { devs } = this.state;
    this.setState({devs: devs.filter((dev) => dev.id !== id)});
  }

  render() {
    const { devs, search } = this.state;
    return (
      <div>
        <Header />
        <Search onChange={this.updateSearch} value={this.state.search} />
        <List items={devs.filter((dev) => !search || dev.name.toLowerCase().indexOf(search.toLowerCase()) > -1)} deleteItem={this.deleteDev} />
        <AddDev addDev={this.addDev} />
      </div>
    );
  }
}

export default App;
