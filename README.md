# Phonebook App created with Material UI 
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-gray)](https://marcinbolt.github.io/Phonebook/) [![Swagger](https://img.shields.io/badge/API%20Documentation-Swagger-green)](https://connections-api.herokuapp.com/docs/#/User)

>A single-page application with a Heroku backend, enabling user sign-up, login, and logout. It provides contact management capabilities such as adding, editing, and removing contacts with a filtering feature. The app is structured on Vite & React.js, incorporates Notiflix notifications, Material-UI for a user-friendly interface, and employs Axios for backend data access. It utilizes router-dom (from react) for client-side authorization and authentication.

## Clone this repository and install all dependencies using ```npm install``` or use prefered package manager.
## You can run this app using script ```npm run dev```

## Also could install every package separately:

1. Redux Toolkit:

   ```npm install @reduxjs/toolkit```

2. React-Redux:

   ```npm install @reduxjs/toolkit react-redux```

3. Axios:

   ```npm install axios```

4. gh-pages:

   ```npm install gh-pages --save-dev```

5. redux-persist:

   ```npm install redux-persist```

6. react-router-dom:

   ```npm install react-router-dom```

7. Material UI, icons and Roboto font:

   ```npm install @mui/material @emotion/react @emotion/styled```

   ```npm install @mui/icons-material```
   
   ```npm install @fontsource/roboto```

8. React loader spinner:

   ```npm install react-loader-spinner --save```

9. React Icons:

   ```npm install react-icons --save```

10. Notiflix - notification:

    ```npm install notiflix```


# 
### Deploying Vite App to GitHub Pages using gh-pages and script deploy:

1. Install gh-pages package:

   ```npm install gh-pages --save-dev```

2. Add script in package.json:

   ```"scripts": { "deploy": "npm run build && gh-pages -d dist" },```

3. Run script to build and publish in gh-pages branch on github:

   ```npm run deploy```
