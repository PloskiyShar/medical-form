module.exports = {
    publicPath: process.env.SERVER === 'production' ? '/medical-form/' : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: ' @import "@/assets/variables.scss"; '
            }
        }
    }
};