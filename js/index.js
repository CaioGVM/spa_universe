import { Router } from './router.js'

const body = document.querySelector('body')
const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explore', '/pages/explore.html')
router.add('/error404', '/pages/error404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()