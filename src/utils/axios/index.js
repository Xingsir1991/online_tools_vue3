import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://your-api-base-url.com', // 替换为你的基础地址
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 如果 URL 是以 http 或 https 开头，则不拼接 baseURL
        if (/^https?:\/\//.test(config.url)) {
            config.baseURL = '';
        }
        // 可在此添加全局的请求头，比如 Token
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => response.data, // 直接返回响应数据
    (error) => {
        alert(`Error: ${error.response?.data?.message || error.message}`);
        return Promise.reject(error);
    }
);

// 封装方法
const http = {
    /**
     * GET 请求
     * @param {string} url 请求地址
     * @param {object} params 查询参数
     * @returns {Promise<any>}
     */
    get(url, params = {}) {
        return instance.get(url, { params });
    },

    /**
     * POST 请求
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @returns {Promise<any>}
     */
    post(url, data = {}) {
        return instance.post(url, data);
    },

    /**
     * 文件上传请求
     * @param {string} url 请求地址
     * @param {FormData} formData 文件数据
     * @param {function} onProgress 上传进度回调
     * @returns {Promise<any>}
     */
    upload(url, formData, onProgress) {
        return instance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                if (onProgress && typeof onProgress === 'function') {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    onProgress(percentCompleted);
                }
            },
        });
    },

    /**
     * 自定义请求类型
     * 支持直接调用，自动判断是否拼接 baseURL
     * @param {string} url 请求地址
     * @param {object} options Axios 配置
     * @returns {Promise<any>}
     */
    request(url, options) {
        return instance({
            url,
            ...options,
        });
    },
};

export default http;
