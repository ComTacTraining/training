export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "training849744dd": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "predictions": {
        "textToSpeech": {
            "region": "string",
            "language": "string",
            "voice": "string"
        },
        "speechToText": {
            "region": "string",
            "language": "string"
        }
    }
}