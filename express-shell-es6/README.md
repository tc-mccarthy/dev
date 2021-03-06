# McCarthy Express shell

This shell is finely tuned to my habits specifically. It creates a controller directory, builds out APP and API routes by default (instead of index and users, as generated by express generator), cleans up var declarations, sets up a grunt shell with jQuery, lodash, font awesome and my most common SASS file structure and includes a DB wrapper I wrote that supports upsert and read-replica. Cherry pick from it what you like and pull request against it if you have improvements!

## config.js
Set the port that expressJS runs on and your mysql credentials. A master MUST be defined if you want to have a DB connection at all. If you add configuration objects to the slaves array, each object will be included as a separate pool object. The DB wrapper will send all writes to the MASTER and will divide reads up via round-robin to all elements in the pool. This configuration is universal and will work with or without slaves defined.