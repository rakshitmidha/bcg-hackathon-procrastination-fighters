// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
//
// AWS.config.loadFromPath('./aws_config.json');
//
// AWS.config.update({
//   region: awsmobile.aws_cognito_region
// });
//
// // Create DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//
// var score;
//
// var last_heartrate;
//
// var params = {
//   TableName: 'procrastination',
//   ProjectionExpression: 'score ,last_heartrate',
//   KeyConditionExpression: "row_id = :v1",
//   ExpressionAttributeValues: {
//     ":v1": {S: "latest"}
//   }
// };
//
// ddb.query(params, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     data.Items.forEach(function (element, index, array) {
//
//       score = element.score.S;
//       last_heartrate = element.last_heartrate.S;
//
//       console.log(element.score.S + " (" + element.last_heartrate.S + ")");
//     });
//   }
// });
//
// export {score};
