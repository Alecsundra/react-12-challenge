import React, { Component } from 'react';

class TabSelector extends Component {

  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.changeT}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.changeT}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.changeT}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
