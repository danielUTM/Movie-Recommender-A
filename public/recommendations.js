
//Populates the movies
$(function(){
    var e = 0.3;
    var randomGreedy = Math.random();
    $.get("/getRecommendations", function(result){
        var random = Math.floor(Math.random() * (6));
        //prints JSON into hello p placeholder
        //$('#hello').html(JSON.stringify(result));
        
        //Prints databse query to relevant placeholder
        //Movie 1 Data
        $('#m1Title').html(result[random]["title"] + ' - id: ' +result[0]['id']);
        $('#m1Runtime').html( 'Runtime '+ result[random]["runtime"]+' mins');
        if(result[random]["budget"] == 0){
            $('#m1Budget').html('Budget: Unknown');
        }else{
            $('#m1Budget').html('Budget: ' + result[1]["budget"]);
        }
        if(result[random]["revenue"] == 0){
            $('#m1Revenue').html('Revenue: Unknown');
        }else{
            $('#m1Revenue').html('Revenue: ' + result[random]["revenue"]);
        }
        $('#m1AvgVote').html( 'Average Rating: ' + result[random]["vote_average"] + '/10');
        $('#m1VoteCount').html('Number of Ratings: ' + result[random]["vote_count"]);
        $('#m1Description').html(result[random]["description"]);
        $('#m1Image').attr("href", result[random]["imageURL"]);

        //Movie 2 Data
        $('#m2Title').html(result[random+1]["title"] + ' - id: ' +result[1]['id']);
        $('#m2Runtime').html( 'Runtime '+ result[random+1]["runtime"]+' mins');
        if(result[random+1]["budget"] == 0){
            $('#m2Budget').html('Budget: Unknown');
        }else{
            $('#m2Budget').html('Budget: ' + result[random+1]["budget"])
        }
        if(result[random+1]["revenue"] == 0){
            $('#m2Revenue').html('Revenue: Unknown');
        }else{
            $('#m2Revenue').html('Revenue: ' + result[random+1]["revenue"]);
        }
        $('#m2AvgVote').html( 'Average Rating: ' + result[random+1]["vote_average"] + '/10');
        $('#m2VoteCount').html('Number of Ratings: ' + result[random+1]["vote_count"]);
        $('#m2Description').html(result[random+1]["description"]);
        $('#m2Image').attr("href", result[random+1]["imageURL"]);

        //Seeing if it should explore with probability e
        //Don't Explore
       if(randomGreedy > e){
            //Movie 3 Data
            $('#m3Title').html(result[random+2]["title"] + ' - id: ' +result[random+2]['id']);
            $('#m3Runtime').html( 'Runtime '+ result[random+2]["runtime"]+' mins');
            if(result[random+2]["budget"] == 0){
                $('#m3Budget').html('Budget: Unknown');
            }else{
                $('#m3Budget').html('Budget: ' + result[random+2]["budget"])
            }
            if(result[random+2]["revenue"] == 0){
                $('#m3Revenue').html('Revenue: Unknown');
            }else{
                $('#m3Revenue').html('Revenue: ' + result[random+2]["revenue"]);
            }
            $('#m3AvgVote').html( 'Average Rating: ' + result[random+2]["vote_average"] + '/10');
            $('#m3VoteCount').html('Number of Ratings: ' + result[random+2]["vote_count"]);
            $('#m3Description').html(result[random+2]["description"]);
            $('#m3Image').attr("href", result[random+2]["imageURL"]);
        //Explore
       }else{
           $.get('/getAllMovies', function(result){
               //Movie 3 Data
                $('#m3Title').html(result[random]["title"] + ' - id: ' +result[random]['id']);
                $('#m3Runtime').html( 'Runtime '+ result[random]["runtime"]+' mins');
                if(result[random]["budget"] == 0){
                    $('#m3Budget').html('Budget: Unknown');
                }else{
                    $('#m3Budget').html('Budget: ' + result[random]["budget"])
                }
                if(result[random]["revenue"] == 0){
                    $('#m3Revenue').html('Revenue: Unknown');
                }else{
                    $('#m3Revenue').html('Revenue: ' + result[random]["revenue"]);
                }
                $('#m3AvgVote').html( 'Average Rating: ' + result[random]["vote_average"] + '/10');
                $('#m3VoteCount').html('Number of Ratings: ' + result[random]["vote_count"]);
                $('#m3Description').html(result[random]["description"]);
                $('#m3Image').attr("href", result[random]["imageURL"]);
                $('#m3Explanation').html('This was chosen as we wanted to explore your preferences.');
           })
       }




        //Incase you want to put the results in a table
        // var obj = result;
        // for(var i=0; i<obj.length; i++){
        //     var tr="<tr>";
        //     var td1="<td>"+obj[i]["id"]+"</td>";
        //     var td2="<td>"+obj[i]["title"]+"</td></tr>";
        // }
        // $("#place-here").append(tr+td1+td2);

    });

    //GET Reuquest to get user ratings for explanations
    $.get('/getRatings', function(result){
        //Number of stars given
        var stars = result[result.length-1]["button"].charAt(5);
        var title = "";
        //Group 1 Movie
        if(result[result.length-1]["button"].charAt(1) == 1){
            if(result[result.length-1]["button"].charAt(3) == 1){
                title = "Blade Runner";
            }else if(result[result.length-1]["button"].charAt(3) == 2){
                title = "What Happened to Monday";
            }else{
                title = "Whiplash";
            }
        //Group 2 Movie
        }else if(result[result.length-1]["button"].charAt(1) == 2){
            if(result[result.length-1]["button"].charAt(3) == 1){
                title = "The Circle";
            }else if(result[result.length-1]["button"].charAt(3) == 2){
                title = "The Bad Batch";
            }else{
                title = "Wish Upon";
            }
        //Group 3 Movie
        }else if(result[result.length-1]["button"].charAt(1) == 3){
            if(result[result.length-1]["button"].charAt(3) == 1){
                title = "Baby Driver";
            }else if(result[result.length-1]["button"].charAt(3) == 2){
                title = "John Wick";
            }else{
                title = "Alien: Covenant";
            }
        //Group 4 Movie
        }else if(result[result.length-1]["button"].charAt(1) == 4){
            if(result[result.length-1]["button"].charAt(3) == 1){
                title = "Captain Underpants: The First Epic Movie";
            }else if(result[result.length-1]["button"].charAt(3) == 2){
                title = "Self/less";
            }else{
                title = "Boyka: Undisputed IV";
            }
        //Group 5 Movie
        }else if(result[result.length-1]["button"].charAt(1) == 5){
            if(result[result.length-1]["button"].charAt(3) == 1){
                title = "Minions";
            }else if(result[result.length-1]["button"].charAt(3) == 2){
                title = "Wonder Woman";
            }else{
                title = "Beauty and the Beast";
            }
        };

        //Adding explanation to webpage
        //Not currently used
        $.get('/getTable', function(result){
            var age = "";
            var gender = "";
            //Getting Age and Gender of user
            $.get('/userAgeAndGender', function(result2){
                age = result2[0];
                gender = result2[1];

                var explanation = `- We have grouped similar movies based on budget, popularity, revenue, vote average and number of votes. ` + `</br></br> - We take into consideration the IMDb ratings depending on age and gender.` + `</br> </br> - This movie is from the group of movies we think are most suited to you as you ranked ` + title + ` with ` + stars + ` stars and ` + gender + `s in the age bracket ` + age + ` also liked this movie.` + `</br> </br> - When you say you don’t like this recommendation, we are less likely to show similar movies like it. If you like the recommendation then we are more likely to show similar movies.` + `</br></br> - We put all this information into a big table and use this information to choose which movies get recommended to you.`
                $('#m1Explanation').html(explanation);
                $('#m2Explanation').html(explanation);
                $('#m3Explanation').html(explanation);
            });

           
        })
    })

})

//get User Behaviour Database data
function getUserBehaviourDatabase(){
    $.get('/getUserBehaviour', function(result){
        console.log(result);
    })
}

//get Users Database data
function getUserDatabase(){
    $.get('/getUsers', function(result){
        console.log(result);
    })
}

// $(function() {
//     $.get("/getRecommendations", function(result){
//         console.log(result);
//     })
    
// })

//Buttons to see explanations for movies
// Not currently used
$(function(){
    //Once Movie 1 button is clicked
    $('#m1btn').click(function(){
        //Shows the m1Explanation div
        $('#m1Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });

    //Once Movie 2 button is clicked
    $('#m2btn').click(function(){
        //Shows the m1Explanation div
        $('#m2Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });

    //Once Movie 3 button is clicked
    $('#m3btn').click(function(){
        //Shows the m1Explanation div
        $('#m3Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });
})