//COUDN'T FIGURE IT OUT ON THE VIDEO. PLAY WITH IT SOME MORE

function requestValidator(request){
    const{method, uri, version, message} = request
    //make error message for diferent params
    const errorMessage = (typeOfParam) => {
        throw new Error('Invalid request header: Invalid ' + typeOfParam)
    }
//check if params are right
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    if((!validMethods.includes(method) || !method) || method == undefined){
        (errorMessage('Method'))
    }
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if((!validVersions.includes(version) || !version) || version == undefined){
        (errorMessage('Version'))
    }
    const uriPattern = /^([\w.])+$|^\*$/g
    //check the regex explanation bellow
    if((!uriPattern.exec(uri) || !uri) || uri == undefined){
        (errorMessage('URI'))
    }
    const forbidenSymbols = ['<', '>', '\\', '&', '\'', '"']
    //check for explanation on how to escape certain chars bellow
    for(let symbol of forbidenSymbols){
        if((message !== undefined && message.split('').includes(symbol)|| message == undefined) ){
        (errorMessage('Message'))
        }
    }
    return request
}



// Unexpected error: expected [
//  TypeError: Cannot read property 'split' of undefined] to have property 'message' of 
//'Invalid request header: Invalid Message', but got 'Cannot read property \'split\' of undefined'


console.log(requestValidator({
        method: 'POST',
        message: 'home.bash',
        version: 'HTTP/2.0'
    }))
    





///^([\w.])+$|^\*$/gm
//1st Alternative ^([\w.])+$
//^ asserts position at start of a line
//1st Capturing Group ([\w.])+
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
//A repeated capturing group will only capture the last iteration. Put a capturing group around the repeated group to capture all iterations or use a non-capturing group instead if you're not interested in the data
//Match a single character present in the list below [\w.]
//\w matches any word character (equivalent to [a-zA-Z0-9_])
//. matches the character . with index 4610 (2E16 or 568) literally (case sensitive)
//$ asserts position at the end of a line
//2nd Alternative ^\*$
//^ asserts position at start of a line
//\* matches the character * with index 4210 (2A16 or 528) literally (case sensitive)
//$ asserts position at the end of a line
//Global pattern flags 
//g modifier: global. All matches (don't return after first match)
//m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

///^[^<>\\&\'\"]+/
//gm
//^ asserts position at start of a line
//Match a single character not present in the list below [^<>\\&\'\"]
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
//<> matches a single character in the list <> (case sensitive)
//\\ matches the character \ with index 9210 (5C16 or 1348) literally (case sensitive)
//& matches the character & with index 3810 (2616 or 468) literally (case sensitive)
//\' matches the character ' with index 3910 (2716 or 478) literally (case sensitive)
//\" matches the character " with index 3410 (2216 or 428) literally (case sensitive)
//Global pattern flags 
//g modifier: global. All matches (don't return after first match)
//m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)



function requestValidator(request) {
    const { method, uri, version, message } = request
  
    // Helper function to throw an error with the appropriate message
    const throwError = (param) => {
      throw new Error(`Invalid request header: Invalid ${param}`)
    }
  
    // Check method
    if (!method || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(method)) {
      throwError('Method')
    }
  
    // Check URI
    const validUri = /^[\w\.]+|\*$/g.test(uri)
    if (!uri || !validUri) {
      throwError('URI')
    }
  
    // Check version
    if (!version || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(version)) {
      throwError('Version')
    }
  
    // Check message
    const validMessage = message === undefined || /^[^<>&'"\\]*$/g.test(message)
    if (!validMessage) {
      throwError('Message')
    }
  
    return request
}
  


function requestValidator(obj) {
    const methodValidate = ['GET', 'POST', 'DELETE', 'CONNECT']
    const versionValidate = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let uriPattern = /[^A-Za-z0-9\.\*]+/
    let messagePattern = /[<>\\\&\'\"]+/
 
    if ((obj.method === undefined) || !(methodValidate.includes(obj.method))) {
        throw new Error ('Invalid request header: Invalid Method')
    };
    if ((obj.uri === undefined) || obj.uri == '' || uriPattern.test(obj.uri)) {
        throw new Error ('Invalid request header: Invalid URI')
    };
    if ((obj.version === undefined) || !(versionValidate.includes(obj.version))) {
        throw new Error ('Invalid request header: Invalid Version')
    }
    if ((obj.message === undefined) || ((messagePattern.test(obj.message)) == true)) {
        throw new Error ('Invalid request header: Invalid Message')
    }
  return obj
}