
const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('Hello World with Manhbapper!')
}
const getABC = (req, res) => {
    res.send('Check abc!')
}   
const getManhbapper = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage, getABC, getManhbapper
}