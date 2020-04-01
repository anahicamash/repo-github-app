routes = [
  {
    path: '/',
    componentUrl: './pages/admin/inicio.html',
  },
  {
    path: '/principal/',
    componentUrl: './pages/admin/inicio.html',
    options: {
      transition: 'f7-parallax',
    },
  },
 
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
