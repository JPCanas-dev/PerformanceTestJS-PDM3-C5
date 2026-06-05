# Workspace Reservation System SPA

## General description

This project is about creating a Single Page Application (SPA) using JavaScript, Vite, TailwindCSS and JSON Server.

The application simulates a workspace reservation system where users can log in, navigate through protected routes and manage information from a simulated API.

The main objective is to evaluate knowledge about:

* SPA architecture
* Authentication
* Role management
* Route protection
* Session persistence
* API consumption
* DOM manipulation
* Code modularization
* Good development practices

---

# Problem Context

A company has different shared workspaces:

* Meeting rooms
* Private offices
* Coworking spaces
* Auditoriums

To avoid schedule conflicts and improve internal organization, a platform is needed to manage workspace reservations.

The application must have two roles:

## Administrator (admin)

Can:

* View all reservations
* Create reservations
* Edit reservations
* Delete reservations
* Approve or reject reservations
* Manage workspaces
* Access administrative modules

## User (user)

Can:

* View available workspaces
* Create reservations
* View only their own reservations
* Edit pending reservations
* Cancel their own reservations

---

# Technologies Used

* JavaScript ES6+
* Vite
* TailwindCSS
* JSON Server
* Concurrently
* HTML5
* CSS3

---

# Base Structure Provided

```bash
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   └── login.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       └── notFound.js
└── vite.config.js
```

---

# Architecture Explanation

## Components

Contains reusable UI components.

Example:

```txt
components/
└── Sidebar.js
```

The Sidebar can be reused in different views and centralizes the main navigation of the system.

## Controllers

Contain the business logic and application events.

Example:

```txt
controllers/
└── login.controller.js
```

Responsibilities:

* Capture form events
* Validate credentials
* Consume the API
* Manage login
* Redirect users

## Views

Represent the application screens.

Currently:

* Login
* Home
* Not Found (404)

Each view returns an HTML template that is rendered dynamically inside the main container.

## Router

Manages SPA navigation.

Responsibilities:

* Render views
* Manage routes
* Protect private views
* Redirect users
* Show 404 pages

## Utils

Contains reusable helper functions.

Currently:

* Save session
* Get session
* Remove session
* Validate authentication

---

## Simulated API

The application uses JSON Server to simulate a REST API.

Admin user example:

```json
{
  "id": 1,
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}
```

Standard user example:

```json
{
  "id": 2,
  "email": "user@test.com",
  "password": "123456",
  "role": "user"
}
```

---

## Environment Setup

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

This command starts:

* Vite
* JSON Server

at the same time using Concurrently.

---

## Suggested Scripts

```json
{
  "scripts": {
    "client": "vite",
    "server": "json-server --watch db.json --port 3000",
    "dev": "concurrently \"npm run client\" \"npm run server\""
  }
}
```

---

## Test Credentials

Administrator:

```txt
admin@test.com
123456
```

User:

```txt
user@test.com
123456
```

---

## Included Features

* Functional login
* API consumption with JSON Server
* Session persistence using LocalStorage
* Logout
* SPA Router
* Basic route protection
* Reusable Sidebar
* Custom 404 page
* TailwindCSS setup
* Vite setup

---

## Features To Develop

Developers must implement:

* Reservation CRUD
* Workspace CRUD
* Role management
* Advanced guards
* Permission validations
* Administrative dashboard
* Statistics
* Filters and searches
* Notifications
* Business rules