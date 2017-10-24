

import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PizzaFilter from './src/PaxHeader/filter';
import PizzaSorting from './src/PaxHeader/pizza-sorting';
import PizzaList from './src/PaxHeader/pizza-list';

class Pizza extends Component {
  constructor(props){
      super(props);
      this.state = {
          isLoading: true,
          pizza: [],
          newPizza: []
      };
  }
  componentDidMount(){
    fetch('./pizza.json')
      .then((response) => {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
      })
      .then((data) => {
        setTimeout(()=>{
          this.setState({
            pizza: data.pizzas,
            newPizza: data.pizzas,
            isLoading: false
          });
        },1000);
      });
  }

  filterList(value){
      const updatedList = this.state.pizza;

      let newList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          value.toLowerCase()) == 0;
      });
      this.setState({newPizza: newList});
    }

  render(){
    const loading = this.state.isLoading;
    if(loading){
      return <h1 className="loader">Loading...</h1>;
    }
    return(
          <div>
          <PizzaFilter onInputChange={(list) => this.filterList(list)} />
          <PizzaSorting items={this.state.newPizza} sorting={items => this.setState({newPizza: items})}/>
          <PizzaList pizza={this.state.newPizza} />
          </div>
      );
  }
}

ReactDOM.render(<Pizza />,document.querySelector('.root'));
