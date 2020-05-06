import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

/** Displays a form to create a new post
 * 
 * Props:
 *    addPost -> parent state setter function
 * 
 * State:
 *    form -> input data
 */

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function NewPostForm({ addPost }) {

  const history = useHistory();
  const [form, setForm] = useState(INITIAL_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();

    const newPost = {
      ...form,
      id: uuid()
    }

    addPost(newPost);
    history.push('/');
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <br />
        <input
          name="title"
          id="title"
          value={form.title}
          onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="description">Description</label>
        <br />
        <input
          name="description"
          id="description"
          value={form.description}
          onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="body">Body</label>
        <br />
        <textarea
          name="body"
          id="body"
          value={form.body}
          onChange={handleChange}>
        </textarea>
      </p>

      <button>Save</button>
      <Link to="/">Cancel</Link>
    </form>
  )
}

export default NewPostForm;