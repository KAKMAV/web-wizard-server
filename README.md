# DATA MODELING ARCHITECH:

### CRUD ROUTE:
- .POST: signup/creates a user in database
- .GET: (findByAll) find all user accounts
- .GET: (findById) find a specific user
- .PUT: updates/modifies user changes
- .DELETE: delete/remove user changes

## 0. *Main Objective: 
    - TDD (test driven development)

    - why? we want a strong/hearty backend

    - create a failing test first for each CRUD route

    - work vertically, meaning:
        (example)
            - create failing test first for .POST in test file
            - create route in controller file (users.js)
            - create method in model file (User.js)
            - create/define route in app.js
            - drop/define tables in setup.sql

    - write/refine/adjust code to get tests passing
        - debug through expected common errors:
            - 400 error message (controller route issue)
            - 500 error message (SQL model issue)

*** First, make it **WORK** . Then make it **CLEAN**. Finally, make it **FAST** ***

## 1. create a controller(s):
    - create users.js folder
    - all controllers live here

## 2. create a model(s):
    - create User.js folder
    - all models live here
    - talks to app.js 

## 3. define/drop a table(s) in SQL database:
    - create/define tables for each model
    - these will live in sql>setup.sql
    - all tables live here
    - talks to User.js

## 4. define/create high level route:
    - these routes lives in app.js
    - each controller(s) needs their own route

