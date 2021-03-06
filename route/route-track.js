'use strict';

const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const Track = require('../model/track');
const debug = require('debug')('http:route-track');


debug('route-track');

module.exports = router => {

  router.route('/play/track/:artist?/:album?/:title?')
    .get((req, res) => {
      if(req.params.artist && req.params.album && req.params.title) {
        return Track.findOne({
          artist_name: `${req.params.artist}`, 
          album_title: `${req.params.album}`,
          title: `${req.params.title}`,
        })
          .exec(function(err, track) {
            if(err) {
              return errorHandler(new Error('ENOENT: Item not found'), res);
            }
            res.status(200).json(track);
          });
      }else{
        return errorHandler(new Error('Bad request'), res);
      }
    });
};
