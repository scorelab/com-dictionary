# Community Dictionary

Community Dictionary is a crowdsourced online dictionary for multiple languages. Each head term in the dictionary is defined only in english and has meaning in multiple languages. Also, each meaning contains examples, definitions, and the voting count. 


# Community 

Join and communicate with other members on our community. We communicate on gitter.

[![Gitter](https://badges.gitter.im/scorelab/CommunityDictionary.svg)](https://gitter.im/scorelab/CommunityDictionary?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## User Guide

#### How to Setup

Fork the repository as your own copy
`https://github.com/<Your Username>/com-dictionary.git`

Clone the repository on your local system 
`git clone https://github.com/<Your Username>/com-dictionary.git`

Run the above command in the folder in which you want to make a clone.

#### How to Use

Run `npm install` in `com-dict-client` folder.

```
 cd com-dict-client/
 npm install
```
> **NOTE**: If `npm install` is not executing successfully, then use node v14 and `npm install --legacy-peer-deps` and try again.

First you need to create a `.env` file in `com-dict-client` folder following the template provided in the file `.env.sample`.

## Set-up-Firebase
1. Sign in to https://console.firebase.google.com/.
2. Click **Add Project** and necessary information about the project.(Below mentioned the Steps to add project to firebase) 
    - To add Firebase resources to an existing Google Cloud project, enter its project name or select it from the dropdown menu.
    - To create a new project, enter the desired project name. You can also optionally edit the project ID displayed below the project name
    - Firebase generates a unique ID for your Firebase project based upon the name you give it. If you want to edit this project ID, you must do it now as it cannot be       altered after Firebase provisions resources for your project. Visit Understand Firebase Projects to learn about how Firebase uses the project ID.
3. Agree to the terms and click **Create Project**.
4. After creating the project, click **Add Firebase to your web app**.
    - In the center of the Firebase console's project overview page, click the Web icon  to launch the setup workflow.
    - If you've already added an app to your Firebase project, click Add app to display the platform options.
    - Enter your app's nickname.
    - This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
    - Click Register app.
5. Copy the required firebase configurations.
6. Paste the configuration `.env` file.
You should fill in these values in their relevent fields in the `.env` file.

To run the project:  
 `$ npm start`


> **NOTE**: Before starting the server create a file named `.env` same as `.env.sample` and add your **Firebase Configurations** in the file.

Visit [localhost:3000](http://localhost:3000) to browse.
