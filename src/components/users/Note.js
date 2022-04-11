import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Note = () => {
  const [note, setNote] = useState({
    subject: "",
    topic: "",
    time: "",  
    importance: "",
    description: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadNote();
  }, []);
  const loadNote = async () => {
    const res = await axios.get(`http://localhost:3003/notes/${id}`);
    setNote(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Note Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Subject: {note.subject}</li>
        <li className="list-group-item">Topic: {note.topic}</li>
        <li className="list-group-item">date: {note.time}</li>
        <li className="list-group-item">importance: {note.importance}</li>
        <li className="list-group-item">Description: {note.description}</li>
      </ul>
    </div>
  );
};

export default Note;
