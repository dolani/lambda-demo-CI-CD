// const axios = require('axios')
const url = "https://api.buttercms.com/v2/pages/*/home?auth_token={token}";
let response;
const appService = require('./appService');


function createResponse(statusCode, message) {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(message)
    };
}


/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */


// return mapped data
 exports.getMappedExploreData = async (event, context, callback) => {
    await appService.getMappedExploreData(url, event).then(response => {
        callback(null, createResponse(200, response));
    })
}

// return full response data
exports.getExploreData = async (event, context, callback) => {
    await appService.getExploreData(url, event).then(response => {
        callback(null, createResponse(200, response));
    });
    // let resp;
    // try {
    //     await axios.get(url)
    //         .then(response => {
    //             resp = response.data;
    //             console.log('--response.data--', resp);
    //         });
    //     return {
    //         statusCode: 200,
    //         headers: {
    //             "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    //             "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    //         },
    //         body: JSON.stringify(
    //             {
    //                 message: resp,
    //                 // input: event,
    //             },
    //             null,
    //             2
    //         ),
    //     };
    // } catch (error) {
    //     console.log("error", error);
    // }
}
