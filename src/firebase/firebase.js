//import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//     }),
//       console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'coffee',
//   notes: 'Feb',
//   amount: 4
// });

// database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// });

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('it broke', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Steve',
//     age: 26,
//     stressLevel: 7,
//     job: {
//       title: 'Dreamer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Port Orange',
//       country: 'US'
//     }
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(e => {
//     console.log('it broke');
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch(e => {
//     console.log('it broke');
//   });
