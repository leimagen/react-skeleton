var React = require('react');
var ListGroup = require('./ListGroup.jsx');

var ListManager = React.createClass({

    getInitialState: function(){
        return {items:[], newItemText:""};
    },

    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(e){
        e.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },

    checkItems: function(){
        if(items === []){
            <h6>This list is currently empty. Add some items.</h6>
        }else{
            <ListGroup items={items} />
        };

        console.log("items: " + items);
    },

    render: function (){

        var divStyle = {
            marginTop: 20,
            padding: 20
        }

        return (
            <div className="col-sm-12 panel panel-default" style={divStyle}>
                <span className="badge pull-right">{this.state.items.length}</span>
                <h1><strong>{this.props.title}</strong></h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Write your item here." onChange={this.onChange} value={this.state.newItemText} /><br></br>
                        <button type="submit" className="btn btn-primary">Add Item</button>
                    </div>
                </form>
                <hr></hr>
                <ListGroup items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;
