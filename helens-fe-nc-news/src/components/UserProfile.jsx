import React from "react";

const UserProfile = (props) => {
  const { user } = props;

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
    </div>
  );
};

export default UserProfile;
