import React from 'react';

class ListItem extends React.Component {

 deleteItem = () => {
   this.props.deleteItem(this.props.id);
 }

 render() {
   return (
     <li>
       {this.props.name}&nbsp;&nbsp;
       <span onClick={this.deleteItem}>X</span>
     </li>
   );
 }
}
export default ListItem;
