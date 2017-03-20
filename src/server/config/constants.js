var passport = require('passport');
const jwtAuthGuard = passport.authenticate('jwt', { session: false })
exports.jwtAuthGuard = jwtAuthGuard