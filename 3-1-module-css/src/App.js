import Card from "./components/card/Card";
import data from "./data";

function App() {
  console.log(data);
  return (
    <>
      <h1>Languages</h1>
    
      {data.map() }
      <Card
        id={data.id}
        lang={data.language}
        img={data.img}
        btn={data.btnName}
      />
    </>
  );
}

export default App;
