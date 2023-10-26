import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

class SingleComment extends Component {
  deleteComment = () => {};
  render() {
    return (
      <ListGroup.Item key={this.props.comment._id}>
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center ">
            {this.props.comment.comment}
          </div>
          <div>
            <Button className="btn-sm">Delete</Button>
          </div>
        </div>
      </ListGroup.Item>
    );
    // return <ListGroup.Item>this.props.comment</ListGroup.Item>;
  }
}

export default SingleComment;
