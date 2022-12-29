<center>
<img src="https://i.imgur.com/LMQFcsR.png">
</center>

# Community Dictionary: Build your vocabulary!

<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> 
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> 
<img alt="Firebase" src="https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

## About

Community Dictionary is a project focused on creating a community around people who are in need of a dictionary on the go. It lets general public to contribute in building a rich dictionary including slang and common phrases that we use in the day to day life. Rather than having a formal dictionalry, community dictionary provides you with day to day phrases and examples so that anyone can have a clear understanding.


# Set up


### Requirements

- [React.js](https://reactjs.org/docs/getting-started.html)
- A Firebase account - [sign up](https://console.firebase.google.com/)


### Local development

After the above requirements have been met: 
<br><br>

<b>1. Clone this repository and `cd` into it</b>

```bash
git clone https://github.com/scorelab/com-dictionary.git
cd com-dictionary/com-dict-client
```
<br>

<b>2. Install dependencies</b>

```bash
yarn install
```
<br>

<b>3. Setup Firebase Project</b>

Goto your <a href="">Firebase Console </a>and create a new project in Firebase Console. Then register a new web app.
Copy the **config data** from the config file which will look like this.
```
apiKey: "firebase-api-key",
authDomain: "firebase-auth-domain",
databaseURL: "firebase-db-url",
projectId: "firebase-project-id",
storageBucket: "firebase-storage-bucket",
messagingSenderId: "firebase-messaging-id",
appId: "firebase-app-id"
```
<br>

<b>4. Setup Firebase Configuration</b>

Rename the `.env.sample` file into `.env` and add your previously copied Firebase configuration details there. (Only the relevant details.)
<br>
The final `.env` file will look like this.
<br>
```
REACT_APP_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_APP_ID=x:xxxxxxxx:web:xxxxxxxxxxx
```
<br>

<b>5. Setup Firebase Realtime Database</b>

Goto `Cloud Firestore` section in your Firebase Console and create a database. Import `database.dump` file into Firebase Firestore. It will create dummy data for you to test.
<br>
<br>

<b>5. Setup Firebase Authentication</b>
<br>
Goto `Authentication` section in your Firebase Console and click on *Sign-in method* tab. Click on the pen icon in front of `Email/Password` and click enable.
<br>
<br>

<b>7. Run the project </b>

```bash
yarn start
```
<br>



## Contributing

This project is open source and welcomes contributions. 

[Visit the project on GitHub](https://github.com/scorelab/com-dictionary)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.