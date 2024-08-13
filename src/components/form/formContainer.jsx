import React from 'react';
import FormButton from './formButton';
import FormInput from './formInput';
import SearchInput from './searchInput';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            search: '',
            limit: 50,
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((previousState) => {
            const newValue = event.target.value;
            if (newValue.length <= 50) {
                return {
                    limit: 50 - newValue.length,
                    title: newValue,
                };
            } else {
                return {
                    limit: 0,
                    title: previousState.title,
                };
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            };
        });
        setTimeout(() => {
            this.props.searchNotes(this.state);
        }, 1);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmitEventHandler} className="form-container__form">
                    <h2>Tambah Catatan</h2>
                    <FormInput
                        limit={this.state.limit}
                        title={this.state.title}
                        body={this.state.body}
                        onTitleChangeEventHandler={this.onTitleChangeEventHandler}
                        onBodyChangeEventHandler={this.onBodyChangeEventHandler}
                    />
                    <FormButton />
                </form>
                <div className="form-container__search">
                    <h2>Cari Catatan</h2>
                    <SearchInput
                        search={this.state.search}
                        onSearchChangeEventHandler={this.onSearchChangeEventHandler}
                    />
                </div>
            </div>
        );
    }
}

export default FormContainer;
