var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Say '${formData.noun1},' the photographer said as the camera flashed! ${formData.noun2} and I had gone to ${formData.noun3} to get our photos taken today. The first photo we really wanted was a picture of us dressed as ${formData.noun4} pretending to be a ${formData.noun5}  
  When we saw the proofs of it, I was a bit ${formData.verb1}  because it looked different than in my head. (I hadn't imagined so many ${formData.noun6} behind us.) However, the second photo was exactly what I wanted. We both looked like ${formData.verb2} wearing ${formData.verb3} and ${formData.verb4} --exactly what I had in mind!`
}

function generateStory2(formData){
  return `I just got back from a pizza party with ${formData.noun1}.Can you believe we got to eat ${formData.adjective1} pizza in ${formData.noun2}?! Everyone got to choose their own toppings. I made 
  ${formData.noun3} and ${formData.adjective2}  which is my favorite! They even stuffed the crust with ${formData.noun4} How ${formData.adjective3} If that wasn't good enough already, ${formData.noun4} was there singing ${formData.noun5} I was so inspired by the music, I had to get up out of my seat and ${formData.verb1}`
}

function generateStory3(formData){
  return `There once was a gingerbread man who had two ${formData.noun1} for eyes and a ${formData.noun2} He always said,'${formData.verb1} as fast as you can, you can't catch me I'm the gingerbread man.' One day he ran past a ${formData.adjective1} ${formData.noun4} , but they couldn't catch him. He kept running until he passed a ${formData.noun5}  but they couldn't catch him either. Suddenly, he came across a river near ${formData.noun6}.  
  How would he cross? Then he saw a ${formData.agjective2} ${formData.noun7} floating by. He jumped on it, but it was actually ${formData.adjective3} --who just so happened to love cookies :)`
}