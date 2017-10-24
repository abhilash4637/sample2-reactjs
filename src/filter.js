




// import React from 'react'
// import fetch from 'isomorphic-fetch'
// import PizzaList from 'PaxHeader/filter'

// export default class PizzaListContainer extends React.Component {
//   constructor(props){
//     super(props)
//       this.state ={
//         pizzas: [],
//         sortPizza:this.sortHandler(this.state.pizzas)
//        }
//   }
//   getPizzas(){
//     return fetch('../pizza.json')
//     .then((response)=> {
//         response=response.json();
//         console.log(response.pizzas)
//         return response.pizzas;
//       }
//   }

//   componentDidMount(){
//     if(this.props.pizzas.length==0){
//         this.getPizzas()
//           .then(response){
//             this.setState({
//               pizzas:response
//             })
//         }
//     }
//   }

//   sortHandler(pizzas){
//     const sortedPizzas = pizzas.sort((a,b)=> b.localCompare(a))
//     this.setState({
//       pizzas:sortedPizzas
//     })
//     //return sortedPizzas;
//   }
//   /*
//    onChangeHandler(evt){
//     const pizzas=this.props.pizzas.filter(pizza=> pizza.indexof(evt.target.value)> -1);
//     this.sortHandler(pizzas)
//   }
//   */
//   render(){
//     return (
//         < PizzaList  ...this.state />
//       )
//   }
// }
