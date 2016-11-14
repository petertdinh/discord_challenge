import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInput, createTab, removeTab, setActiveTab } from '../actions/index';
import Modal from './modal';
import Tab from './tab';
import _ from 'lodash';

class App extends Component {
	constructor() {
		super()
		this.state = {modalOpen: false, modalTransition: 'fadeIn'};
	}

	openModal = () => {
		this.setState({modalTransition: 'fadeIn', modalOpen: true});
	}

	closeModal = () => {
		this.setState({modalTransition: 'fadeOut'});
		//unmount the DOM after fadeOut
		setTimeout(() => {
			this.setState({modalOpen: false})
		}, 500);
	}

  render() {
  	const tabs = _.map(this.props.tabs, (tab, index) => {
  		const { name } = tab;
  		return <Tab
  							removeTab={this.props.removeTab.bind(this, name)}
  							setActiveTab={this.props.setActiveTab.bind(this, name)}
  							key={index}
  							name={name} />
  		});

    return (
    	<div className="App">
	      <div><button className="open" onClick={() => this.openModal()}>Open Modal</button>{`Number of tabs: ${tabs.length}`}</div>
	      {this.state.modalOpen ?
		      <Modal visibility={this.state.modalOpen} transition={this.state.modalTransition}>
		      	<div className="tab-controls">
			      	<input className="tab-input" placeholder="Tab Name" value={this.props.input} onChange={e => this.props.changeInput(e)}/>
			      	<button onClick={() => this.props.createTab(this.props.input)}>Create New Tab</button>
		      		<img onClick={() => this.closeModal()}src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png" height="100%" width="2%" />
		      	</div>
		      	<div className="bar-content">
			      	<div className="tab-bar">{tabs}</div>
			      	<textarea className="tab-content" value={this.props.activeTab} onChange={e => this.changeTabContent(e.target.value)} />
		      	</div>
		      </Modal> : null
	    	}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const { tabs, activeTab } = state.tabs;
	const { input } = state.input;
	return {
		tabs,
		activeTab,
		input
	};
}

export default connect(mapStateToProps, { changeInput, createTab, removeTab, setActiveTab })(App);