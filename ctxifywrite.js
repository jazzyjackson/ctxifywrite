const dotaccess = require('@ctxify/dotaccess')
module.exports = ctxifywrite

/**
@param {string}      magicArg
@param {object|null} options
@param {object}      ctx

@returns {string|undefined}
**/

function ctxifywrite(magicArg, options = {}, ctx){
	// TODO options is null for strings for simple retrieval, maybe in the future, options can include replace parameters 
	return dotaccess(ctx, magicArg)
}