import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
    bookId: this.props.bookId,
  };

  getSingleBook = () => {
    fetch(urlToUse + this.props.bookId, {
      headers: {
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("è andata a buon fine");
          console.log(this.props.bookId);

          return res.json();
        } else {
          throw new Error("non è andata a buon fine");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ comments: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleBook();
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <AddComment bookId={this.state.bookId} />
      </div>
    );
  }
}

export default CommentArea;