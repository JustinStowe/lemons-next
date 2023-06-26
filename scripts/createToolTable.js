const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "Lemon-Tools",
  KeySchema: [
    //Partition Key
    { AttributeName: "name", KeyType: "HASH" },
  ],
  AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, function (error, data) {
  if (error)
    console.error("unable to create table:", JSON.stringify(error, null, 2));
  else
    console.log(
      "created table with description: ",
      JSON.stringify(data, null, 2)
    );
});
