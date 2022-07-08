module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'http://165.227.140.96/API',
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '20afc1bf17c4f4831bba1e4f9c427781'),
        },
    },
});