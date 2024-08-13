import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, searchNotes, renderSearch, onDelete, onMove }) {
    // If user search note, update variabel notes using data from variabel searchNotes
    if (renderSearch) {
        notes = searchNotes;
    }

    const lengthUnArchive = notes.filter((note) => note.archived === false).length;
    const lengthArchive = notes.filter((note) => note.archived === true).length;
    let templateUnArchive = null;
    let templateArchive = null;

    if (lengthUnArchive === 0) {
        templateUnArchive = <h4>Tidak ada catatan</h4>;
    } else if (lengthUnArchive !== 0) {
        templateUnArchive = notes
            .filter((note) => note.archived === false)
            .map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onMove={onMove}
                    {...note}
                />
            ));
    }

    if (lengthArchive === 0) {
        templateArchive = <h4>Tidak ada catatan </h4>;
    } else if (lengthArchive !== 0) {
        templateArchive = notes
            .filter((note) => note.archived === true)
            .map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onMove={onMove}
                    {...note}
                />
            ));
    }

    return (
        <div className="note-list">
            <div>
                <h2>Catatan Tidak Diarsipkan</h2>
                <div className="note-list__unarchive">{templateUnArchive}</div>
            </div>
            <div>
                <h2>Catatan Diarsipkan</h2>
                <div className="note-list__archive">{templateArchive}</div>
            </div>
        </div>
    );
}

export default NoteList;
