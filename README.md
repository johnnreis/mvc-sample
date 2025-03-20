# MVC-SAMPLE Application

- a fake application for learning pattern MVC, this application use array how db and apply only test in repository
  <br></br>

# REST API

<p>The REST API routes</p>

## GET ALL VALUES

### Request

`GET /api/v1/values`

### Response

` {
    [
        'value', 
        'value', 
        'value', 
        'value', 
        'value'
    ]
}`

### Request

`GET /api/v1/value/{id}`

- `id` is index of value array `ex: /api/v1/value/0`

### Response

` { "value": "value1" }`

### Request

`POST /api/v1/value`

- `value` for value for add in array

### Response

`{"message": "create sucessfuly"}`

### Request

`PUT /api/v1/value/{id}`

- `id` for value for update in index of array

### Response

`{ "message": "update sucessfuly!" }`

### Request

`DELETE /api/v1/value/{id}`

- `id` is index in array for value is delete

### Response

`{ "message": "204 No Content" }`

<br></br>

# RUN TEST

- `npm run test`

<br></br>

# ENV File

- in env.sample is a example for your create env file in your root
