import { request } from 'umi';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
