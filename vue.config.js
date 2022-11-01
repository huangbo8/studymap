const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "/api": {
                target: "http://218.77.58.22:28088",
                ws: true,
                secure: false,
                changeOrigin: true,
                // pathRewrite: {
                //     "^/yshjapi": "",
                // },
            },
            "/geoserver": {
                target: "http://218.77.58.22:28088",
                ws: true,
                secure: false,
                changeOrigin: true,
                // pathRewrite: {
                //     "^/yshjapi": "",
                // },
            },


        },
    },

    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@views", resolve("src/views"))
            .set("@utils", resolve("src/utils"))
            .set("@api", resolve("src/api"))
            .set("@components", resolve("src/components"))
            .set("@public", resolve("public"));
    },
})