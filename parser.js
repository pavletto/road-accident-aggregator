var fs = require('fs');
fs.readFile('raa.json', 'utf8', function(err, contents) {
    var posts = JSON.parse(contents);

    function recuriveSearchProrepty(arr) {
    // console.log(typeof arr)
        if (arr && (typeof arr === "object" || typeof arr === "array")) {
            for (var key in arr) {
                if (key === 'long')
                console.log(arr[key],arr['lat'])
                recuriveSearchProrepty(arr[key])

            }
        } else {
            return arr;
        }
    }
    recuriveSearchProrepty(posts.items);
    // posts.items.forEach(function(post, i, posts) {
    //     var keys = Object.getOwnPropertyNames(post);
    //     keys.forEach(function(key, i, keys) {
    //         if (Array.isArray(post[key]))
    //             console.log(post[key]);
    //     })
    // });
});
