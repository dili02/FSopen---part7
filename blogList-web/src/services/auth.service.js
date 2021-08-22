import axios from 'axios'
const baseUrl = '/api'

export const loginService = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials)
  return response.data
}
