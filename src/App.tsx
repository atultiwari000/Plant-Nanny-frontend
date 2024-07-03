import "./App.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import Home from "./pages/home";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCmFnh4fGeDcHa94wa2ZDNJ1wsvz7JFL1o",
  authDomain: "soil-446c9.firebaseapp.com",
  databaseURL: "https://soil-446c9-default-rtdb.firebaseio.com",
  projectId: "soil-446c9",
  storageBucket: "soil-446c9.appspot.com",
  appId: "1:941961945328:android:e5dfc3459cfb26922ae235",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const AppProvider = React.createContext(app);

function App() {
  return (
    <AppProvider.Provider value={app}>
      <Home />
    </AppProvider.Provider>
  );
}

export default App;
