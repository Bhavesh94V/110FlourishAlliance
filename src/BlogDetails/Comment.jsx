import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import PagesImage from '../assets/imgs/Pages/PagesImage';

export default function Comment() {


  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const urlParts = window.location.pathname.split('/');
    const blogId = urlParts[urlParts.length - 1];

    const q = query(collection(db, 'comments'), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedComments = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(comment => comment.blogId === blogId);

      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !text) return alert('All fields are required');

    // Current blog ka ID extract karo
    const urlParts = window.location.pathname.split('/');
    const blogId = urlParts[urlParts.length - 1];

    await addDoc(collection(db, 'comments'), {
      blogId,
      name,
      email,
      text,
      date: new Date().toISOString()
    });

    setName('');
    setEmail('');
    setText('');
  };


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "comments", id));
  };


  return (
    <div>
      <section className="comments-section p-6 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-2xl mb-4 text-danger font-bold">Comments ({comments.length})</h3>
        {
          comments.map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-100 rounded-lg shadow-sm mt-4">

              <h2 className="font-bold text-lg">{comment.name} <span className="text-sm text-gray-600">({new Date(comment.date).toLocaleDateString()})</span></h2>
              <p className="text-gray-800 mt-1">{comment.text}</p>

            </div>
          ))
        }
      </section>
      <section className="comment-form mt-6 bg-white flex flex-col md:flex-row p-6 rounded-lg shadow-md">
        <div>

          <h4 className="text-2xl font-semibold mb-4 text-danger">Post a Comment</h4>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-[500px]">

            <input type="text" className="border p-3 w-full rounded-lg" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" className="border p-3 w-full rounded-lg" placeholder="Your Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea className="border p-3 w-full rounded-lg" placeholder="Your Comment*" rows="4" value={text} onChange={(e) => setText(e.target.value)} required></textarea>
            <button type="submit" className="bg-danger text-white px-6 py-3 rounded-lg w-full">Post Comment</button>

          </form>
        </div>

        <div className='max-w-[500px] object-contain mx-auto my-auto pt-4'>
          <img src={PagesImage.CommentBox} alt="" className='img-fluid w-full max-h-[350px]' />
        </div>
      </section>
    </div>
  )
}
