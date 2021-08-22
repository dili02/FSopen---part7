import axios from 'axios'
const baseUrl = '/api/blogs'

export const getBlogCommentsService = async idBlog => {
  const response = await axios.get(`${baseUrl}/${idBlog}/comments`)
  return response.data.comments
}

export const createNewCommnetService = async (idBlog, newObject) => {
  const response = await axios.post(`${baseUrl}/${idBlog}/comments`, newObject)
  return response.data
}
