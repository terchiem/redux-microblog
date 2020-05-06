import React, { useState } from 'react';

/** Displays a form to edit a post
 * 
 * Props:
 *    id -> post id
 *    postData -> post data to populate the form
 *    toggleEditMode -> PostPage state setter function to toggle edit form
 *    editPost -> App state setter to edit a post
 * 
 * State:
 *    form -> input data
 */


function EditPostForm({ id, postData, toggleEditMode, editPost }) {

  const [form, setForm] = useState(postData);

  function handleSubmit(evt) {
    evt.preventDefault();
    const editedPost = {id, ...form}
    editPost(editedPost);
    toggleEditMode();
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
      <button onClick={toggleEditMode}>Cancel</button>
    </form>
  )
}

export default EditPostForm;