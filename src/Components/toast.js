import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";
import mock from "../mock/influencer.json";

class ToastContainer extends Component {
  state = {
    show: false
  };

  handleClick = id => {
    this.props.history.push(`/card/${id}`);
  };

  render() {
    const { show } = this.state;
    let created_at = new Date();
    const date =
      created_at.getFullYear() +
      "-" +
      (created_at.getMonth() + 1) +
      "-" +
      created_at.getDate();
    const time =
      created_at.getHours() +
      ":" +
      created_at.getMinutes() +
      ":" +
      created_at.getSeconds();
    created_at = `${date} ${time}`;

    return (
      <div>
        <Toast
          id="toast"
          onClose={() => this.setState({ show: false })}
          show={show}
        >
          <Toast.Header>
            <img
              src="https://findicons.com/files/icons/1676/primo/128/info_black.png"
              className="rounded mr-2"
              alt="influencerImg"
            />
            <strong className="mr-auto">Info</strong>
          </Toast.Header>
          {mock.map((m, i) => (
            <Toast.Body onClick={() => this.handleClick(m.influencerId)}>
              <p key={i}>{m.fullName}</p>
              <small>{created_at}</small>
            </Toast.Body>
          ))}
        </Toast>
        <div className="buttons">
          <a className="button1" onClick={() => this.setState({ show: true })}>
            Show Toast!
          </a>
        </div>
      </div>
    );
  }
}

export default ToastContainer;
