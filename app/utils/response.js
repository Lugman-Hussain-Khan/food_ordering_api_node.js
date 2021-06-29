exports.logger = function (data) {
  var bunyan = require('bunyan');
  var log = bunyan.createLogger({
      name: 'server_response',
      streams: [{
        path: './responseLogs.json',
      }]
  });
  log.info(data);
}