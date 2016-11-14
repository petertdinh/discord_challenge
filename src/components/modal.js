import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		return (
			<div className={`modal-box animated ${this.props.transition}`}>{this.props.children}</div>
		)
	}
}