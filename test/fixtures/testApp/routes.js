var Router = require('bomberjs/lib/router').Router;

var r = new Router();

r.add('/deferToSubApp1', 'subApp1');
r.addFolder();

exports.router = r;
