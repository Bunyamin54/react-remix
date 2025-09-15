import React from "react";

import "./Main.css";
import donerDolap from "./images/donerdolap.jpg"

export const Main = () => {
  const headerStyle = {
    color: "red",
    backgroundColor: "gray",
    fontSize: "2rem",
    fontWieht: "bold",
  };



  return (
    <main>
      {/* inline css key- value notasyon olraka camelCase */}
      <h2 style={{ color: "red", backgroundColor: "blue" }}>Hello Main</h2>

      <p className="parag">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolorem
        facilis sapiente quod deserunt at aperiam impedit perferendis ad rerum,
        veritatis veniam est aspernatur? Modi, porro maiores! Id veniam ab
        facilis dolor qui nostrum modi necessitatibus distinctio veritatis
        repellat! Quibusdam officiis aliquam deserunt quas iste repellat impedit
        dicta maxime similique, amet voluptatibus, illo porro quis asperiores
        facere tempora excepturi distinctio dolor! Vel animi sint non,
        consequatur quas dolorum in provident laudantium, nemo ipsam cumque id
        officia ut nostrum quos fugit esse facilis ad. Quia at ipsam odio aut ad
        ipsum eveniet eius officia ipsa. Mollitia a itaque alias consectetur
        officia?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        necessitatibus, saepe labore sint ipsam sed iure corrupti veritatis
        harum ducimus?
      </p>

      <h2 style={headerStyle}>Other Header Main </h2>


        <div >
          <img className="img" src="https://cdn.pixabay.com/photo/2025/09/05/18/31/cave-9817865_640.jpg" alt="boncuk" />
        </div>

         <div>
          <img  className="img" src="https://cdn.pixabay.com/photo/2024/07/11/23/36/candles-8889188_640.jpg" alt="mum" />

           <img id="img-id" src="https://cdn.pixabay.com/photo/2025/08/13/13/02/landscape-9772229_640.jpg" alt="kuzey isikliklari" />

           {/* local ortanmda bulunan bir resimi import ederek alabilirz dogrudan almayiz  */}

           <img id="img-id" src={donerDolap} alt="doner" />

            {/* pbulic dosyasina koydugumuzde bu sekidle coklu resimler icin public resimlerde assetler kullanilir  */}
           <img id="img-id" src="./img/nature.jpg" alt="nature" />
         </div>

           
    </main>
  );
};

export default Main;
