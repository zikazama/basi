
function config() {
    const apiEndPoint = function(){
        return 'https://newsapi.org/v2/';
    }
    const apiKey = function(){
        return 'abf0851d8e85441bb5021bb057258ac6';
    }
    return {
        apiEndPoint: apiEndPoint,
        apiKey: apiKey
    }   
}

export default config;