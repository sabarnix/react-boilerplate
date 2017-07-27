import React from 'react';
import ListItem from './listItem';

class List extends React.Component {

 render() {
   return (
     <ul>
       {this.props.items.map((item) => <ListItem name={item.name} id={item.id} deleteItem={this.props.deleteItem} />)}
     </ul>
   );
 }
}

export default List;
