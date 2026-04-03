import api from '../../services/api'

export interface LoginPayload {
  email: string
  password: string
}

export async function login(payload: LoginPayload) {
  const res = await api.post('/auth/login', payload)
  return res.data
}

export async function register(payload: any) {
  const res = await api.post('/auth/register', payload)
  return res.data
}

export async function fetchProfile() {
  const res = await api.get('/auth/me')
  return res.data
}
