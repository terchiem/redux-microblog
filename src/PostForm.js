import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostAPI, editPostAPI } from './actions';

/** Displays a form to create a new post
 * 
 * Props:
 *    id -> post id (if editing post)
 *    formData -> form data to populate the form (if editing post)
 *    toggleEditMode -> PostPage state setter function to toggle edit form
 * 
 * State:
 *    form -> input data
 * 
 * Dispatches:
 *    editPost, addPost
 */

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function PostForm({ id, formData = INITIAL_STATE, toggleEditMode }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(formData);

  function handleSubmit(evt) {
    evt.preventDefault();

    // if we are editing, we have an existing id
    if (id) {
      dispatch(editPostAPI(form));
      toggleEditMode();
    } else {
      dispatch(addPostAPI(form));
      history.push('/'); // take user away from page that was just deleted
    }
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
      {id
        ? <button onClick={toggleEditMode}>Cancel</button>
        : <Link to="/">Cancel</Link>
      }
    </form>
  )
}

export default PostForm;