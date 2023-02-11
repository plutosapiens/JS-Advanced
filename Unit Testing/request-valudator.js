//COUDN'T FIGURE IT OUT ON THE VIDEO. PLAY WITH IT SOME MORE

function requestValidator(request){
    const{method, uri, version, message} = request
    //make error message for diferent params
    const errorMessage = (typeOfParam) => {
        throw new Error('Invalid request header: Invalid ' + typeOfParam)
    }
//check if params are right
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    if(!validMethods.includes(method) || !method){
        (errorMessage('Method'))
    }
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if(!validVersions.includes(version) || !version){
        (errorMessage('Version'))
    }
    const uriPattern = /^([\w.])+$|^\*$/g
    //check the regex explanation bellow
    if(!uriPattern.exec(uri) || !uri){
        (errorMessage('URI'))
    }
    const forbidenSymbols = ['<', '>', '\\', '&', '\'', '"']
    //check for explanation on how to escape certain chars bellow
    console.log(message.split('').length)
    for(let symbol of forbidenSymbols){
        if(message.split('').includes(symbol) ){
        (errorMessage('Message'))
    }
    }

    return request
}

console.log
(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '\n'
  }
  ))

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ))




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