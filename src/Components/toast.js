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
    return (
      <div>
        <Toast
          id="toast"
          onClose={() => this.setState({ show: false })}
          show={show}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Info</strong>
          </Toast.Header>
          <Toast.Body>
            {mock.map((m, i) => (
              <p key={i} onClick={() => this.handleClick(m.influencerId)}>
                {m.fullName}
              </p>
            ))}
          </Toast.Body>
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
