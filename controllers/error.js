exports.get404 = (req, res, next) => {// default url is "/", when not included.

//chaining, .send just needs to be the last method called
res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

};