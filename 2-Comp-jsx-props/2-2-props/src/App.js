import "./App.css";
import Cat from "./components/Cat";


function App() {
  return (
    <div>
      <Cat
        name="Cenitin"
        img="https://cdn.pixabay.com/photo/2023/06/22/15/17/cat-8081701_640.jpg"
        color="Beyaz"
      />
      <Cat
        name="Garfld"
        img="https://cdn.pixabay.com/photo/2017/07/22/15/21/cat-2528935_640.jpg"
        color="gray"
      />
      <Cat
        name="Felix"
        img="https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_640.jpg"
       
      />
    </div>
  );
}

export default App;
