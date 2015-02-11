define(function (require) {
  var _ = require('lodash');
  var decodeGeoHash = require('utils/decode_geo_hash');

  /**
  * The dimentions of the geohash_grid cells at the equator
  * http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations-bucket-geohashgrid-aggregation.html#_cell_dimensions_at_the_equator
  */
  var precisionGeohashGridMappings = {
    1 : [5009400, 4992600],
    2 : [1252300, 624100],
    3 : [156500, 156000],
    4 : [39100, 19500],
    5 : [4900, 4900],
    6 : [1200, 609.4],
    7 : [152.9, 152.4],
    8 : [38.2, 19],
    9 : [4.8, 4.8],
    10 : [1.2, 0.595]
  };

  var precisionGeohashGridDiagonals = {
    7072492 : 1,
    1399198 : 2,
    220971 : 3,
    43692 : 4,
    6929 : 5,
    1345 : 6,
    215 : 7,
    42 : 8,
    6 : 9,
    1 : 10
  };

  function sphericDistance(latitude1, longitude1, latitude2, longitude2) {
    var earthRadius = 6371;
    return Math.acos(Math.sin(latitude1) * Math.sin(latitude2)
      + Math.cos(latitude1) * Math.cos(latitude2) * Math.cos(longitude1 - longitude2)) * earthRadius;
  }

  function computeOptimumPrecision(geoHash) {
    var location = decodeGeoHash(geoHash);
    var geoHashDiagonal = sphericDistance(location.latitude[1], location.longitude[0], location.latitude[0], location.longitude[1]);
    return _.last(_.filter(precisionGeohashGridDiagonals, function (value, key, list) { return key < this; }, geoHashDiagonal / 2));
  }

  return {
    sphericDistance: sphericDistance,
    computeOptimumPrecision: computeOptimumPrecision,
    precisionGeohashGridMappings: precisionGeohashGridMappings,
    precisionGeohashGridDiagonals: precisionGeohashGridDiagonals
  };
});