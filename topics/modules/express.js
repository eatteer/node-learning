const createApplication = () => {
  console.log('express app created')
}

/* CommonJS Module System creates an object for exporting purposes pointed by [module.exports] and [exports].
Changes the pointer of either [module.exports] or [exports] causes, for obvious reasons, that both point to a completely
differents objects. Resulting in unexpected behavior, because require() only exposes what module.exports is pointing */

/* Express library solution */
/* [exports] points to what [module.exports] is pointing to */
exports = module.exports = createApplication

/* Modify [createApplication] function */
exports.request = 'request'

/* https://stackoverflow.com/questions/23509162/expressjs-javascript-fundamentals-exports-module-exports-createapplication */
/* https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system */