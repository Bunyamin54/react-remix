import React from "react";

export const Main = () => {

   const headerStyle = {

    color: "red",
    backgroundColor: "gray",
    fontSize: "2rem",
    fontWieht: "bold"



   }




  return (
    <main>

       {/* inline css key- value notasyon olraka camelCase */}
      <h2   style={{color: "red", backgroundColor: "blue" }}>Hello Main</h2>


      <p>
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

    </main>
  );
};

export default Main;
