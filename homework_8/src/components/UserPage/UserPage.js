import { useEffect } from "react";
import { connect } from "react-redux";
import { userRequest, getIsFetching, getData } from "../../ducks";

const UserPage = (props) => {
  const {
    userRequest,
    login,
    avatar_src,
    followerNumber,
    publicRepsNumber,
  } = props;

  useEffect(() => {
    userRequest();
  });
  return (
    <div className="user">
      {" "}
      This is user page
      <div className="user__img">
        <img className="user__img-pic" src={avatar_src} alt="user__img-pic" />
      </div>
      <div className="user__info">
        <h3>this is your name: {login}</h3>
        <p>You have {followerNumber} followers</p>
        <p>You have {publicRepsNumber} public repositories</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: getIsFetching(state),
  data: getData(state),
});

const mapDispatchToProps = { userRequest };

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
