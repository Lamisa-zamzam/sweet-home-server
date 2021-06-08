# Sweet Home Server

Welcome to my server!!! Here you can request a number of data which is basically the data for a house rental website from this server. By calling [The Root API](https://shrouded-meadow-58285.herokuapp.com/), you can get a simple "Hello World" which is not necessarily useful, but root URL is always important. So, I wanted to make you know that.

## [Visit My Root API](https://shrouded-meadow-58285.herokuapp.com/)

## My client side code: [https://github.com/Lamisa-zamzam/sweet-home/](https://github.com/Lamisa-zamzam/sweet-home/)

## My live site: [https://sweet-home-910.web.app/](https://sweet-home-910.web.app/)

Secondly, if you call [The Houses API](https://shrouded-meadow-58285.herokuapp.com/houses), you will get the data of several visa to be ordered by the customers in an array. The array contains an object for each visa and each object contains some properties, namely: \_id, id, houseName(title of the house, e.g. visa), price, detail and image(URL to the picture of the house). Though they are not real ones, however, that could work great as placeholders.

If you want to get the information of a specific house, you're gonna do that with [https://shrouded-meadow-58285.herokuapp.com/house/:houseName](https://https://shrouded-meadow-58285.herokuapp.com/house/:houseName). But wait!!! You have to replace :houseName with the name of the  huse u want to get and also this API is private, so you are not going to get the info until you are logged in in My Website [Sweet Home](https://sweet-home-910.web.app/). Actually, this server was made only for this website, so this website has a power over this server. You can [add a house to this server](https://shrouded-meadow-58285.herokuapp.com/addHouse), [add an order for your chosen visa](https://morning-shelf-52119.herokuapp.com/placeOrder), [make an admin of the site](https://shrouded-meadow-58285.herokuapp.com/makeAdmin) and even [delete](https://morning-shelf-52119.herokuapp.com/deleteService/:_id) or [Update](https://shrouded-meadow-58285.herokuapp.com/updateOrder/:id) a house form here using that website. But again, you have to be logged in in that website and have the id and name of the specific service in the cases you need it.

You are able to check if a person is admin in the website with [This get API](https://shrouded-meadow-58285.herokuapp.com/checkIfAdmin). Note that you have to provide the email of the person as a query in the URL. This API [https://shrouded-meadow-58285.herokuapp.com/bookings/:email](https://shrouded-meadow-58285.herokuapp.com/bookings/:email) gives all the bookings that have been made form a specific email. And to get a single house info by its id, use [https://shrouded-meadow-58285.herokuapp.com/house/:id](https://shrouded-meadow-58285.herokuapp.com/house/:id).

My project includes:

1.  [Node.js](https://nodejs.org/en/),
2.  [Mongodb](https://www.mongodb.com/),
3.  [Express.js](https://expressjs.com/),
4.  [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ,
5.  [Environment Variables](https://www.npmjs.com/package/dotenv) and
6.  [Heroku Deployment](https://devcenter.heroku.com/categories/reference).


### Roadmap
=> considring adding mongoose

### Contributing
Pull requsts are welcome. For major changes, please open a issue first and discuss what you would like to change. 
