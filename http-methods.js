var GET;
// The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
GET /api/customers
//Response:
// [
//     {id: 1, name: 'shivi'},
//     {id: 1, name: 'shivangi'},
   
// ]
GET /api/customers/1
//Response:
// [
//     {id: 1, name: 'shivi'},
      
// ]

var POST;
// A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
PUT /api/customers/1
//Body:
//{ name: ''}
//Response:
//{ id: 1, name:''}

var PUT;
// Replaces or update all current representations of the target resource with the uploaded content.
PUT /api/customers/1
//Body:
//{ name: ''}
//Response:
//{ id: 1, name:''}


var DELETE;
// Removes all current representations of the target resource given by a URI.
DELETE /api/customers/1

