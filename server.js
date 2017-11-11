var PeerServer = require('lib/peer').PeerServer;
var server = PeerServer({port: process.env.port, path: '/peerjs', secure: true});