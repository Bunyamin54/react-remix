import "./App.css";

// function App() {

// const name =  <h1>Bunyamin</h1>
// const age= <h2> 24 </h2>
// const email = <h3> bunya@gmail.com </h3>

// const user =  <div>

//   {name}
//   {age}
//   {email}
// </div>

//   return (

//      <div className= "App">

//     <User name = "Bunyamin"  age={24}  email="bunya@gmail.com" />
//     <User name = "Perdo"  age={21}  email="perdo@gmail.com" />
//     <User name = "John"  age={30}  email="john@gmail.com" />

//      </div>
//   )
// }

//   const User = (props) => {
//     return (
//       <div>
//     <h1>{props.name}</h1>
//     <h2>{props.age}</h2>
//     <h3>{props.email}</h3>
//    </div>
//     )
//   }

//   function App () {
//     // return (
//     //  < div className = "App">
//     //   <Job salary = {5000}  position="developer"  company="Google" />
//     //   <Job salary = {4000}  position="tester"  company="Microsoft" />
//     //   <Job salary = {6000}  position="team lead"  company="Amazon" />
//     //  </div>
//     // )
//   }

//     // const Job =(props) => {
//     //   return (
//     //      <div>
//     //     <h1>{props.salary}</h1>
//     //     <h2>{props.position}</h2>
//     //     <h3>{props.company}</h3>
//     //      </div>

//     //   )

//     // }

// export default App

function App() {
  const age = 19;
  const isGreen = true;

  return <div className="name">{age >= 18 ? "Over age" : "Under age"}
     <h1 style={{color: isGreen ? "green" : "red"}}> This Has Color </h1>
  </div>;

  // if (age >= 18) {
  //   return <h1 className="name">Over age</h1>;
  // } else {
  //   return <div className="name">Under age</div>;
  // }

}

export default App;
