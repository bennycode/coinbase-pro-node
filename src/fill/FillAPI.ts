import {AxiosInstance} from 'axios';

export type Fill = any;

export class FillAPI {
  static readonly URL = {
    FILLS: `/fills`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#list-fills
  async getFillsByOrderId(orderId: string): Promise<Fill[]> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get(resource, {params: {order_id: orderId}});
    return response.data;
  }

  // https://docs.pro.coinbase.com/#list-fills
  async getFillsByProductId(productId: string): Promise<Fill[]> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get(resource, {params: {product_id: productId}});
    return response.data;
  }
}
