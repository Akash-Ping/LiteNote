import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const result = await axios.get("http://localhost:3003/notes");
    setNote(result.data.reverse());
  };

  const deleteNote = async id => {
    await axios.delete(`http://localhost:3003/notes/${id}`);
    loadNotes();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>All Notes</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{note.subject}</td>
                <td>{note.topic}</td>
                <td>{note.description}</td>
                <td>
                  <Link className="btn btn-outline-dark mr-2" to={`/notes/${note.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/notes/edit/${note.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
