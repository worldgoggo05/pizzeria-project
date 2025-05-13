module.exports = {
    apps : [{
        name : "PIZZERIA",
        cwd: "./",
        script : "./dist/server.js",
        watch: false,
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
        NODE_ENV: "development"
        },
        instances:1,
        exec_mode:"cluster"
    }]
}

// Terminal command to run this file
// pm2 start process.config.js --env production