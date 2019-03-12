import axios  from 'axios';
const baseUrl = 'http://localhost/api/';

//funcion conectar
async  function connect (config){
  config.url = baseUrl+config.url;
  return axios(config);
}

const api = {
  notific: {
    load_pending: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'notific/pending',
        data: data,
      });
      return response.data;
    },
    get_list: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'notific',
        data: data,
      });
      return response.data;
    }
  },
  category: {
    get_posts: async (id_category, page) => {
      const response = await connect({
        method: 'post',
        url: 'category/posts',
        data: {id_category, page}
      });
      return response.data;
    },
    get_list: async () => {
      const response = await connect({
        method: 'get',
        url: 'category',
      });
      return response.data;
    },
    get_data: async (url_category) => {
      const response = await connect({
        method: 'post',
        url: 'category/data',
        data: {url: url_category}
      });
      return response.data;
    },
  },
  user: {
    get_sigle_for_username: async (username) => {
      const response = await connect({
        method: 'post',
        url: 'user',
        data: {username},
      });
      return response.data;
    },
    activate: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'user/activate',
        data: data,
      });
      return response.data;
    },
    logout: async (id_user, token) => {
      const response = await connect({
        method: 'post',
        url: 'user/logout',
        data: {id_user, token},
      });
      return response.data;
    },
    create: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'user/create',
        data: data,
      });
      return response.data;
    },
    login: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'user/login',
        data: data,
      });
      return response.data;
    },
    login_token: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'user/login-token',
        data: data,
      });
      return response.data;
    }
  },
  picture: {
    upload_miniature: async (formData) => {
      const response = await connect({
        method: 'post',
        url: 'picture/uploadminiature',
        data: formData,
      });
      return response.data;
    },
    upload: async (formData) => {
      const response = await connect({
        method: 'post',
        url: 'picture/upload',
        data: formData,
      });
      return response.data;
    },
  },
  post: {
    update: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'post/update',
        data: data,
      });
      return response.data;
    },
    delete_save: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'post/deletesave',
        data: data,
      });
      return response.data;
    },
    delete: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'post/delete',
        data: data,
      });
      return response.data;
    },
    create: async (data) => {
      const response = await connect({
        method: 'post',
        url: 'post/create',
        data: data,
      });
      return response.data;
    },
    get_list: async (page) => {
      const response = await connect({
        method: 'get',
        url: `post/page/${page}`,
      });
      return response.data;
    },
    get_my_posts: async (userid, page) => {
      const response = await connect({
        method: 'get',
        url: `post/userid/${userid}/page/${page}`,
      });
      return response.data;
    },
    get_single: async (idpost) => {
      const response = await connect({
        method: 'get',
        url: `post/id/${idpost}`,
      });
      return response.data;
    },
    is_saved: async (post_id, user_id) => {
      const response = await connect({
        method: 'post',
        url: `post/saved`,
        data: {post_id, user_id }
      });
      return response.data;
    },
    save: async (id_user, id_post, token) => {
      const response = await connect({
        method: 'post',
        url: `post/save`,
        data: {id_user, id_post, token}
      });
      return response.data;
    },
    get_list_saved: async (id_user, token, page) => {
      const response = await connect({
        method: 'post',
        url: `posts/saved`,
        data: {id_user, token, page}
      });
      return response.data;
    }
  },
  coments: {
    send: async (data) => {
      const response = await connect({
        method: 'post',
        url: `coments/new`,
        data: data,
      });
      return response.data;
    },
    get_list: async (post_id, page) => {
      const response = await connect({
        method: 'get',
        url: `coments/post/${post_id}/page/${page}`,
      });
      return response.data;
    },
  },
  tag: {
    get_list: async (page) => {
      const response = await connect({
        method: 'get',
        url: `tags/page/${page}`,
      });
      return response.data;
    },
    get_posts: async (name_tag, page) => {
      const response = await connect({
        method: 'post',
        url: 'tag/posts',
        data: {name_tag, page}
      });
      return response.data;
    },
  },
}
export default api;
