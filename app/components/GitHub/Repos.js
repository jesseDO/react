var React = require('react');

var Repos = React.createClass({
	render: function(){
		return (
			<div>
				<h3>Repo</h3>
				Username: {this.props.username} <br />
				Repos: {this.props.repos} <br />
			</div>
		)
	}
});

module.exports = Repos;