import request from "request"
import FormData from 'form-data';

export function getApi() {
    return new Promise((resolve, reject) => {
        request.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${process.env.TOKEN}`, (error, _, body) => {
            if(error) return reject(error);
            try {
                const json = JSON.parse(body);
                resolve(json);
            } catch (env) {
                return reject(e);
            }
        });
    })
}

