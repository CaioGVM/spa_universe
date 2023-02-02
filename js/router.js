export class Router {
  body = document.querySelector('body')
  routes = {}
  add (routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href)
  
    this.handle()
  }
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/error404']
    let bodyClass = route.slice(7).slice(0, -5)
    this.body.removeAttribute('class')
    this.body.classList.add(bodyClass)
    fetch(route)
      .then(data => data.text())
        .then(html => {
          document.querySelector('#app').innerHTML = html
        })
  }
}