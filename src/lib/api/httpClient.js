import { auth } from "./firebaseClient";

const baseURL = import.meta.env.VITE_FUNCTIONS_BASE_URL || "";

async function request(method, url, data) {
  const token = await auth.currentUser?.getIdToken?.();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${baseURL}${url}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  // try parse json
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    return res.json();
  }
  return res.text();
}

export const http = {
  get: (url) => request('GET', url),
  post: (url, data) => request('POST', url, data),
};

export default http;
