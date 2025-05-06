# The GameShop BackEnd

## Brief Desc:
Server built to serve data from mongoDB to our frontend

## Schemas
- Users
    - name
    - pwd
    - email
    - admin: boolean

- Games
    - name
    - category
    - price
    - numOfPlayers
    - desc
    - qty
    
- Cart
    - items
    - total price
    - userID

## Routes
- User
    - post user
    - read user
    - edit user
    - delete user

- Game
    - get all
    - get one game by ID
    - admin update
    - admin delete

- Cart
    - add to cart
    - remove from cart
    - "checkout"

    ## Technologies
    - Mongoose
    - express
    - dotenv
    - logger/morgan
    - cors