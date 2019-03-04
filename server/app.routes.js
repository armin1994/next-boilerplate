const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());


routes.add({ name: 'index', pattern: '/', page: 'index' });
routes.add({ name: 'about', pattern: '/about/:id', page: 'about' });
routes.add({ name: 'landing', pattern: '/landing', page: 'landing' });
