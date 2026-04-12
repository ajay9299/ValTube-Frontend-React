import api from '../../services/api'

export interface LoginPayload {
  username: string
  password: string
}

export async function login(payload: LoginPayload) {
  const res = await api.post('/auth/login', payload)
  console.log("Login response:", res.data);
  return res.data
}

export async function register(payload: any) {
  const res = await api.post('/auth/register', payload)
  return res.data
}

export async function fetchProfile() {
  try {
    // console.log("Making API call to fetch profile...");
    // const res = await api.get('/user/profile')
    // console.log("Fetch profile response:", res.data);
    return {
      userId: "69c4a48165750151316ac3e2",
      firstName: "Rocky Ji Ok"
    }
  } catch (error: any) {
    console.error("Error fetching profile:", error.message);
    console.error("Error details:", error);
    throw error;
  }
}
