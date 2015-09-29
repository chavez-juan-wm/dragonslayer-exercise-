/*
  Created by session2 on 9/28/15.
 */

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound;
//I added health for you and the dragon
var health = 10;
var enemyHealth = 10;

//Asks the user if they want to play. If not the program ends, if yes then the program runs
var play = confirm("Are you ready to fight a dragon!?");
if(play)
{
    alert("Both you and the dragon start off with 10 health. Good luck!");
    while (slaying)
    {
        if (youHit)
        {
            damageThisRound = Math.floor(Math.random() * 5 + 1);
            enemyHealth -= damageThisRound;

            //If you get negative health it sets it to 0
            if (enemyHealth < 0)
                enemyHealth = 0;

            alert("Your health: " + health + "    Dragon's health: " + enemyHealth + "\n\nYou hit the dragon dealing " + damageThisRound + " damage!");

            if (enemyHealth == 0)
            {
                alert("You slayed the dragon!");
                alert("You are now a dragon slayer!");
                slaying = false;
            }
            else
                youHit = Math.floor(Math.random() * 2);
        }
        else
        {
            damageThisRound = Math.floor(Math.random() * 5 + 1);
            health -= damageThisRound;

            if (health < 0)
                health = 0;

            alert("Your health: " + health + "    Dragon's health: " + enemyHealth + "\n\nThe dragon hit you dealing " + damageThisRound + " damage!");

            if (health == 0)
            {
                alert("The dragon defeated you!");
                slaying = false;
            }
            youHit = Math.floor(Math.random() * 2);
        }
    }
}
else
    alert("Ok see you next time!");