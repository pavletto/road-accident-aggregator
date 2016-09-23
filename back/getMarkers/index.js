let http = require('http');


function parseMarker(response) {
    let points = [],
        postCount = 0;

    function recuriveSearchProrepty(arr) {
        if (arr && (typeof arr === "object" || typeof arr === "array")) {
            for (var key in arr) {
                if (key === 'long') {
                    points[postCount - 1]['marker'].push({
                        long: arr['long'],
                        lat: arr['lat']
                    })
                } else {
                    if (key === 'attachments') {
                        postCount++


                        points.push({
                            marker: [],
                            text: arr['text'],
                            date: arr['date']
                        })
                    }
                    recuriveSearchProrepty(arr[key])

                }
            }
        } else {
            return arr;
        }
    }
    recuriveSearchProrepty(response.items);
    return points;
}

function accept(req, res) {
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
        count: 100
    }, function(err, response) {
        req.on('error', function(err) {
            console.error(err);

        }).on('data', function(chunk) {}).on('end', function() {
            res.on('error', function(err) {
                console.error(err);
            });
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': 'http://192.168.0.213:3000',
                'Access-Control-Allow-Credentials': 'true'
            });
            let resBody = {
                points: parseMarker(response)
            };
            res.write(JSON.stringify(resBody));
            res.end();
        });
    });
}
http.createServer(accept).listen(8080);
