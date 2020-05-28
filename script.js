const questions = [{
    image: "https://i.pinimg.com/originals/c2/92/26/c29226627eef87f69b5813c7addc23b6.jpg",
    question: "you're auditioning for the school musical and really want the lead. you:",
    answer1: "practice hard",
    answer1Val: 1,
    answer2: "bully the competition",
    answer2Val: -1,
    type: 0
  },
  {
    image: "https://ih1.redbubble.net/image.1208498023.3111/st,small,507x507-pad,600x600,f8f8f8.jpg",
    question: "do you walk or stride?",
    answer1: "walk",
    answer1Val: -1,
    answer2: "stride",
    answer2Val: 1,
    type: 1
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Neko_Wikipe-tan.svg/1200px-Neko_Wikipe-tan.svg.png",
    question: "which is your preferred greeting?",
    answer1: "grrrrr",
    answer1Val: 1,
    answer2: "hello there",
    answer2Val: -1,
    type: 2
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hogwarts_model_studio_tour.jpg",
    question: "what's your hogwarts house?",
    answer1: "gryffindor, hufflepuff, ravenclaw",
    answer1Val: 1,
    answer2: "slytherin",
    answer2Val: -1,
    type: 0
  }
]

const alignments = {
  naf: '<b>you got SUPER CHIRGIN!</b><br>(Nice, Alpha, Feral)' + "<br><br>the perfect intersection of confidence, genuine care, and just the right amount of chaos. this is the ultimate life form, the apex of human development, the image in which God made Adam. cannot be improved upon. there are no recorded real-life examples of this personality type yet.",
  nat: '<b>you got GUARDIAN!</b><br>(Nice, Alpha, Tame)' + "being responsible can be a burden. you often find yourself taking charge in group situations, or being the voice of reason when someone you know is about to do something absurd or dangerous. you may be referred to as the &#34;mom friend&#34; within your friend group&#151;perhaps a title you embrace with zeal (baking cookies every week and encouraging your friends to sleep at reasonable hours), or perhaps one you resent slightly. you may also have an attachment to one or more NBTs, who you feel particularly duty-bound to protect. (is this a healthy relationship? only time will tell.)",
  nbf: '<b>you got TIER THREE SUB!</b><br>(Nice, Beta, Feral)' + "<br><br>a simp with an underlying sense of menace. you are extremely loyal to those you admire and care about, which can give way to possessiveness and jealousy if you're not careful. you will act on what you believe in, but your motivations are foggy at best, and you may often find yourself doing good deeds for bad reasons. because you care so deeply about what other people think of you, you compare yourself to others constantly, and you may not have the energy to focus on more than one or two people at a time&#151;this could lead to a neurotic spiral where you obsess over your interactions with a select few people and isolate yourself from the rest.",
  nbt: '<b>you got I\'\M BABY!</b><br>(Nice, Beta, Tame)' + "<br><br>the edenic apotheosis of purity and devotion. at the farthest end of the tame/feral spectrum, you are &#34;true baby&#34;&#151;soft and eager-to-please, unmarred by cynicism or greed, to be protected at all costs. if the T/F results are more evenly split, you are more likely a &#34;pseudo-baby&#34; (or &#34;simp&#34;)&#151;you have clear goals and motivations, perhaps even selfish ones, but you ultimately lack the edge that defines the NBF.<br><br>in either case, you are likely to be self-sacrificial, putting the needs of others over your own every time. you may spend a lot of time worrying if people genuinely like you, or convincing yourself that your constant good deeds (or gift-giving, or creative output) are the only reason people value you as a person.",
  maf: '<b>you got NIGHTMARE!</b><br>(Mean, Alpha, Feral)' + "<br><br>oh no. what will you do next. you are an unabashed maelstrom of impulsive decision-making and (probably ironic) aggression. will you start learning to throw knives? hack into your friend's twitter and start mass-posting fancams of perry the platypus? or&#151;god forbid&#151;COMPLIMENT SOMEONE?<br><br>because of your sporadic behavior (and maybe low attention span), you're unlikely to hold a grudge unless someone does something truly unforgivable. it's very possible that someone has done this to you in the past, unfortunately, but under most circumstances you don't actually feel even a fraction of the ferocity you project towards anyone. you do enjoy watching your friends squirm as you make a cursed joke very loudly in a library, though.",
  mat: '<b>you got SHARPAY EVANS!</b><br>Mean, Alpha, Tame)' + "<br><br>you are often the center of attention, and you have a flair for the dramatic&#151;maybe you have trouble expressing yourself without magnifying your emotions almost to the point of parody. your larger-than-life personality means you are quick to make both close friends and bitter enemies, and you will hold a grudge until the end of time. you have a strong competitive drive, which means you are likely very skilled at the things that interest you, but you have trouble taking the back seat. you would strongly consider dying for your friends. on wednesdays, you wear pink.",
  mbf: '<b>you got GOBLIN!</b><br>(Mean, Beta, Feral)' + "<br><br>the grotesque, malformed super-chirgin. a bundle of chaos tempered by fear, you are likely reclusive with a quiet explosiveness only known to your close friends. you probably aspire to be NAF, but insecurity or awkwardness has made your &#34;nice&#34; qualities manifest as submissive, and your &#34;alpha&#34; qualities as sarcastic and rabid. you may have a habit of overthinking or underthinking (or both) your behavior in your attempt to ascend to the ultimate personality type. also, your sleep schedule is terrible.",
  mbt: '<b>you got INCEL!</b><br>(Mean, Beta, Tame)' + "<br><br>emotions in a bottle. you often feel that the world is unfair to you, but you are unlikely to take action on those feelings. it's possible that you find it difficult to make close friends, because while you've mastered surface-level interactions, you find it challenging to be truly vulnerable without coming across as whiny. if you are upset with someone, there is a 0&#37; chance you will voice your complaints to them&#151;you'll just seethe silently until one of you drops dead. you often find yourself admiring people from afar, and perhaps your loneliness compels you to devote yourself entirely to a non-social craft or activity.",
};

let currentQuestion = 0;
let currentType = 0;
let scoreOptions = [0, 0];
let score = [0, 0, 0];
let quizContainer, resultContainer, question, option1, option2, nextButton, image, restartButton;

$(document).ready(function() {
  initElements();
  moveProgressBar();
  generateQuestion(currentQuestion);

  $('input[name="option"]:radio').click(function(e) {
    nextButton.prop('disabled', false);
  });

  nextButton.click(function(e) {
    const t = $('input[name="option"]:checked');
    score[currentType] += scoreOptions[t.val() - 1];

    t.prop('checked', false);
    if (currentQuestion == questions.length - 1) getResults();
    else {
      if (currentQuestion == questions.length - 2) nextButton.html("Finish");
      currentQuestion++;
      generateQuestion(currentQuestion);
    }
  });

  restartButton.click(function(){
    currentQuestion = 0;
    score = [0, 0, 0];
    location.reload();
  });
});

function initElements() {
  quizContainer = $('#quiz');
  resultContainer = $('#result');
  question = $('.question');
  option1 = $('.option1');
  option2 = $('.option2');
  nextButton = $('.next');
  restartButton = $('.restart');
  image = $("#quiz_image");
}

function generateQuestion(i) {
  const q = questions[i];

  nextButton.prop('disabled', true);
  image.attr("src", q.image);
  currentType = q.type;
  scoreOptions[0] = q.answer1Val;
  scoreOptions[1] = q.answer2Val;

  question.html(`${i + 1}. ${q.question}`);
  option1.html(q.answer1);
  option2.html(q.answer2);
}

function getResults() {
  let r = '';
  r += (score[0] > 0) ? 'n' : 'm';
  r += (score[1] > 0) ? 'a' : 'b';
  r += (score[2] > 0) ? 'f' : 't';
  quizContainer.hide();
  resultContainer.show();
  $('.result_title').html(r.toUpperCase());
  $('.result_body').html(alignments[r]);
}

function moveProgressBar() {
  let getPercent = 4/100;
  let getProgressWrapWidth = $('.progress-wrap').width();
  let progressTotal = getPercent * getProgressWrapWidth;
  $('.progress-bar').stop().animate({
    left: progressTotal
  }, 10);
}
