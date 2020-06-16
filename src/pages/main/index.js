import React, { Component } from 'react';
import './style.css';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newBox: ""
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  render() {
    return (
      <div id='main-container'>
        <form onSubmit={this.handleSubmit}>
          <img src={Logo} alt='logo' />
          <input
            value={this.state.newBox}
            placeholder="Criar um Box"
            onChange={e => { this.setState({ newBox: e.target.value }) }}
          />
          <button
            type='submit'>Criar</button>
        </form>
      </div>
    )
  }
}
