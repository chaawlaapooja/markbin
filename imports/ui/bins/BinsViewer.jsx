import React, {Component} from 'react';
import {markdown} from 'markdown';

class BinsViewer extends Component{
	
	render(){
		const rawHTML = markdown.toHTML(this.props.bin.content)
		return(
			<div className="col-xs-4">
			<h3 style={{textDecoration:"underline"}}>Output</h3>
			<div dangerouslySetInnerHTML={{__html:rawHTML}}/>
			</div>
			)
	}
}

export default  BinsViewer