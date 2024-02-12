const express = require('express');
const html_route = require('./routes/html-route');
const api_route = require('./routes/api-route');
const PORT = process.env.PORT || 3002;
const app = express();
// middleware will run from top to bottom
app.use(express.urlencoded({ extended: false }));
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
// Static middleware pointing to the public folder
app.use(express.static("public"));
app.use(html_route)
app.use(api_route)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});