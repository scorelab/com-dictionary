# Table of Content
1. [Community Dictionary](#community-dictionary---a-crowd-sourced-multilingual-dictionary)
    1. [Features](#Features)
2. [Community](#community)
3. [User Guide](#user-guide)
    1. [How to Setup](#how-to-setup)
    2. [Installation](#installation)
5. [Set-up-Firebase](#set-up-firebase)
5. [Running-the-Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#license)
<br /><br />
# Community Dictionary - A crowd-sourced multilingual dictionary
Community Dictionary is a crowd-sourced dictionary that aims to support the English language and multiple other languages. The platform offers concise definitions and examples of word usage in various languages, allowing users to add and search for words in any language they desire.

## Features
 - Multiple languages support
 - User-friendly interface
 - Searchable database
 - Crowdsourced definitions and examples
 - Commenting system for added reliability
 - Reporting system for inaccurate or disputed words and definitions

# Community 

Join and communicate with other members on our community. We communicate on gitter

[![Gitter](https://badges.gitter.im/scorelab/CodeLabz.svg)](https://gitter.im/scorelab/CodeLabz?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## User Guide 

### Prerequisites
To run the Community Dictionary project, you need to have Node.js and npm installed on your system. You can download them from here.
### How to Setup

Clone the repository.

For cloning this repo: Run 
```
git clone https://github.com/scorelab/com-dictionary.git
```
Run the above command in the folder in which you want to clone the repository
### Installation
To run the Community Dictionary project, navigate to the project directory by entering the following command in your terminal:

```
cd com-dict-client
```
Then, install the npm libraries using:

```
npm install
```

You need to create a `.env` file in `CodeLabz` folder following the template provided in the file `.env.sample`.<br/> <br/>


## Set-up-Firebase
1. Sign in to https://console.firebase.google.com/.
2. Click **Add Project** and necessary information about the project.(Below mentioned the Steps to add project to firebase) 
    - To add Firebase resources to an existing Google Cloud project, enter its project name or select it from the dropdown menu.
    - To create a new project, enter the desired project name. You can also optionally edit the project ID displayed below the project name
    - Firebase generates a unique ID for your Firebase project based upon the name you give it. If you want to edit this project ID, you must do it now as it cannot be altered after Firebase provisions resources for your project. Visit Understand Firebase Projects to learn about how Firebase uses the project ID.
3. Agree to the terms and click **Create Project**.
4. After creating the project, click **Add Firebase to your web app**.
    - In the center of the Firebase console's project overview page, click the Web icon  to launch the setup workflow.
    - If you've already added an app to your Firebase project, click Add app to display the platform options.
    - Enter your app's nickname.
    - This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
    - Click Register app.
5. Copy the firebase configuration.
6. Paste the configuration in the `.env` file. (Reference from env.sample)

<br /><br />
Example of How will configurations look like in .env
```
REACT_APP_FIREBASE_PROJECT_ID = codelabz-8e474
```


## Running the Application
Once the npm libraries are installed, you can start the application using:

```
npm start
```

This will start the application on your local server

## Contributing

This project is open source and welcomes contributions. 

[Visit the project on GitHub](https://github.com/scorelab/com-dictionary)

## License
Community Dictionary is open-source software licensed under the MIT License.