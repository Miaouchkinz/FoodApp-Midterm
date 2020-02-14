# FoodApp Midterm

Camilo's Café is a simple, single-page application for a restaurant that offers pick-up orders for both the client and restaurant side. It uses JQuery, HTML5, Bootstrap, and SCSS on the front-end and Node JS, Express, Postgres on the back-end. 

The midterm project is our first chance to work in teams and build an app from the ground up. We used Trello to help organize ourselves as well as Draw.io to create our ERDs and Wireframes. 

----------
## Final Product

### Menu items by food category
![Menu_Items_By_Category](https://user-images.githubusercontent.com/8763915/74564616-7b646d80-4f3d-11ea-9492-a85cb9e0ad1f.png)

### Checkout Cart
![Checkout Cart](https://user-images.githubusercontent.com/8763915/74564606-74d5f600-4f3d-11ea-9d81-4baffcd1671f.png)

### Order placed, waiting for pick up
Both the client and the restaurant receive an SMS when the order is placed.

![Order_Placed_Waiting_Page](https://user-images.githubusercontent.com/8763915/74564618-7bfd0400-4f3d-11ea-89ea-a3ac4a9aff43.png)

### Restaurant-Side
When the order is marked as "ready for pick up", the client will receive an SMS.

![Restaurant_View](https://user-images.githubusercontent.com/8763915/74564619-7bfd0400-4f3d-11ea-84a9-57757f6de49e.png)

----------
## Wireframes

### Menu / Main Page
![Menu_Main_Page](https://user-images.githubusercontent.com/8763915/74565383-1c9ff380-4f3f-11ea-9f85-3a485118db78.jpg)

### Order Checkout
![Order_Checkout](https://user-images.githubusercontent.com/8763915/74565387-1dd12080-4f3f-11ea-8585-aa2852f8289c.jpg)

### Waiting Screen
![Waiting_screen](https://user-images.githubusercontent.com/8763915/74565393-1e69b700-4f3f-11ea-937d-d81421e5a186.png)

### Restaurant View
![restaurant_views](https://user-images.githubusercontent.com/8763915/74565390-1e69b700-4f3f-11ea-9bed-7b54edd3adfb.png)

----------

## ERDs

![ERD](https://user-images.githubusercontent.com/8763915/74565587-891af280-4f3f-11ea-86b6-69b4aa7f5586.png)


----------

## Route Table

![FoodApp_Routes_Table](https://user-images.githubusercontent.com/8763915/74566840-676f3a80-4f42-11ea-8a22-522147595804.png)

----------

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Body Parser 1.x
- Cookie-session 1.x
- Express 4.x
- Sass 0.11.x
- Twilio 3.39.x
