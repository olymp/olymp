// extract and return the Bearer Token from the Lambda event parameters
export default tokenString => {
  if (!tokenString) {
    throw new Error("Expected 'event.authorizationToken' parameter to be set");
  }

  const match = tokenString.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new Error(
      `Invalid Authorization token - '${tokenString}' does not match 'Bearer .*'`
    );
  }
  return match[1];
};
