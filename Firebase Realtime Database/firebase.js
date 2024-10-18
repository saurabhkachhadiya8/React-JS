import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmGV1OLfV_0dTNgnQ8Dy1f5sG7rDVitV8",
  authDomain: "crud-realtime-db-17103.firebaseapp.com",
  databaseURL: "https://crud-realtime-db-17103-default-rtdb.firebaseio.com",
  projectId: "crud-realtime-db-17103",
  storageBucket: "crud-realtime-db-17103.appspot.com",
  messagingSenderId: "357255581066",
  appId: "1:357255581066:web:fcec5e71b6ec22320c4c73",
  measurementId: "G-W3ZSN4LHN1"
};

export const app = initializeApp(firebaseConfig);