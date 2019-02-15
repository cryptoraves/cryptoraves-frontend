# cryptoraves


cryptoraves API is designated to service data to and from front-end web applications including the cryptoraves.space website.  The following will provide instruction on how to access that data:


Each web page can send one or more GET requests to the following endpoints. The response from the endpoints will contain a status code and message body which will contain the relevant data in JSON format.
 

Search Bar:

	The search bar will contain an autocomplete feature.  The user will type partial usernames into the search box and suggestions that fit those first characters will be displayed in a dropdown menu.  The data for that menu can be accessed by sending a GET request to this URL (note the query parameters):

	https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar


	Sample Response:

	{
		"statusCode": 200,
		"body": "{\"userList\": [\"@bp84392506\", \"@cartosys\", \"@cryptoraves\", \"@ShannonPlasters\"]}"
	}

	Note that the body is in string format that will need to be parsed with something like JSON.parse()


Confirmation page:


	The confirmation page table data can be obtained by a GET request to this URL with params:
	pageType=confirmationPage
	txnId=fe135c7c-7f6e-4640-8719-2aceb9b692ea  (example)

	https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnId=fe135c7c-7f6e-4640-8719-2aceb9b692ea



	Sample Response:

	{
	  "statusCode": 200,
	  "body": "{\"tableRows\": [{\"txnId\": \"bdcb9517-729d-402a-85b3-0ab5528eb088\", \"from\": \"@bp84392506\", \"amount\": \"8.112\", \"to\": \"@ShannonPlasters\", \"status\": \"SUCCESS!\", \"txn_hash\": \"0x5d0d0e3473f92cdb2936af7d28c7ec02d7b096a8b7540fe6cc00b0a2abe92986\", \"message\": null, \"date\": \"2019-02-14 19:21:19\"}]}"
	}

Portfolio page:

	The confirmation page table data can be obtained by a GET request to this URL:


	pageType=confirmationPage
	userName=@bp84392506  (example)

	https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName=@bp84392506



	Sample Response:

	{
		"tableRows": [{
			"txnId": "bdcb9517-729d-402a-85b3-0ab5528eb088",
			"from": "@bp84392506",
			"amount": "-8.112",
			"to": "@ShannonPlasters",
			"date": "2019-02-14 19:21:19"
		}, {
			"txnId": "4f472b79-b274-4203-a42a-200221868c00",
			"from": "@bp84392506",
			"amount": "-8.113",
			"to": "@ShannonPlasters",
			"date": "2019-02-14 19:23:29"
		}, {
			"txnId": "1b7a89be-6166-4c6e-aed6-d8ee0c0c4c7c",
			"from": "@bp84392506",
			"amount": "-8.114",
			"to": "@ShannonPlasters",
			"date": "2019-02-14 19:35:17"
		}, {
			"txnId": "6294f436-678e-4bf0-a4cc-50ac8a79a259",
			"from": "@bp84392506",
			"amount": "-8.115",
			"to": "@ShannonPlasters",
			"date": "2019-02-14 19:38:53"
		}, {
			"txnId": "fe135c7c-7f6e-4640-8719-2aceb9b692ea",
			"from": "@cryptoraves",
			"amount": "1000000",
			"to": "@bp84392506",
			"date": "2019-02-14 19:48:37"
		}],
		"rowCount": 5,
		"tokenBalance": "999967.546"
	}

	I've de-stringified the body content here for easier readability. It will be a string like the others when testing.

