import { useState } from "react";
import Button from "react-bootstrap/Button";

function FeedBack() {
  <h1>feedback Form</h1>;
  const [user, setUser] = useState({
    username: "",
    date: "",
    feedback: "",
    message: "",
    category: "",
    gender: "",
  });
  const [finalData, setFinalData] = useState([]);
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setUser({ ...user, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    console.log(user);

    setFinalData([...finalData, newUser]);
    setUser({
      username: "",
      date: "",
      feedback: "",
      message: "",
      category: "",
      gender: "",
    });
  };
  return (
    <>
      <h1>feedback Form</h1>
      <div className="p-3 border border-primary mx-5 mt-3 px-5">
        <form>
          <div className="mb-2 px-5">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              value={user.username}
              onChange={inputHandler}
              name="username"
              id="username"
              className="form-control"
            />
          </div>
          <div className="mb-3 px-5">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="date"
              value={user.date}
              onChange={inputHandler}
              name="date"
              id="date"
              className="form-control"
            />
          </div>
          <div className="mb-3 px-5">
            <label htmlFor="feedback" className="form-label">
              feedback title:
            </label>
            <input
              type="text"
              value={user.feedback}
              className="form-control"
              onChange={inputHandler}
              name="feedback"
              id="feedback"
            />
          </div>
          <div className="mb-3 px-5">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <input
              type="textfield"
              className="form-control"
              value={user.message}
              onChange={inputHandler}
              name="message"
              id="message"
            />
          </div>

          <div className="mb-3 px-5">
            <label htmlFor="gen" style={{ padding: "6px" }}>
              Gen
            </label>
            <input
              type="checkbox"
              classNameName="category"
              value={user.category}
              onClick={inputHandler}
              name="gen"
              id="gen"
            />
            <label htmlFor="obc" style={{ padding: "6px" }}>
              OBC
            </label>
            <input
              type="checkbox"
              classNameName="category"
              value={user.category}
              onClick={inputHandler}
              name="obc"
              id="obc"
            />
            <label htmlFor="sc/st" style={{ padding: "6px" }}>
              SC/ST
            </label>
            <input
              type="checkbox"
              classNameName="category"
              value={user.category}
              onClick={inputHandler}
              name="sc/st"
              id="sc/st"
            />
          </div>

          <div className="mb-3 px-5">
            <h5>Gender:</h5>
            <label htmlFor="male" style={{ padding: "6px" }}>
              Male
            </label>
            <input
              type="radio"
              classNameName="gender"
              value={user.gender}
              onClick={inputHandler}
              name="gender"
              id="male"
            />
            <label htmlFor="female" style={{ padding: "6px" }}>
              Female
            </label>
            <input
              type="radio"
              classNameName="gender"
              value={user.gender}
              onClick={inputHandler}
              name="gender"
              id="female"
            />
            <label htmlFor="other" style={{ padding: "6px" }}>
              Other
            </label>
            <input
              type="radio"
              classNameName="gender"
              value={user.gender}
              onClick={inputHandler}
              name="gender"
              id="other"
            />
          </div>
          <Button
            onClick={submitForm}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>

      <div>
        <h3>Result😄</h3>
        {finalData.map((currElem, id) => {
          return (
            <div key={id}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Date</th>
                    <th scope="col">Feedback</th>
                    <th scope="col">Message</th>
                    <th scope="col">Category</th>
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{currElem.username}</td>
                    <td>{currElem.date}</td>
                    <td>{currElem.feedback}</td>
                    <td>{currElem.message}</td>
                    <td>{currElem.category}</td>
                    <td>{currElem.gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FeedBack;
