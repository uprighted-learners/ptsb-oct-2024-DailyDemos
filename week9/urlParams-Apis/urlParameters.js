//https://www.google.com/search?q=what+are+apis&sca_esv=0baf5c9e671f57b4&rlz=1C1GCEA_enUS1105US1106&ei=6XdXZ52SDeyy5NoP2NTPwAM

//?q=what+are+apis
//& ive got a new one
//sca_esv=0baf5c9e671f57b4
{
  q: "what are apis";
}

// affiliate link example
// the buyer gets 25% off
// the Youtuber gets $50
//example.com/theproduct?ref=SomeRandomYoutuber25off

//visit https://www.google.com/search?q=what+is+an+api in your browser

//copy paste this into the browser console area
// const url = document.location.search;
// const searchParams = new URLSearchParams(url);
// searchParams.get("q");
// 'what is an api'

//launch page via preview
// query parameter at the end
// i.e. http://127.0.0.1:3000/week9/urlParams-Apis/urlParameters.html?q=what+is+an+api

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
const url = document.location.search;
const searchParams = new URLSearchParams(url);
const query = searchParams.get("q");
console.log("Search Query is:", query);
