# Counter
Hello this is Counter, a site created using JavaScript.

![Screenshot 2022-02-09 165850](https://user-images.githubusercontent.com/51636003/153239199-e25f8909-cd14-4380-a51e-b1ccdcfcbf96.jpg)

The site consists of a simple presentation text on top
and the counter itself at the bottom.
The counter is formed by a <p> tag which contains the number,
and two buttons below that are used to increase or decrease the number inside <p>
 
![Screenshot 2022-02-09 160021](https://user-images.githubusercontent.com/51636003/153227778-d5b29ed8-a1b5-480d-8e02-ede7a26f397b.jpg)
 
 The two buttons call through the onclick attribute the functions add() and sub() from the script.js file.
 
 ![Screenshot 2022-02-09 164830](https://user-images.githubusercontent.com/51636003/153237137-d35f9215-9d30-448e-a754-f00e1b156ea7.jpg)
 
The two functions are basically the same,
they call from the DOM the innerHTML of the <p> element,
i.e. the number inside it, which is given to the count variable.
 
Then the value inside count is increased or decreased by 1,and finally reinserted inside <p> replacing the initial number.
 
Through this link you can reach the site
 -->https://lokzecounter.netlify.app<--
