import React from "react";

function NoteItemButton({ id, onDelete, onMove, archived }) {
    return (
        <div className="note-item__button">
            <button className="note-item__button__move" onClick={() => onMove(id)}>{archived ? 'Keluarkan' : 'Arsipkan'}</button>
            <button className="note-item__button__delete" onClick={() => onDelete(id)}>Hapus</button>
        </div>
    );
}

export default NoteItemButton;
