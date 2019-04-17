const schemas = require('./schemas');
const populator = require('./utils/noRefPopulator');

populator(process.argv[2], process.argv[3], process.argv[4], schemas[process.argv[5]])