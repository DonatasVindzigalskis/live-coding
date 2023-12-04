# Builder Backend Interview Live Exercise

## Tech Stack

- NodeJs v20.9.0
- Express
- Typeorm

## Structure

`/controller` - controller layer
`/entity` - entity layer
`/service` - service layer
`/repository` - repository layer
`/migration` - database migration files

## Tasks

### 0. Setup
1. Run `npm install` to install package dependencies.
2. Run `npm run start:services` to start database services.
3. Run `npm run db:migration:run` to run typeorm database migration.

### 1. Create Order entity

Create `src/entity/order.ts` entity to represent an order.
Refer to typeorm [docs](https://typeorm.io/relations) to implement this entity. A migration will be required to create the table, use [these docs](https://typeorm.io/migrations) as a reference.

### 2. Implement order creation endpoint

Modify `src/controller/customer.ts` controller to implement the order creation endpoint for a specific user.

### 3. Modify getCustomer method to return orders

Modify `src/controller/customer.ts` controller method getCustomer to return orders for a specific user.
Make use of typeorm [relations](https://typeorm.io/relations).

### 3. Let's validate our user input!

Modify `src/controller/customer.ts` controller method createOrder to validate the input.
Make use of express-validator [docs](https://express-validator.github.io/docs/) or any other tool that you're comfortable with!

### 4. Let's add some tests!

We have a working test in `src/controller/__tests__/customer.spec.js`. Write some tests for newly added functionality! 

### 5. Dockerize the application (optional)

Create a Dockerfile to dockerize the application.

### 6. Want to show your knowledge? Add suggestions/refactor existing code

Hopefully this task was pretty easy, but no project is ever finished. Provide any insights how you would refactor/clean up
or improve this project in any way you can think of. Code doesn't need to work - just show your ideas!
