const http = require("http");

const handleAllRequest = (req, res) => {
    console.log("request received");
    // console.log(requestOject)
    // res.write("<h1>This is My Respond</h1>\n");
    // res.write("<h2>another respond</h2>");

    const url = req.url;
    res.setHeader("content-type","text/html")
    if (url === '/') {
        res.write("<h1>Welcome to home page</h1>");
    }else if (url === '/login') {
        res.write("<h2>Welcome to login Page</h2>");
    }else if (url === '/signup'){
        res.write("<h2>Welcome to signup Page</h2>");
    }else if (url === '/profile'){
        res.write("<h2>Welcome to profile Page</h2>");
    }else {
        res.write("<h1>Page not found</h1>")
    }
    res.end();
}

const server = http.createServer(handleAllRequest);


server.listen(3000, "127.0.0.1", ()=> console.log('Server Is Connected'));