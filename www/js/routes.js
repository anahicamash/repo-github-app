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
  {
    path: '/lecciones/',
    componentUrl: './pages/admin/lecciones.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/verbos/',
    componentUrl: './pages/admin/verbos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarVerbos/',
    componentUrl: './pages/admin/agregarVerbos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/editarVerbos/:id/:espanol/:present/:past/:participle/',
    componentUrl: './pages/admin/editarVerbos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/adjetivos/',
    componentUrl: './pages/admin/adjetivos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarAdjetivos/',
    componentUrl: './pages/admin/agregarAdjetivos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/editarAdjetivos/:id/:espanol/:present/:past/:participle/',
    componentUrl: './pages/admin/editarAdjetivos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/principalU/',
    componentUrl: './pages/usuario/inicioU.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/leccionesU/',
    componentUrl: './pages/usuario/leccionesU.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/verbosU/',
    componentUrl: './pages/usuario/verbosU.html',
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
