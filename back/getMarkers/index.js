let http = require('http');
let url = require('url');
let querystring = require('querystring');
let static = require('node-static');
let file = new static.Server('.');

function accept(req, res) {


    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
    });

    const APPID = 5618842;
    const APPSECRET = 'R7AIAbXopL693wQeDsnp';
    const REDIRECT_URL = 'http://pvlt.test.com:3000';

    const vkontakte = require('vkontakte');
    let headers = req.headers;
    let method = req.method;
    let url = req.url;
    let vk = vkontakte(APPID, APPSECRET);
    let body = [];
    vk('wall.get', {
        owner_id: -68471405,
        // fields: 'uid,first_name,photo'
        count:10
    }, function(err, markers) {
        req.on('error', function(err) {
            console.error(err);

        }).on('data', function(chunk) {}).on('end', function() {
            res.on('error', function(err) {
                console.error(err);
            });
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            });
            let resBody = {
                markers: markers
            };
            res.write(JSON.stringify(resBody));
            res.end();
        });
    });
}
http.createServer(accept).listen(8080);
