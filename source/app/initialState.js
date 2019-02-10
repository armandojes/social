const initialState = {
  menu:{
    active: false,
  },
  user: {
    logged: 'loading',
    name: '',
    type: '',
    token: '',
    id: '',
    username: null,
  },
  alert: {
    message: null,
  },
  pages: {
    tags: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    },
    login: {
      view: 'form',
      mail: '',
      password: '',
    },
    register: {
      view: 'form',
      mail: '',
      password: '',
      re_password: '',
      name: '',
      username: '',
      sexo: '',
    },
    create_post: {
      view: 'form',
      title: '',
      content: '',
      category: '',
      tags: [],
      tag_text: '',
      picture: 'form',
      images: 'button',
      url: null,
    },
    post: {
      loading: true,
      id: 0,
      content: '',
      title: '',
      coments: [],
      url: '',
      category: '',
      tags: [],
      error: false,
      meta: {},
      loading_coments: true,
      content_coment: '',
      current_page_coment: 0,
      pages_coments: null,
      saved: 'loading',
    },
    myposts: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    },
    category: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
      name: '',
      url: '',
      id: null,
    },
    tag: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
      name: '',
    },
    mysaved: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    }
  },
  posts: {
    loading: true,
    items: [],
    pages: 0,
    current_page: 0,
  },
  category: {
    loading: true,
    items: [],
  }
}

export default initialState;
