import crypto from "crypto";

export default function (string) {
    return crypto.createHash('sha1', process.env.SECRET)
        .update(string)
        .digest('hex');
}