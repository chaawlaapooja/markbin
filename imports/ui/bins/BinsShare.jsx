import React, {Component} from 'react';

class BinsViewer extends Component{
	onShareClick(e) {
	e.preventDefault()
    const email = this.refs.email.value;
    if(email!=='')
    Meteor.call('bins.share', this.props.bin, email, (err,res)=>{
    if(res)
    this.refs.email.value=''
    });
  }

  renderShareList() {
    return this.props.bin.sharedWith.map(email => {
      return <button
        key={email}
        className="btn btn-default" style={{marginLeft:5+'px',marginRight:5+'px'}} >
          {email}
        </button>
    });
  }
	render(){
		
		return(
			<footer className="bins-share">
      <span className="pull-left h">
			<form onSubmit={this.onShareClick.bind(this)}>
			<div className="input-group">
          <input ref="email" className="form-control" />
          <div className="input-group-btn">
            <input type="submit"
              className="btn btn-success"
              value="Share Bin"/>
          </div>
        </div>
        </form>
        </span>
        <span className="pull-right" >
        <span>
          Shared With:
        </span>
        <span className="btn-group" style={{marginLeft:20+'px',marginRight:20+'px'}}>
          {this.renderShareList()}
        </span>
        </span>
			</footer>
			)
	}
}

export default  BinsViewer