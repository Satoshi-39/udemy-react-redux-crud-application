import React from "react";
import PropTypes from "prop-types";

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

const App = () => {
  const profiles = [
    {name:"Taro", age:10},
    {name:"Hanako", age:5},
    {name:"NoName", age:3}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!, I am {props.name}! and {props.age} years old! </div>
}

//propの方をString型に指定　
User.propTypes = {
  name: PropTypes.string,
  //ageは必須→isRequired
  age: PropTypes.number.isRequired
}

export default App;
