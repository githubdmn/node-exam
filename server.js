
const PORT = 8000;

const http = require('http');
const string_decoder = require('string_decoder');
const url = require('url');

http
    .createServer((req, res) => {
        try {
            const parsedUrl = url.parse(req.on, true);
            const urlPath = parsedUrl.pathname;
            const trimmedPath = urlPath.replace(/^\/+|\/+$/g, '');
            if (trimmedPath === 'codility-demo') {
                task01();
            } else {
                throw 'Path is not correct';
            }
        } catch (exception) {
            console.error(exception);
            res.end(exception);
        }
    })
    .listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })

function task01() {

}