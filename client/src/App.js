import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";
import Partners from "./components/Partners/partners";
import AddCause from "./components/AddCause/addCause";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./components/Profile/Profile";
import { motion, stagger, AnimatePresence } from "framer-motion";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

export default function App() {
  const location = useLocation();

  const [page, setPage] = useState("home");

  return (
    <ApolloProvider client={client}>
      <div class="App">
        <div class="">
          <Nav page={page} setPage={setPage} />
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route
                path="/"
                element={<About page={page} setPage={setPage} />}
              />
              <Route path="/partners" element={<Partners />} />
              <Route
                path="/addcause"
                element={<AddCause page={page} setPage={setPage} />}
              />
              {/* <Route path='/contact' element={<Contact />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}
