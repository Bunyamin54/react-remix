import "./Buton.module.css"

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]


const Buton = ({ btn }) => {
  return (
   <div>
  <button className="btn-blue">{btn}</button>
   </div>
  )
}

export default Buton
