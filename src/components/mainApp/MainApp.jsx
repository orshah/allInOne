import React from "react";
import CheckOutForm from "../checkOutFom/CheckOutForm";
import CounterApp from "../counterApp/CounterApp";
import CssBoxes from "../cssBoxes/CssBoxes";
import FetchDog from "../fetchDog/FetchDog";
import TodoApp from "../todoApp/TodoApp";
import NavigationBar from "../nav/NavigationBar";
import { Routes, Route } from "react-router-dom";
import ApiFetch from "../apiFetch/ApiFetch";
import StickyNotes from "../stickyNotes/StickyNotes";

function MainApp() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/checkoutform" element={<CheckOutForm />} />
        <Route path="/counterapp" element={<CounterApp />} />
        <Route path="/cssboxes" element={<CssBoxes />} />
        <Route path="/fetchdog" element={<FetchDog />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/fetchapi" element={<ApiFetch />} />
        <Route path="/sticky" element={<StickyNotes />} />
      </Routes>
    </div>
  );
}

export default MainApp;
