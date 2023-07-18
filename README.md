# goit-react-hw-08-phonebook

#users-authorization #users-authentication #token #React #React-Redux #vite #axios #gh-pages

Installed packages:

1. Redux Toolkit:

   npm install @reduxjs/toolkit

2. React-Redux:

   npm install @reduxjs/toolkit react-redux

3. Axios:

   npm install axios

4. gh-pages:

   npm install gh-pages --save-dev

5. redux-persist:

   npm install redux-persist

6. react-router-dom:

   npm install react-router-dom

7. Material UI, icons and Roboto font:

   npm install @mui/material @emotion/react @emotion/styled

   npm install @mui/icons-material
   
   npm install @fontsource/roboto

8. React loader spinner:

   npm install react-loader-spinner --save

9. React Icons:

   npm install react-icons --save

10. Notiflix - notification:

   npm i notiflix


Deploying Vite App to GitHub Pages using gh-pages and script deploy:

Install gh-pages:

npm install gh-pages --save-dev

Add script in package.json:

"scripts": { "deploy": "npm run build && gh-pages -d dist" },

Run script to build and publish in gh-pages branch on github:

npm run deploy
