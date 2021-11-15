function check()
{
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    
var names=["JEON JEONGGUK(JK)","KIM TAEHYUNG(V)", "PARK JIMIN(JIMIN)","KIM NAMJOON(RM)","JUNG HOSEOK(J-HOPE)","MIN YOONGI(SUGA)","KIM SEOKJIN(JIN)" , "     "];

var pictures=["pictures/jk.jpg","pictures/v.jpg","pictures/jimin.jpg","pictures/rm.jpg","pictures/jhope.jpg","pictures/suga.jpg","pictures/jin.jpg","pictures/error.jpg"];

var description=["You have pretty high competitive spirit. You don't like losing and if you do lose in something, you try your best to perfect it. You also seem to be Independent and Introvert-type.",
"You are extremely friendly and cheerful and you like spending times with other people, rather than staying alone. You do things without being afraid of what people may talk about you. ",
"Though you are a cheerful and playful person, but you also are sensitive and have great deals of introvert within you, especially your caring personality and your tendency to hide your emotions.",
"You like to think deep and observe things. You are humble-type of person with many mature thoughts and ideas. You are extremely dedicated to your work and have leadership qualities. ",
"You are an extremely cheerful and positive person who brings hope to people. You have an extrovert personality. You are serious when you need to focus on something you like.",
"You are an introvert. You like sleeping but are extremely active when doing something you like. you are ambitious and always bring out your best in becoming perfect. ",
"You are confident and fun loving person. You like to be free and relaxed and like to take care of yourself. You accept your flaws and work hard to improve them.",
"PLEASE SELECT ONE FIELD FROM EACH QUESTION"];



var range;
if((question1=="Black"||question1=="White") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Summer"))
{
   range=0;
}
else if((question1=="Green") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Autumn"||question5=="Winter"))
{
    range=1;
}
else if((question1=="Blue"||question1=="Black"||question1=="Purple") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Winter"||question5=="Summer"))
{
    range=2;
}
else if((question1=="Black"||question1=="Purple") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music")  && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Autumn"||question5=="Spring"))
{
    range=3;
}
else if((question1=="Green") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Spring"||question5=="Summer"))
{
    range=4;
}
else if((question1=="White") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Autumn"||question5=="Spring"||question5=="Winter"))
{
    range=5;
}
else if((question1=="Blue") && (question2=="Read books"||question2=="Watch TV"||question2=="Play video game"||question2=="Sleep"||question2=="Listen music") && (question3=="Basketball"||question3=="Football"||question3=="Badminton"||question3=="Table Tennis") && (question4=="Enthusiastic"||question4=="Kind"||question4=="Funny"||question4=="Talented"||question4=="Hard-Working") && (question5=="Autumn"||question5=="Spring"))
{
    range=6;
}
else{
    range=7;
}

   document.getElementById("after_submit").style.visibility="visible";

   document.getElementById("name").innerHTML=names[range];

   document.getElementById("description").innerHTML=description[range];
   
   document.getElementById("picture").src=pictures[range];

      
}