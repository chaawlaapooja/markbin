import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../api/bins';
import {Link} from 'react-router'

class BinsList extends Component{
	onBinRemove(bin) {
	    Meteor.call('bins.remove', bin);
	 }
	renderList() {
    return this.props.bins.map(bin => {
      let index = (this.props.bins.indexOf(bin))
      const url=`/bins/${bin._id}`
      
      if(index%2===0)
    	return (
        <li className="list-group-item list-group-item-info" key={bin._id}>
          <Link to={url}>Bin {bin._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Remove
            </button>
          </span>
        </li>
      );
      else
      return (
        <li className="list-group-item list-group-item-warning" key={bin._id}>
          <Link to={url}>Bin {bin._id}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }
	render(){
		return(
			<ul className="list-group">
        <br/>
				{this.renderList()}
			</ul>
			)
	}
}

export default createContainer(()=>{
	Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

	return { bins : Bins.find({}).fetch()}
}, BinsList)