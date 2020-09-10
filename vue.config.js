module.exports = {
    publicPath:  '/medical-form/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: ' @import "@/assets/variables.scss"; '
            }
        }
    }
};