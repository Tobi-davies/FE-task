import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./single-profile.styles.css";

const SingleProfile = ({ profile }) => {
  console.log(profile);

  if (profile === null) {
    return (
      <Link to="/">
        <div>GO TO HOMEPAGE</div>
      </Link>
    );
  } else {
    return (
      <div className="single-profile">
        <Link to="/">
          <p className="back">Back</p>
        </Link>

        <div className="singlecard">
          <p className="name">
            <span className="first"> Name :</span>{" "}
            <span className="second">
              {profile.FirstName} {profile.LastName}
            </span>
          </p>
          <p className="gender">
            <span className="first">Gender: </span>{" "}
            <span className="second">{profile.Gender}</span>
          </p>
          <p>
            <span className="first">UserName:</span>
            <span className="second">{profile.UserName}</span>
          </p>
          <p className="email">
            <span className="first">Email: </span>
            <span className="second">{profile.Email}</span>
          </p>
          <p>
            <span className="first">Phone Number:</span>
            <span className="second">{profile.PhoneNumber}</span>
          </p>
          <p className="payment">
            <span className="first">Payment Method:</span>
            <span className="second">{profile.PaymentMethod}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardNumber:</span>
            <span className="second">{profile.CreditCardNumber}</span>
          </p>
          <p>
            <span className="first">Domain Name:</span>
            <span className="second">{profile.DomainName}</span>
          </p>
          <p>
            <span className="first">URL:</span>
            <span className="second">{profile.URL}</span>
          </p>
          <p>
            <span className="first">Last Login:</span>
            <span className="second">{profile.LastLogin}</span>
          </p>
          <p>
            <span className="first">MacAddress:</span>
            <span className="second">{profile.MacAddress}</span>
          </p>
          {/* <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
         
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p>
          <p>
            <span className="first">CreditCardType:</span>
            <span className="second">{profile.CreditCardType}</span>
          </p> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  profile: state.profile.profileUpdate,
});

export default connect(mapStateToProps)(SingleProfile);

// export default SingleProfile;
