import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* abdsolute path kadikoydeki rihtima git demek bu */}
        {/* <Link to="/instructor/1">Instructor-1</Link>  */}

        {/* relative path / kullnamadigimizda  */}
        <Link to="1">Instructor-1</Link>
        <Link to="2">Instructor-2</Link>
        <Link to="3">Instructor-3</Link>
      </div>
    </div>
  );
};

export default Instructors;
