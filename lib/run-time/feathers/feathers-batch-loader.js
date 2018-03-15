
const BatchLoader = require('@feathers-plus/batch-loader');
const { extractAllItems } = require('./extract-items');
const cache = require('@feathers-plus/cache');
const debug = require('debug')('f-batch-loader');

const { getResultsByKey } = BatchLoader;
let logger;

module.exports = {
  feathersBatchLoaderInit,
  feathersBatchLoader,
};

// Initialization call
function feathersBatchLoaderInit(logger1) {
  logger = logger1;

  if (logger1 === null) {
    logger = () => {};
  }

  if (logger1 === undefined) {
    logger = (msg, detail) => {
      throw new Error(`${msg}\n${detail || ''}`);
    };
  }
}

/*
  Feathers adapter for BatchLoader - converts Feathers service call results into GraphQL format.

  @param {String} resolverName - Name of resolver. Only used in info/error logs.
  @param {String} graphqlType - Type of GraphQL result to return for each BatchLoader key
      '[!]!' - required collection of required elements
      '[!]'  - optional collection of required elements
      '[]'   - optional collection of optional elements
      '!'    - required object
      ''     - optional object
  @param {String|Function} serializeRecordKey1 - Serialize record key.
      Return serialized key from record, identical to that produced by serializeBatchLoaderKey1.
      Function - record => serialized key
      String - Converts to record => record[serializeRecordKey1].toString();
  @param {Promise} getRecords - Feathers call to read records given [keys] from BatchLoader.
      Can return a '.get()' object or array, else a paginated or non-paginated '.find()' object.
      An error is caught and processed as an empty array.
  @params {Number} maxBatchSize - Maximum number of keys `getRecords` is called with.
  @param {Number} maxCacheSize - Maximum number of items in the cache. Will use LRU cache.
  @param {String|Function} serializeBatchLoaderKey1 -
      Serialize key from BatchLoader.load(), identical to that produced by serializeRecordKey1.
      Function - key => serialized key e.g. '1' or '{"name":"a","age":20}'
      String - Converts to key => key.toString();
 */

function feathersBatchLoader(
  resolverName, graphqlType, serializeRecordKey, getRecords, maxBatchSize, maxCacheSize, serializeBatchLoaderKey1
) {
  debug(`feathersBatchLoader entered. "${resolverName}" "${graphqlType}"`);

  const serializeBatchLoaderKey = typeof serializeBatchLoaderKey1 === 'function'
    ? serializeBatchLoaderKey1 : key => key.toString();

  return new BatchLoader(
    batchLoaderFunc(graphqlType, serializeRecordKey, getRecords), {
      cacheKeyFn: serializeBatchLoaderKey,
      cacheMap: typeof maxCacheSize === 'number' ? cache({ maxCacheSize }) : undefined,
      maxBatchSize: typeof maxBatchSize === 'number' ? maxBatchSize : undefined,
    }
  );
}

// Key loader function for BatchLoader.
// Note that serializeBatchLoaderKey has already been passed to BatchLoader as cacheKeyFn
function batchLoaderFunc(graphqlType, serializeRecordKey, getRecords) {
  return keys => getRecords(keys)
    .then(resultArray => getResultsByKey(
      keys, extractAllItems(resultArray), serializeRecordKey, graphqlType,
      { onError: logger }
    ));
}
