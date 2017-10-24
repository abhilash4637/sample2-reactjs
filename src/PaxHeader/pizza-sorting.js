import React, {Component} from 'react';

class PizzaSorting extends Component {
  constructor(props){
    super(props);
  }
  sortingArr(items){
    const newItems = items.sort();
    this.props.sorting(newItems);
  }
  reverseArr(items){
    const newItems = items.sort().reverse();
    this.props.sorting(newItems);
  }
  render(){
    return (<span>
      <button className="pizza-btn pizza-btn--sort" onClick={e => this.sortingArr(this.props.items)}>
        Sort List
        </button>
        <button className="pizza-btn pizza-btn--reverse" onClick={e => this.reverseArr(this.props.items)}>
          Reverse List
          </button>
      </span>
    );
  }
}

export default PizzaSorting;
