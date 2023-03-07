module.exports = {
    script: 'serve',
    name: 'knowly',
    env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: '8081',
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: 'index.html',
    },
    exec_mode: 'cluster',
    instances: 'max',
}
