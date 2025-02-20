import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CommentForm({ onCommentAdded }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !comment) return alert("Please fill in all fields!");

        try {
            await addDoc(collection(db, "comments"), {
                name,
                comment,
                createdAt: serverTimestamp(),
            });
            setName("");
            setComment("");
            onCommentAdded(); // Refresh comments
        } catch (error) {
            console.error("Error adding comment: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <h4>Post a Comment</h4>
            <input
                type="text"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Your Comment*"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Post Comment</button>
        </form>
    );
}
