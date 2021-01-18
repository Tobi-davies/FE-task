import React from "react";
import "./card.style.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addProfile } from "../../redux/profile/profile.actions";

const Card = ({ post, addProfile, history }) => {
  return (
    <div className="card">
      <p className="name">
        <span className="first"> Name :</span>
        <span className="second">
          {post.FirstName} {post.LastName}
        </span>
      </p>
      <p className="email">
        <span className="first">Email: </span>
        <span className="second">{post.Email}</span>
      </p>
      <p className="gender">
        <span className="first">Gender: </span>
        <span className="second">{post.Gender}</span>
      </p>
      <p className="payment">
        <span className="first">Payment Method:</span>
        <span className="second">{post.PaymentMethod}</span>
      </p>
      <p>
        <span className="first">CreditCard Type:</span>
        <span className="second">{post.CreditCardType}</span>
      </p>
      <button
        onClick={() => {
          addProfile(post);
          history.push("/singleprofile");
        }}
      >
        View Profile Details <i class="fas fa-chevron-right"></i>{" "}
        <i class="fas fa-chevron-right"></i>{" "}
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProfile: (profile) => dispatch(addProfile(profile)),
});

export default withRouter(connect(null, mapDispatchToProps)(Card));
