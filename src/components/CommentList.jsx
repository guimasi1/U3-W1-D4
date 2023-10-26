import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => (
          <SingleComment />
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
