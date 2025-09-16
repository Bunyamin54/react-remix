
import Name from './Name'

 // dest daha asagida yolda havada kutuyu acmak dmeke oluyor
const Person = ({name,img,color="gri"}) => {

   // console.log(props)

  //  const{name,img,color } = props // destructuing ile   
  return (
    <div>
      
        {/* <Name name={props.name}/>
      
        <img src={props.img }alt="" />

        <p>Renk: {props.color}</p> */}

        <Name name={name}/>
      
        <img src={img }alt="" />

        <p>Renk: {color}</p> 


    </div>
  )
}

export default Person