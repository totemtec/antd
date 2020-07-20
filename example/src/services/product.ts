import { request } from 'umi';

export async function queryProductList(params) {
  return request('/api/rule', {
    params,
  });
}

export async function removeProducts(params) {
  return request('/api/currentUser', {
    params,
  });
}
