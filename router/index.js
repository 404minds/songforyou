module.exports = function(app) {
  app.use('/api/search', require('./routes/search.routes'));
  app.use('/api/dedicate', require('./routes/dedicate.routes'));
};
