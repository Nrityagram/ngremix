const settings = new Object()

module.exports = {
    initialise: function () {
        settings.sliderOnPage = false
        settings.gismapOnPage = false
        settings.youtubeOnPage = false
        settings.marqueeOnPage = false
    },
    setSlider: function () {
        settings.sliderOnPage = true
    },
    setGismap: function () {
        settings.gismapOnPage = true
    },
    setYoutube: function () {
        settings.youtubeOnPage = true
    },
    setMarquee: function () {
        settings.marqueeOnPage = true
    },
    getAll: function () {
        return {
            "slider": settings.sliderOnPage,
            "gismap": settings.gismapOnPage,
            "youtube": settings.youtubeOnPage,
            "marquee": settings.marqueeOnPage
        }
    }
};