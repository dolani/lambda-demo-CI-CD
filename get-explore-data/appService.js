'use script'

const axios = require('axios');
// const url = "https://api.buttercms.com/v2/pages/*/home?auth_token={token}";
let exploreData = {
    newsHeader: String,
    image: String
}

module.exports.getMappedExploreData = (url, queryParams) => {
    const queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
    if (queryString) {
        if (url.indexOf('?') > -1) {
            url = `${url}&${queryString}`;
        }
        url = `${url}?${queryString}`;
    }
    return axios.get(url)
        .then(response => {
            exploreData.newsHeader = response.data.data.fields.news;
            exploreData.image = response.data.data.fields.background_image;
            return exploreData;
        });
}

module.exports.getExploreData = (url, queryParams) => {
    const queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
    if (queryString) {
        if (url.indexOf('?') > -1) {
            url = `${url}&${queryString}`;
        }
        url = `${url}?${queryString}`;
    }
    return axios.get(url)
        .then(response => {
            return response.data;
        });
}
