export default user => {
  if (!user) {
    return user;
  }
  return {
    ...user.app_metadata,
    ...user.user_metadata,
    email: user.email,
    username: user.username,
    name: user.name,
    image: user.picture,
    id: user.user_id,
  };
};
