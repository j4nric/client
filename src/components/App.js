import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/:id" element={<StreamShow />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
