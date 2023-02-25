import { Paginate } from './../utilities/types';
import instance from "./axiosInstance";


class BaseNetwork<Type> {
    private endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getAll(paginate: Paginate): Promise<Type[]> {
        const res = await instance.get(this.endpoint, {
            params: {
                page: paginate.page,
                limit: paginate.limit
            }
        });
        return res.data;
    }

    async getById(id: string): Promise<Type> {
        const res = await instance.get(this.endpoint + id);
        return res.data;
    }

    async create<TCreate>(data: TCreate): Promise<Type> {
        const res = await instance.post(this.endpoint, data);
        return res.data;
    }

    async delete(id: string): Promise<string> {
        const res = await instance.delete(this.endpoint + id);
        return res.data;
    }
}


export default BaseNetwork;