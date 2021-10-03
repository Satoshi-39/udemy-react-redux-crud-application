import React, {Component} from "react";
import { connect } from "react-redux"
import { increment, decrement } from "../actions"
// import PropTypes from "prop-types";

// class App extends Component {
//   render() {
//     const greeting = "Hi!Keiji";
//     const dom = <h1 className="foo">{greeting}</h1>;
//     return dom;
//   }
// }

// class App extends Component {
//      render(){
//        return (
//        <React.Fragment>
//          <label htmlFor="bar">bar</label>
//          <input type="text" onChange={() => {console.log("I am clicked.")}} />;
//        </React.Fragment>
//        )
//      }
//   }

// const App = () => {
//   return (
//   <div>
//     <Cat />
//     <Cat />
//     <Cat />
//     <Cat />
//   </div>
//   )
// }

// const Cat = () => {
//   return <div>Meow!</div>
// }

//デフォルトコンポーネント
// User.defaultProps = {
//   age:1
// }

//コンポーネント
// const App = () => {
//   // const profiles = [
//   //   {name:"Taro", age:10},
//   {name:"Hanako", age:5},
//   {name:"NoName", age:3}
// ]
//   return (
//     <div>
//       {
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index}/>
//         })
//       }
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>Hi!, I am {props.name}! and {props.age} years old! </div>
// }

// //propの方をString型に指定　
// User.propTypes = {
//   name: PropTypes.string,
//   //ageは必須→isRequired
//   age: PropTypes.number.isRequired
// }


//ステート
//const App = () => (<Counter></Counter>)
  
//class Counter extends Component {
  //コンストラクター/reduxではreducerが行うので不要!?
// constructor(props){
//   super(props)
//   console.log(this.state)
//   this.state = { count: 0 }
// }

//1プラスする処理/reduxでは別で行うから不要
//handlePlusButton = () => {
  //下記一行はやってはいけない 状態を直接いじってはいけない
  //this.state = {count: this.state.count + 1}
//   this.setState({count: this.state.count + 1})
// }

//1マイナスする処理/reduxでは別で行うから不要
// handleMinusButoon = () => {
//   this.setState({count: this.state.count -1})
// }

// render(){
//   //ステートの中にアクセス
//   //returnで返すjsxは親が一つでないといけない
//   return (
//     <React.Fragment>
//       <div>count: {this.state.count}</div>
//       <button onClick={this.handlePlusButton}>+1</button>
//       <button onClick={this.handleMinusButoon}>-1</button>
//     </React.Fragment>
//     )
//   }
// }

//reduxでのクラス
class App extends Component {
render(){
  const props = this.props
  //returnで返すjsxは親が一つでないといけない
  return (
    <React.Fragment>
      <div>value: { props.value }</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
//上記はこのようにも書ける
//const mapDispatchToProps = ({ increment, decrement　})

export default connect(mapStateToProps, mapDispatchToProps)(App);
