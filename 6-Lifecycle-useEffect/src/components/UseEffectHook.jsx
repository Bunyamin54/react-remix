// import { useState, useEffect } from "react"

// //?===============================================
// //?                USEEFFECT HOOK
// //?===============================================
// //! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
// //! (side effect) gerceklestirmek icin kullanilir.
// //! componentDidMount,componentDidUpdate,ve componentWillUnmount
// //! metotlarinin bir birlesimi gibi dusunulebilir.

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //*      Kodlar
// //! }, []);

// //! useEffect(() => {
// //*   */ ComponentDidMount + componentDidUpdate code */
// //! }, [state1, state2]);

// //! useEffect(() => {
// //?   /* ComponentDidMount code */
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [state1, state2]); //? Dependency Array

// //   useEffect(() => {
// //     //? componentDidMount (Dependency Array bos ise)
// //     //? componentDidMount + componentDidUpdate (Dependency array bos degilse)
// //     //? Dependecny array'Deki state her degistiginde veya ilk render sonrasi bu kod blogu tekrardan calistirilir.

// //     return () => {
// //       //? Cleanup function (componentWillUnmount)
// //     }
// //   }, [count]) //? Dependency Array

// const UseEffectHook = () => {
//   const [count, setCount] = useState(0)

//   //!   ComponentDidMount
//   //   useEffect(() => {
//   //     //! fetch, async-await ,localStorage, setTimeout, setInterval();
//   //     console.log("componentDidMount")
//   //     setTimeout(() => {
//   //       alert("Data fetched")
//   //     }, 3000)
//   //   }, []) //? Dependecny array bos

//   //!   ComponentDidUpdate
//   //   useEffect(() => {
//   //     console.log("componentDidMount + componentDidUpdate")
//   //     setTimeout(() => {
//   //       alert("Data fetched")
//   //     }, 3000)
//   //   }, [count]) //? count state'i her degistiginde yukaridaki mount+update kismi calisitirilir.

//   //! ComponentWillUnmount
//   const fetchData = () => {
//     console.log("Data Fetch started")
//   }
//   useEffect(() => {
//     const timer = setInterval(fetchData, 1000)

//     return () => {
//       clearInterval(timer)
//       console.log("componentWillUnmount")
//     }
//   }, [])

//   const handleInc = () => {
//     setCount(count + 1)
//   }
//   console.log("render")
//   return (
//     <div className="container text-center">
//       <h1 className="text-danger">USEEFFECT</h1>
//       <h3>COUNT={count}</h3>
//       <button className="btn btn-info" onClick={handleInc}>
//         INC
//       </button>
//     </div>
//   )
// }

// export default UseEffectHook


// import React, { useEffect } from 'react'

// const UseEffectHook = () => {
 
//   useEffect(() => {
//      // componentDidMount (Dependency Array bos ise 1 kez calisir)
//      // bos degil ise componentDidMount + componentDidUpdate (Dependecy array bos degilse , state varsa. her state degisiminde)
//      // Dependecy arraydeki state her degistiginde  veya ilk render sonrasis  bu kod blogu tekrardan calisisir. 
  
//     return () => {
//       // cleanup function  ( componentWillUnmount)
//     }
//   }, [third])  // Dependency Array
  


//   return (
//     <div>UseEffectHook</div>
//   )
// }

// export default UseEffectHook


import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

  const [count, setCount] = useState(0)

  // 1-  didMount

// useEffect(() => {

//   // fetch ,async-await , localstorage, setTimeout
// console.log("componentDidMount")
//   setTimeout(() => {
//     alert("Data fetched")
//   }, 3000)


// }, []) // Dependecy array bos 


 // 2- didUpdate  - state kullandigimiz icin --- 


// useEffect(() => {

//   // fetch ,async-await , localstorage, setTimeout
// console.log("componentDidMount + componentDidUpdate")
//   setTimeout(() => {
//     alert("Data fetched")
//   }, 3000)


// }, [count]) // count stati her degistigi yukardaki mount+ updated calisir , ama dikkat etmek lazm sonsuz donguye girebilir, 


  // 3- unMount   return kismi willUnmount kismini kullanacaigmiz kisim oluyor

const fetchData =() => {

  console.log("Data Fetch Start")
}

useEffect(() => {

  const timer = setInterval(fetchData, 2000)

  return () => {
    clearInterval(timer)
    console.log("componentWillUnmount")
   
  }
}, [])




  const handleInc = () => {

    setCount(count +1)
  }


  return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={handleInc}>
          INC
        </button>
      </div>
    )
}

export default UseEffectHook