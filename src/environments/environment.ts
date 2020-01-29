// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const APIKEY = 'AIzaSyCSIiUjt2M-67N4piVU7ztmB4SigclQ4gM';
const PROJECTID = 'portailweb-52f4c';

export const environment = {
  production: false,
  firebase: {
    apiKey: APIKEY,
    authDomain: `${PROJECTID}.firebaseapp.com`,
    databaseURL: `https://${PROJECTID}.firebaseio.com`,
    projectId: PROJECTID,
    storageBucket: `${PROJECTID}.appspot.com`,
    // messagingSenderId: `<your-messaging-sender-id>`
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
