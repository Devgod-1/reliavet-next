import OAuth from 'oauth-1.0a';
import crypto from 'crypto';

// Initialize OAuth
const oauth = OAuth({
    consumer: {
        key: process.env.NEXT_PUBLIC_WP_API_KEY, // Consumer Key from WordPress
        secret: process.env.NEXT_PUBLIC_WP_SECRET_KEY, // Consumer Secret from WordPress
    },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
        return crypto.createHmac('sha1', key).update(baseString).digest('base64');
    },
});

export default oauth;