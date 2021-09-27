import React, { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value.toLowerCase() })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() === '') {
            toast.error("Введите что нибудь");
            return;
        }
        this.props.onSubmit(this.state.value);

        this.setState({ value: '' })
    };
    
    render() {
        return (      
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>    
        );
    };
};
