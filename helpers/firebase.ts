import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import prod from '../firebase.json'

const firebase = initializeApp(prod);

export const firestore = getFirestore(firebase);