import React from 'react';

const PizzaFilter = (props) =>  {
  return(
    <input
    className="filter-input"
    type="text"
    placeholder="Search"
    onChange={e => props.onInputChange(e.target.value)} />
  );
}

export default PizzaFilter;

// import React from 'react';
//  const PizzaList=(props)=>{
// 	triggerSortHandler(e){
//         e.preventDefault();
//         props.sortHandler(props.pizza)
//     }
//     pizzaListItems(props){
//       return props.pizzas.map(pizza =>(<li> {pizza} < /li >)
//     }
//     pizzaListGroup(listItem){
//         return ( <ul> { listItem(props) } </ul> )
// 	}
//     return (<div>{pizzaListGroup(this.pizzaListItems())}</div>)
// }

// export default PizzaList;
