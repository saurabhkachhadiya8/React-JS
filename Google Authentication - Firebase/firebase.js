import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgbQfsk9isWbWED_05EDj0l9rNHBw8t5g",
  authDomain: "realtime-db-7756b.firebaseapp.com",
  databaseURL: "https://realtime-db-7756b-default-rtdb.firebaseio.com",
  projectId: "realtime-db-7756b",
  storageBucket: "realtime-db-7756b.appspot.com",
  messagingSenderId: "64716056342",
  appId: "1:64716056342:web:6baa3daff8550e9abc5237",
  measurementId: "G-L8KTG8RWDJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;
