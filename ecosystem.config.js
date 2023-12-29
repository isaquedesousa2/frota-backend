module.exports = {
    apps: [
        {
            name: 'development',
            script: 'dist/src/main.js',
            exec_mode: 'cluster',
            instances: 'max',
            wait_ready: true,
            listen_timeout: 10000,
            // Logging
            out_file: './out.log',
            error_file: './error.log',
            merge_logs: true,
            log_date_format: 'DD-MM HH:mm:ss Z',
            log_type: 'json',
        },
    ],
};
