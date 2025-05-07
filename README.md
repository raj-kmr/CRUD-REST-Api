# CRUD REST API – Users

A simple CRUD API built with Node.js, Express, and MongoDB.

## Features

- Create a user
- Get all users
- Get a single user by ID
- Update a user
- Delete a user
- Input validation
- Error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose

## Endpoints

| Method | Route           | Description         |
|--------|------------------|---------------------|
| POST   | /api/users       | Create user         |
| GET    | /api/users       | Get all users       |
| GET    | /api/users/:id   | Get user by ID      |
| PUT    | /api/users/:id   | Update user by ID   |
| DELETE | /api/users/:id   | Delete user by ID   |

## Sample Request

```json
POST /api/users
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "age": 22
}
