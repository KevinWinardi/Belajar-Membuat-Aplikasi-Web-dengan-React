import React from "react";

function NoteItemContent({ title, body, createdAt }) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__body">{body}</p>
            <p className="note-item__createdAt">{createdAt}</p>
        </div>
    );
}
export default NoteItemContent;
