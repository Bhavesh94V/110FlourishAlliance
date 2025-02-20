import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function CommentList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="consultancy-comments">
            <h4 className="comments-count">{comments.length} Comments</h4>
            {comments.map(({ id, name, comment, createdAt }) => (
                <div key={id} className="comment">
                    <h5>{name}</h5>
                    <p>{comment}</p>
                    <time>{createdAt?.toDate().toLocaleString()}</time>
                </div>
            ))}
        </div>
    );
}
