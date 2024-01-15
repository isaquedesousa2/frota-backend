module.exports = {
    apps: [
        {
            name: 'frota-production',
            script: 'dist/main.js',
            exec_mode: 'cluster',
            instances: 'max',
            wait_ready: true,
            listen_timeout: 10000,
            out_file: './out.log',
            error_file: './error.log',
            merge_logs: true,
            log_date_format: 'DD-MM-YYYY HH:mm:ss Z',
            log_type: 'json',
        },
    ],
};
