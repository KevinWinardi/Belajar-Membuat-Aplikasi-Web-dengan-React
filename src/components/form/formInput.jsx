import React from "react";

function FormInput({ limit, title, body, onTitleChangeEventHandler, onBodyChangeEventHandler }) {
    return (
        <div className="form__input">
            <div className="form__input__title">
                <label htmlFor="title">Masukkan judul catatan</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={onTitleChangeEventHandler}
                    required
                />
                <p id="limit">Sisa karakter : {limit}</p>
            </div>
            <div className="form__input__body">
                <label htmlFor="body">Masukkan isi catatan</label>
                <textarea
                    name="body"
                    id="body"
                    onChange={onBodyChangeEventHandler}
                    value={body}
                    rows={10}
                    required
                ></textarea>
            </div>
        </div>
    );
}

export default FormInput;
