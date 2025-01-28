// function
// define props if needed in parenthesis
function Header({ text, propertytwo }) {
  // add JSX to your function
  return (
    // add a fragment as a wrapper
    <>
      <nav>
        {/* Add some extra links here */}
        <a href="http://google.com">Google</a>

        {/* prop example */}
        {text}
        {propertytwo}

        {/* Add in a prop that is an array of link/title */}
        {/* map over them to display all of the links in the nav */}
        {/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
      </nav>
    </>
  );
}

// export the function component
export default Header;
