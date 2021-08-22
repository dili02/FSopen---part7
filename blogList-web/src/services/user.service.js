import axios from 'axios'
const baseUrl = '/api'

export const getUsersService = async () => {
  const response = await axios.get(`${baseUrl}/users`)
  return response.data
}
