import React from "react";
import NoteItemContent from "./noteItemContent";
import NoteItemButton from "./noteItemButton";
import { showFormattedDate } from "../../utils/data";

function NoteItem({ id, onDelete, onMove, title, body, createdAt, archived }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={showFormattedDate(createdAt)} />
            <NoteItemButton id={id} archived={archived} onDelete={onDelete} onMove={onMove}/>
        </div>
    );
}

export default NoteItem;
