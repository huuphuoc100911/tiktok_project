import * as httpRequest from '~/utils/httpRequest';

export const suggested = async (q = 'huu', type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const following = async (q = 'mai', type = 'more') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
