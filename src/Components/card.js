import React, { Component } from "react";
import mock from "../mock/influencer.json";
import "@fortawesome/fontawesome-free/js/all.js";
import { rotateIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Card extends Component {
  state = {
    data: mock.filter(m => m.influencerId === this.props.match.params.id)
  };

  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    const styles = {
      rotateIn: {
        animation: "x 2s",
        animationName: Radium.keyframes(rotateIn, "rotateIn")
      }
    };

    return (
      <StyleRoot>
        <div className="cardWrapper">
          {this.state.data.map(d => {
            return (
              <div class="card" key={d.id} style={styles.rotateIn}>
                <img src={d.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className="top-content">
                    <h5 class="card-title">INFLUENCER</h5>
                    <p class="card-text">Full Name: {d.fullName}</p>
                    <p class="card-text">Phone: {d.phone}</p>
                  </div>
                  <div className="socialWrap">
                    <div className="social fb">
                      <div>
                        <i class="fab fa-facebook fa-3x" />
                      </div>
                      <div>
                        {" "}
                        <h5>Facebook</h5>
                        <span>{d.fbID}</span>
                      </div>
                    </div>
                  </div>
                  <div className="socialWrap">
                    <div className="social em">
                      <div>
                        <i class="fas fa-envelope fa-3x" />
                      </div>
                      <div>
                        {" "}
                        <h5>Email</h5>
                        <span>{d.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="socialWrap">
                    <div className="social ig">
                      <div>
                        <i class="fab fa-instagram fa-3x" />
                      </div>
                      <div>
                        {" "}
                        <h5>Instagram</h5>
                        <span>{d.igID}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </StyleRoot>
    );
  }
}

export default Card;
