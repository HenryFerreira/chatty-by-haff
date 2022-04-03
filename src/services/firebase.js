import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyB7uQhBuRRSFdAnk-9MUM0tb7p8FUeak7o",
  authDomain: "proyectochat-bd93c.firebaseapp.com",
  projectId: "proyectochat-bd93c",
  storageBucket: "proyectochat-bd93c.appspot.com",
  messagingSenderId: "620060541586",
  appId: "1:620060541586:web:14cb73ebf4b96c23f7dc4b",
  databaseURL: "https://proyectochat-bd93c-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = getAuth();
export const db = getDatabase();
