module.exports = function(app) {
  app.use('/api/search', require('./routes/search.routes'));
};
