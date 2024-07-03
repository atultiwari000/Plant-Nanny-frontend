import "./App.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import Home from "./pages/home";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "firebase-projectname.firebaseapp.com",
  databaseURL: "https://projectID-default-rtdb.firebaseio.com",
  projectId: "firebase-projectID",
  storageBucket: "firebase-projectID.appspot.com",
  appId: "1:XXXXXXXXXXXXX:android:XXXXXXXXXXXXXXXXXX",
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
