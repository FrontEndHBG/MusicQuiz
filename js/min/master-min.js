var counter=0,score=0,questions=[{question:"Who wrote the song Walk On The Wild Side?",right_answer:"Lou Reed",wrong_answers:["Venga Boys","Daft Punk"]},{question:"When was the band Sugar Ray formed?",right_answer:"1986",wrong_answers:["1998","1956"]},{question:"Who wrote the song What A Wonderful World?",right_answer:"Luis Armstrong",wrong_answers:["Ella Fitzgerald","Billy Joel"]}];$("#nextQuestion").hide(),$("#goToResult").hide(),$("#resultPage").hide(),$("#question").hide(),$("#answers").hide(),$(function(){function e(e){var n=questions[e].wrong_answers;n.push(questions[e].right_answer),$("#question").text(questions[e].question);for(var t=0;t<n.length;t++)$("#answers ul").append("<li><input id='"+n[t]+"' type='radio' name='q"+e+"' value='"+n[t]+"'><label for='"+n[t]+"'>"+n[t]+"</label></li>")}$("#gameStart").on("click",function(){$("#nextQuestion").show(),$("#gameStart").remove(),$("#question").show(),$("#answers").show(),e()}),e(counter),$("#answers").submit(function(n){n.preventDefault(),$("#answers input:checked").val()===questions[counter].right_answer&&score++,counter++,$("#answers ul").empty(),counter===questions.length?($(".container").empty(),$(".container").append("<h1> You got "+score+" out of 3 correct")):e(counter)})});