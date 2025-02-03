const express = require('express')
const {getHomePage, getABC, getManhbapper} = require('../controllers/homeController')
const router = express.Router()

// router.Method('/router', handler)
router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/manhbapper', getManhbapper)

module.exports = router // export default
