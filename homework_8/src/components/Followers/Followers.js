import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  followersRequest,
  getFollowersId,
  getFollowersIsFetching,
} from "../../ducks";

const Followers = (props) => {
  const { id, isFetching } = props;
  if (isFetching) return <div>It's fetching time, please wait</div>;
  return (
    <div className="followers">
      {id.map((item) => {
        return (
          <div key={item.id} className="sc-follower follower">
            <div className="follower__img">
              <img
                className="follower__img-pic"
                src={item.avatar_url}
                alt={item.login}
              />
            </div>
            <div className="follower__info">
              <Link to={`/users/${item.login}`}>
                <h3>{item.login}</h3>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: getFollowersIsFetching(state),
  id: getFollowersId(state),
});

const mapDispatchToProps = {
  followersRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Followers);
