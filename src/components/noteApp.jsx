import React from 'react';
import NoteList from './note/noteList';
import FormContainer from './form/formContainer';
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchNotes: [],
            renderSearch: false,
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        if (this.state.renderSearch) {
            const searchNotes = this.state.searchNotes.filter(
                (note) => note.id !== id
            );
            this.setState({ searchNotes });
        }
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onMoveHandler(id) {
        if (this.state.renderSearch) {
            const searchNotes = this.state.searchNotes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            );
            this.setState({ searchNotes });
        }
        const notes = this.state.notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                ],
            };
        });
    }

    onSearchNotesHandler({ search }) {
        if (search !== '') {
            const searchNotes = this.state.notes.filter((note) =>
                note.title.toLowerCase().includes(search.toLowerCase())
            );
            const renderSearch = true;
            this.setState({ searchNotes, renderSearch });
        } else {
            const renderSearch = false;
            this.setState({ renderSearch });
        }
    }

    render() {
        return (
            <div className="note-app">
                <h1>Note App</h1>
                <div className="form-container">
                    <FormContainer
                        addNote={this.onAddNoteHandler}
                        searchNotes={this.onSearchNotesHandler}
                    />
                </div>
                <div className="note-container">
                    <NoteList
                        notes={this.state.notes}
                        searchNotes={this.state.searchNotes}
                        renderSearch={this.state.renderSearch}
                        onDelete={this.onDeleteHandler}
                        onMove={this.onMoveHandler}
                    />
                </div>
            </div>
        );
    }
}

export default NoteApp;
