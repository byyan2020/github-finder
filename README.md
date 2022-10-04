# Github Finder


## About

A database contains github users and repositorise.

## Running

In order to run the projects locally you need to have Node, npm and `python3` installed on your machine.

### Running the Django project

First, create a Python virtual environment to isolate the projects:

```bash
python3 -m venv my_env
```

Then, activate it:

Mac:
```bash
source my_env/bin/activate
```
Windows:
```bash
.my_env/scripts/activate
```

clone the project from GitHub:

```bash
git clone https://github.com/byyan2020/github-finder.git
```

Add the Django dependencies:

```bash
pip install -r requirements.txt
```

Finally, `cd` into the _backend_ folder and run the project:

```bash
python manage.py runserver
```

That's it!

Access the address http://localhost:8000/api/profiles/ and check if the API is up.

### Running the React project

First, `cd` the _frontend_ directory and run:

```bash
npm install
npm start
```

## API

#### /profiles
* `GET` : Get all profiles
* `POST` : Create a new profile

#### /profiles/:id
* `GET` : Get a profile, show all repositorise
* `PUT` : Update a profile
* `DELETE` : Delete a profile



## Features Catalogue

### Frontend
- `react` for building interactive UIs
- `react-dom` for rendering the UI
- `react-router` for page navigation
- `webpack` for bundling static assets
- Styling
  - `bootstrap` for providing responsive stylesheets
  - `react-bootstrap` for providing components built on top of Bootstrap CSS without using plugins
- State management and backend integration
  - `axios` for performing asynchronous calls
  - `cookie` for easy integration with Django using the `csrftoken` cookie
  - `redux` for easy state management across the application
  - `connected-react-router` for integrating Redux with React Router
  - `history` for providing browser history to Connected React Router
  - `react-redux` for integrating React with Redux
  - `redux-devtools-extension` for inspecting and debugging Redux via browser
  - `redux-thunk` for interacting with the Redux store through asynchronous logic

### Backend
- `django` for building backend logic using Python
- `djangorestframework` for building a REST API on top of Django

