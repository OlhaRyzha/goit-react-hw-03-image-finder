import { Component } from 'react';

import {
  SearchbarHeader,
  SearchFormButtonInput,
  SearchFormButtonLabel,
  SearchFormButton,
  SearchForm,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: inputValue,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.name);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormButtonInput
            type="text"
            name="name"
            value={this.state.name}
            autocomplete="off"
            autoFocus
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
