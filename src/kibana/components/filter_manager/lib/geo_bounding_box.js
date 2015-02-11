define(function (require) {
  var _ = require('lodash');
  return function buildGeoBoundingBox(box, index, addtionnalMetas) {
    var res = {
      geo_bounding_box : box,
      meta: {
        index: index,
      }
    };
    if (typeof addtionnalMetas !== 'undefined') {
      res.meta = addtionnalMetas;
      res.meta['index'] = index;
    }
    return res;
  };
});