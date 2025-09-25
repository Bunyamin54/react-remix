import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* absolute path kadikoydeki rihtima git demek bu */}
        {/* <Link to="/instructors/1">Instructor-1</Link>   */}

        {/* relative path / kullnamadigimizda  */}
        <Link to="1" state={{name:"Felix"}}>Instructor-1</Link>
        <Link to="2" state={{name:"Bunyamin"}}>Instructor-2</Link>
        <Link to="3" state={{name:"Anthony"}}>Instructor-3</Link>
      </div>
    </div>
  );
};

export default Instructors;
