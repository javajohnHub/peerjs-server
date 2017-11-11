var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 80, path: '/peerjs', secure: true});