const logger = require('./logger')

const options = {
    from: new Date() - (24 * 60 * 60 * 1000),
    until: new Date(),
    limit: 10,
    start: 0,
    order: 'desc',
    fields: ['message']
  };
  
  //
  // Find items logged between today and yesterday.
  //
  logger.query(options, function (err, results) {
    if (err) {
      /* TODO: handle me */
      throw err;
    }
  
    console.log("results",results);
  });