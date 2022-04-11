import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddNote = () => {
  let history = useHistory();
  const [note, setNote] = useState({
    subject: "",
    topic: "",
    time: "",  
    importance: "",
    description: ""
  });

  const { subject, topic, time, importance, description } = note;
  const onInputChange = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/notes", note);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Note</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Topic"
              name="topic"
              value={topic}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="time"
              name="time"
              value={time}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="importance"
              name="importance"
              value={importance}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
