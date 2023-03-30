import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/about";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";
import Partners from "./components/Partners/partners";
import AddCause from "./components/AddCause/addCause";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div class="App">
        <div class="vh-100">
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/addcause" element={<AddCause />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}
