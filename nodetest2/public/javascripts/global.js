// Userlist data array for filling in the info box
var userListData = [];

// DOM Ready 
$(document).ready(function(){
    // Populate the user table on initial page load
    populateTable();
});

// Functions 

// Fill our table with data
function populateTable(){

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/users/userlist', function(data){


        // Stick our user data array into a userlist variable in the global object
        userListData = data;

        // For each item in the JSON, add a table row and cell to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '" title="Show Details">' + this.username + '</td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Show User info
function showUserInfo(event){

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    // Use the .map to apply a function to each object in our userListData array.
    // Returns a new array containing what the function returns
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

    // Get the User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(this.UserObject.age);
    $('#userInfoGender').text(this.UserObject.gender);
    $('#userInfoLocation').text(this.UserObject.location);
}