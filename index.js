const aws = require('aws-amplify')

const createLocation = `mutation CreateLocation($input: CreateLocationInput) {
	createLocation(input: $input) {
		id
		Area_Code
		Department
		Market
		Market_Size
	}
}`

const aws_exports = {
	"aws_appsync_graphqlEndpoint": "https://uh3zyd7uezegxmeiml7oxwd47y.appsync-api.eu-central-1.amazonaws.com/graphql",
	"aws_appsync_apiKey":"da2-yex5kqpuxbc7bohat6efadjthu"
}

const params = {
	id: 55555,
	Area_Code: 55555,
}
aws.default.configure(aws_exports)
aws.API.graphql(aws.graphqlOperation(createLocation, params))
	.then(function(data) { console.log(data) })
	.catch(function(err) { console.log(data) })


