import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/";


  const getTutorials = async () => {
    const data = await axios(BASE_URL);

    console.log(data.data);
    setTutorials(data.data)
  };

  console.log(tutorials)
 

  useEffect(() => {   // mount asamasinda api ye istek atiyoruz bu sekilde... 
     getTutorials();
  }, [])
  

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
