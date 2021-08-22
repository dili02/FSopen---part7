import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

export const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

export const getAllBlogsService = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createNewBlogService = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

export const addLikeService = async (blog) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}/${blog.id}`, { likes: blog.likes }, config)
  return response.data
}

export const delteBlogService = async (blog) => {
  const config = {
    headers: { Authorization: token }
  }

  await axios.delete(`${baseUrl}/${blog.id}`, config)
}

export default {
  getAllBlogsService,
  setToken,
  createNewBlogService,
  addLikeService,
  delteBlogService
}
