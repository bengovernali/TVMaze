# TVMaze App

This project was put together as part of a technical assesment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## How It Works

The first step is to 'log in' (this app is only connected to a public api. login is a simple hard coded setup)

There are two users hard coded into the app:

    username: mikewasowski  password: codingiscool      rights: admin

    username: elemin        password:ontheroadagain     rights: user

### Show Search

Once you have 'logged in' simply type any keyword you like into the searchbar, then click the submit button. 
A set of results should populate underneath. 
Only users with 'admin' access (mikewasowski) will be able to see more than just the show titles and posters.

### Menu

The menu consists of 4 links:

    Search: this will bring you back to the search page

    Profile: this will bring you to the profile page. 
    This page does not actually have any profile data and will just provide a little greeting.

    Admin: this link is only accessible to users with the 'admin' role. it will not render for other users. 
    Like the profile link, this link will bring the user to the Admin page. 
    Once again, it does not have any actual content, just a greeting.

    Logout: clicking this link will clear the app of the logged in user's details, forcing the user back to the login screen. 

Attempting to access any route before logging in should force the user back to the login screen. 
Attempting to access the login screen after you have already logged in should force you back to the Search screen. 
Attempting to access routes only accessible to admins should force the user back to the Search screen.
