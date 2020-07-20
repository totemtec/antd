import { useRequest } from 'umi';
import { queryProductList, removeProducts } from '@/services/product';

export default function useProductList(params: { pageSize: number; current: number }) {
  let params2 = {
    current: 1,
    pageSize: 20,
    sorter: {},
    filter: {},
  };
  const msg = useRequest(() => queryProductList(params2));

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      alert('删除成功');
      //   message.success('success');
      msg.run();
    } catch (error) {
      alert('删除失败');
      //   message.error('fail');
    }
  };

  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}
