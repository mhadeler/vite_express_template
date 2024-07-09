import express from 'express';
import bodyParser from 'body-parser';

let router = express.Router();
router.use(bodyParser.json());

let api = () => {
    router
        // All requests to "your-site.com/api/example1" will land here
        .route('/example1') 
        // GET requests to this endpoint will land here
        .get(async (req, res) => { 
            // This sends back a response (res) formatted as JSON 
            res.json({ 
                message: "You have reached your-site.com/api/example1 via a GET request",
                moreStuff: "You can return anything you want here",
                // The following shows how to use data sent in the query string of the get request (req). 
                // Ex: If the GET request was to "your-site.com/api/example1?message=hello", req.query.message === "hello"
                query: req.query.message,  
            });
        })
    router
        // All requests to "your-site.com/api/example2..." will land here. 
        // The asterix is a wildcard that allows anything to follow "/example2" in the URL
        // Ex: "your-site.com/api/example2/page1"
        .route('/example2*')
        // GET requests to this endpoint will land here 
        .get(async (req, res) => {
            // This sends back a response (res) as a file. 
            // The path must be to a file on the machine the server is hosted on.
            // Ex: '/path/to/whatever/file.txt'
            res.sendFile('/README.md'); 
        })
        // POST requests to this endpoint will land here
        .post(async (req, res) => { 
            // This sends back a response (res) formatted as JSON
            res.json({
                // Using request parameters in POST requests is a little different than GET requests.
                // For POST requests, you use req.body instead of req.params.
                // Ex: If you send a key "message" with the value "Hi there" in the body of your POST request, req.body.message === "Hi there"
                // NOTE: This requires the bodyParser package, which has been imported above ^^
                request_param: req.body.message
            })
        })
    return router;
}

export default api;
