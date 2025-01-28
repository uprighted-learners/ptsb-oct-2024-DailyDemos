function LoginExample() {
  const isLoggedIn = false;

  return (
    <>
      <div>
        {isLoggedIn ? (
          <p>I'm Logged In</p>
        ) : (
          <p>Please login, you have failed to identify yourself.</p>
        )}
      </div>
    </>
  );
}

export default LoginExample;
