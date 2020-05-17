# net-core-api
APIs with .Net Core 3.1 C#

## Run API REST
>cd TodoApi

>dotnet run

Open Postman or Browser

https://localhost:5001/WeatherForecast

https://localhost:5001/WeatherForecast/1

Postman

#### Add:

https://localhost:5001/api/TodoItems

Method: POST

{
  "name":"walk dog1",
  "isComplete":true
}

Response:

Headers -> Location: https://localhost:5001/api/TodoItems/1

Status: 201 Created

#### List:

https://localhost:5001/api/TodoItems

Method: GET

Response:

Status: 200 OK

#### Update:

https://localhost:5001/api/TodoItems/1

Method: PUT

{
  "id":2,
  "name":"walk dog_edit",
  "isComplete":false
}

Response:

Status: 204 No Content

#### Delete:

https://localhost:5001/api/TodoItems/1

Method: DELETE

Response:

Status: 204 No Content

## Tests
>cd TodoApi.Tests

>dotnet test
