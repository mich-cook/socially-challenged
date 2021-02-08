const AWS = require("aws-sdk");

const REGION = process.env.GATSBY_REGION;
const IDENTITY_POOL_ID = process.env.GATSBY_IDENTITY_POOL_ID;

// Initialize the Amazon Cognito credentials provider
AWS.config.region = REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  "IdentityPoolId": IDENTITY_POOL_ID
});

// lambda object for invoking functions
const lambda = new AWS.Lambda({ "apiVersion": "2015-03-31" });

export const createChallenge = (payload) => {

  if (payload === undefined) {
    // handle better
    return "ERROR";
  }

  const FUNCTION_NAME = process.env.GATSBY_FUNCTION_NAME;

  const params = {
    "FunctionName" : FUNCTION_NAME,
    "InvocationType" : "RequestResponse",
    "LogType" : "None",
    "Payload": JSON.stringify(payload)
  };

  lambda.invoke(params, function(err, data) {
    if (err) {
      // TODO
      console.log(err);
    } else {
      // TODO
      console.log(data);
    }
  });

};

export const updateChallenge = () => {};
export const deleteChallenge = () => {};

// rough thoughts on how to handle which: 
//  "MINE" - challenges I created
//  "JOINED" - challenges I joined (but didn't create?)
//  "LATEST" - latest public challenges that I haven't joined, but can still join
//  "POPULAR" - most popular (metric TBD) challenges still open to join
export const getChallenges = (which) => {};
