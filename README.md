# React Notes

This Full stack application lets your create your own note and access it anywhere in the world. This Application used MERN stack technology.

This app was completely written from scratch. No boilerplate codes were used.
The acronym 'MERN' stands for :

- M - Mongo
- E - ExpressJS
- R - ReactJS
- N - NodeJS

# Test here

```
https://parkour-react-notes.netlify.app/
```

# Features

- One Click login
- One Click Register
- Single Page Application (Made possible with react-routes)
- Adding note will get immediately updated on the List
- Fully Responsive

# Todos

- [ ] Delete your account
- [ ] Delete a note/ Delete all notes
- [ ] Sign out option instead of just closing the current window
- [ ] Option to Keep a profile picture to the user
- [ ] Option to change password

# Usage

> First thing first, NPM and Node should be installed on your system. Edit the required lines with your favourite code editor (VS Code preferred.)

### Frontend

- git clone https://github.com/denomparkour/react-notes
- cd react-notes
- cd backend && npm install
- cd ../frontend && npm install
- npm run build
- or You could just run 'npm run dev' in the frontend folder if you don't want all the mess.

A new folder called "dist" will be created inside the frontend folder. It can't be opened directly. Since all those files are "CORS" protected. You should use http-server from node package and server that folder, or you should use "Live server" extension from VS code marketplace.

> Note : After the command "npm run build", and after serving the folder, the default homepage will be /index.html and it wont work since it is not possible. So you should just remove the /index.html in the link and you can proceed. Ex : if the link is http://localhost:5000/index.html then change it to http://localhost:5000/ then the issue with the blankpage will get fixed.

Inside the vscode open the frontend folder and enter into dist folder and on the bottom panel of the vscode you can see go live option and clicking that will automatically create a new localhost server for you.

### Backend

Moving on to the backend folder,

- Rename example.env to just .env and change the variables accordingly.
- Change "ACCESS_TOKEN" value to something your wish. It just works as a salt for encryption.
- Change "MONGO_URI" to the value you got by creating new app in the Mongo website or just the localhost mongo server link. And paste the URL inside the quotes.
- Ex : MONGO_URI = "mongodb://"
- Change "PORT" to your wish or leave as it is. It will take 3000 as default.

# Ending

This app was made possible by all the tutorials I have watched on youtube and some forums. Without those guys, It shouldn't be possible.
So big thanks to all of them.

If you find any issues, feel free to create a pull request with a fix or just let me know by creating a new issue.

Made with ❤️by [Denomparkour](https://github.com/denomparkour)

Have a great day~
