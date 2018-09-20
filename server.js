const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// NOTE: 3001 Album Player

app.all('/artists/albums/:artistID', (req, res, next) => {
  console.log('REDIRECTING TO 3001 PLAYER');
  res.redirect('http://localhost:3001/artists/albums/' + req.params.artistID);
  next();
});

// NOTE: 3002 Related Artists
app.all('/relatedArtists/id/artist', (req, res, next) => {
  console.log('REDIRECTING TO 3002 RELATED ARTISTS');
  res.redirect('http://localhost:3002/relatedArtists/id/artist/');
  next();
});

// NOTE: 3003 Popular Songs
app.all('/artist/:id', (req, res, next) => {
  console.log('REDIRECTING TO 3003 POPULAR SONGS');
  res.redirect('http://localhost:3003/artist/' + req.params.id);
  next();
});

// NOTE: 3004 Header
app.all('/artists/:artistID', (req, res, next) => {
  console.log('REDIRECTING TO 3004 - HEADER');
  res.redirect('http://localhost:3004/artists/' + req.params.artistID);
  next();
});

app.listen(port, () => {
  console.log(`🌎 server running at: http://localhost:${port}`);
});
