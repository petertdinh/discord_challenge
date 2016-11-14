import React, { Component } from 'react';

const Tab = (props) => {
	return <div className="tab">
					<div className="tab-name" onClick={() => props.setActiveTab()}>
						{props.name}
					</div>
					<img onClick={() => props.removeTab()} src="http://www.clipartbest.com/cliparts/aiq/bnG/aiqbnGzAT.png" height="100%" width="15%"/>
				</div>
}

export default Tab;