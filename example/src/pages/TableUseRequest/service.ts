import { request } from 'umi';

export async function queryRule(params: Object) {
  return request('/api/rule', {
    params,
  });
}
