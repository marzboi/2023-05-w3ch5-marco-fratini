/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>ISDI Pokedex</h1>
      <h2>Search, Read and Save your favorite pokemons</h2>
      <img src="./pokemon-logo.svg"  alt="The Pokemon logo" width="250" height="100">
    </header>
    `;
  }
}
