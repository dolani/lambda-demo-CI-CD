'use script'

const axios = require('axios');
// const url = "https://api.buttercms.com/v2/pages/*/pelumi-home?auth_token=c60a9ee5329e50806b293f77216f0d9422b139c6";
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