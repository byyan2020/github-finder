# Github Finder

## About

A database contains github users and repositorise.

## Pages
![avatar](/img1.png)
![avatar](/img2.png)

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
. my_env/scripts/activate
```

clone the project from GitHub:

```bash
git clone https://github.com/byyan2020/github-finder.git
```

`cd` to the project folder, Add the Django dependencies:

```bash
cd .\github-finder\
pip install -r requirements.txt
```

Finally, `cd` into the _backend_ folder and run the project:

```bash
cd .\backend\
python manage.py runserver
```


Access the address http://localhost:8000/ and check if the API is up.

### Running the React project

`cd` the __frontend__ directory and run:

```bash
cd .\frontend\
npm install
npm start
```

Access the address http://localhost:3000/ to interact with the interface.

## Add New Github User to the Database

`cd` to the __backend__ directory and run

```bash
python manage.py get_repos
```
Enter the user name in the command line and the script will scrape the user information and store it in the database. You can view the newly added users through the frontend interface.

## API

#### /profiles

- `GET` : Get all profiles

#### /profiles/:id

- `GET` : Get a profile by id

#### /search/?q=params

- `GET` : search for profile name


## Features Catalogue

### Frontend

- `react` for building interactive UIs
- `react-dom` for rendering the UI
- `react-router` for page navigation
- Styling
  - `bootstrap` for providing responsive stylesheets
  - `react-bootstrap` for providing components built on top of Bootstrap CSS without using plugins
- Backend integration
  - `axios` for performing asynchronous calls

### Backend

- `django` for building backend logic using Python
- `djangorestframework` for building a REST API on top of Django


## Features To Be Implemented
  - admin page allows to add new github users, update user information and delete users