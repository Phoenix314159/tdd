import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveComment} from '../actions';

class CommentBox extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            comment: ''
        }
    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comment-box">
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange}/>
                <div>
                    <button action="submit">Submit Comment</button>
                </div>
            </form>
        )
    }
}
export default connect(null, {saveComment})(CommentBox)
