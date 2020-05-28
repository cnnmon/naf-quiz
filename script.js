const questions = [{
    image: "https://i.pinimg.com/originals/c2/92/26/c29226627eef87f69b5813c7addc23b6.jpg",
    question: "you're participating in your school's musical audition. you:",
    answer1: "practice hard to get the lead",
    answer1Val: [1, 1, 0],
    answer2: "bully your competition to make them quit",
    answer2Val: [-1, 1, 0],
    answer3: "accompany the last-second auditioners",
    answer3Val: [1, -1, 0],
    answer4: "spy on the auditions from behind a mop",
    answer4Val: [-1, -1, 0]
  },
  {
    image: "https://ih1.redbubble.net/image.1208498023.3111/st,small,507x507-pad,600x600,f8f8f8.jpg",
    question: "do you walk or stride?",
    answer1: "walk",
    answer1Val: [0, -1, -1],
    answer2: "stride",
    answer2Val: [0, 1, -1],
    answer3: "skateboard. skate or die. either you skate, or you die.",
    answer3Val: [0, 1, 1],
    answer4: "i don't go outside",
    answer4Val: [0, -1, 1]
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hogwarts_model_studio_tour.jpg",
    question: "what's your hogwarts house?",
    answer1: "gryffindor",
    answer1Val: [1, 0, 1],
    answer2: "ravenclaw",
    answer2Val: [-1, 0, -1],
    answer3: "hufflepuff",
    answer3Val: [1, 0, -1],
    answer4: "slytherin",
    answer4Val: [-1, 0, 1]
  },
  {
    image: "https://images.nintendolife.com/2e8fef0221f89/sans-undertale.original.jpg",
    question: "how would you describe your bones?",
    answer1: "supple",
    answer1Val: [0, 1, -1],
    answer2: "brittle",
    answer2Val: [0, -1, 1],
    answer3: "juicy",
    answer3Val: [0, 1, 1],
    answer4: "they're just... bones...???",
    answer4Val: [0, -1, -1]
  },
  {
    image: "https://pbs.twimg.com/media/EXAe3DNUEAAOzfc?format=jpg&name=900x900",
    question: "you and your friends are starting a school idol group! what will you be responsible for?",
    answer1: "singing",
    answer1Val: [0, -1, 1],
    answer2: "costumes",
    answer2Val: [0, -1, -1],
    answer3: "composing",
    answer3Val: [0, 1, -1],
    answer4: "publicity",
    answer4Val: [0, 1, 1]
  },
  {
    image: "https://vignette.wikia.nocookie.net/youtube/images/9/9d/Otvappearance.jpeg/revision/latest?cb=20200227012100",
    question: "which of these is your favorite OfflineTV member?",
    answer1: "scarra",
    answer1Val: [1, 0, -1],
    answer2: "Disguised Toast",
    answer2Val: [-1, 0, -1],
    answer3: "LilyPichu",
    answer3Val: [1, 0, 1],
    answer4: "Michael Reeves",
    answer4Val: [-1, 0, 1]
  },
  {
    image: "https://cdn.discordapp.com/attachments/552143949507198998/715449564454453248/Screen_Shot_2020-05-28_at_2.21.05_AM.png",
    question: "who would win in a fight: cabi or miyo?",
    answer1: "cabi (she is short)",
    answer1Val: [1, 1, 0],
    answer2: "miyo (he is part cat)",
    answer2Val: [-1, -1, 0],
    answer3: "i would punt them both into the sun",
    answer3Val: [-1, 0, 1],
    answer4: "they would probably team up and obliterate me",
    answer4Val: [1, -1, 0]
  },
  {
    image: "https://shakeuplearning.com/wp-content/uploads/2018/05/Copy-of-How-to-Plan-an-Awesome-Book-Study.png",
    question: "what's your ideal college major?",
    answer1: "computer science (bad)",
    answer1Val: [-1, 0, 1],
    answer2: "econ",
    answer2Val: [-1, 0, -1],
    answer3: "music",
    answer3Val: [1, 0, 1],
    answer4: "b o o k  s t u d y",
    answer4Val: [1, 0, -1]
  },
  {
    image: "https://shakeuplearning.com/wp-content/uploads/2018/05/Copy-of-How-to-Plan-an-Awesome-Book-Study.png",
    question: "who is the best doki doki b o o k  s t u d y girl? there IS a right answer.",
    answer1: "Sayori",
    answer1Val: [1, -1, 0],
    answer2: "Natsuki",
    answer2Val: [-1, -1, 0],
    answer3: "Yuri",
    answer3Val: [1, 1, 0],
    answer4: "Monika",
    answer4Val: [-1, -1, 0]
  },
  {
    image: "https://cdn.discordapp.com/attachments/552143949507198998/715423270265946152/Screen_Shot_2020-05-28_at_12.36.34_AM.png",
    question: "who is the best doki doki b o o k  s t u d y girl? there IS a right answer.",
    answer1: "Sayori",
    answer1Val: [0, 0, 0],
    answer2: "Natsuki",
    answer2Val: [0, 0, 0],
    answer3: "Yuri",
    answer3Val: [0, 0, 0],
    answer4: "Monika",
    answer4Val: [0, 0, 0]
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Neko_Wikipe-tan.svg/1200px-Neko_Wikipe-tan.svg.png",
    question: "which is your preferred greeting?",
    answer1: "yike",
    answer1Val: [-1, 0, -1],
    answer2: "hello there",
    answer2Val: [1, 0, -1],
    answer3: "cone knee chee waaaaaaah/ohio goes eye mass",
    answer3Val: [1, 0, 1],
    answer4: "good morning gamers! welcome to my minecraft let's play. in this episode, we're gonna be going to the nether, but before we get into it, i have a word from today's sponsor: RAID: Shadow Legends&#153;. RAID: Shadow Legends&#153; is an immersive online experience with everything you'd expect from a brand new RPG title. It's got an amazing storyline, awesome 3D graphics, giant boss fi",
    answer4Val: [-1, 0, 1]
  },
  {
    image: "https://cdn.discordapp.com/attachments/552143949507198998/715447855825027072/Screen_Shot_2020-05-28_at_2.14.16_AM.png",
    question: "which of these emoji do you vibe with?",
    answer1: "A",
    answer1Val: [-1, 1, 0],
    answer2: "B",
    answer2Val: [1, 1, 0],
    answer3: "C",
    answer3Val: [1, -1, 0],
    answer4: "D",
    answer4Val: [-1, -1, 0]
  },
  {
    image: "https://thumbs.gfycat.com/OfficialRelievedHypsilophodon-size_restricted.gif",
    question: "what are you most likely to post on your twitter account?",
    answer1: "memes",
    answer1Val: [0, -1, 1],
    answer2: "loona fancams (stan loona)",
    answer2Val: [0, 1, 1],
    answer3: "post cute selfies :)",
    answer3Val: [0, 1, -1],
    answer4: "i hate social media.",
    answer4Val: [0, -1, -1]
  },
  {
    image: "https://pbs.twimg.com/media/D4n-OBiW0AEF4pS?format=png&name=small",
    question: "which song resonates with you the most?",
    answer1: "Toby Fox - Megalovania",
    answer1Val: [0, 0, 1],
    answer2: "西木野 真姫 - Snow Halation",
    answer2Val: [0, 0, -1],
    answer3: "miyowolowophowone - Spring is in the Air ft. leg (feet. cabi)",
    answer3Val: [0, 1, 1],
    answer4: "LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem",
    answer4Val: [0, 0, -1]
  },
  {
    image: "https://static01.nyt.com/images/2020/05/26/world/26italy-bear-promo/26italy-bear-promo-videoSixteenByNineJumbo1600.jpg",
    question: "you are attacked by a bear. what do you do?",
    answer1: "scream and run",
    answer1Val: [0, -1, 0],
    answer2: "slowly caress its cheek with your fingernail and wink",
    answer2Val: [0, 1, 0],
    answer3: "bribe it with warm hard cash [editor's note: why is it warm?]",
    answer3Val: [0, 1, 0],
    answer4: "fortnite default dance",
    answer4Val: [0, -1, 0]
  },
  {
    image: "https://cdn.discordapp.com/attachments/552143949507198998/715447882014130296/unknown.png",
    question: "what do you think of this quiz? :)",
    answer1: "i love it :) thanks for coding this entire website from scratch :)",
    answer1Val: [1, 0, 0],
    answer2: "it's an abomination and you should be ashamed",
    answer2Val: [-1, 0, 0],
    answer3: "i'm just in shock honestly",
    answer3Val: [1, 0, 0],
    answer4: "*fortnite default dance*",
    answer4Val: [-1, 0, 0]
  }

]

const alignments = {
  naf: {
    title: "SUPER CHIRGIN",
    alignment: "nice alpha feral",
    image: "art/naf.png",
    description: "the perfect intersection of confidence, genuine care, and just the right amount of chaos. this is the ultimate life form, the apex of human development, the image in which God made Adam. cannot be improved upon. there are no recorded real-life examples of this personality type yet."
  },
  nat: {
    title: "GUARDIAN",
    alignment: "nice alpha tame",
    image: "art/nat.png",
    description: "being responsible can be a burden. you often find yourself taking charge in group situations, or being the voice of reason when someone you know is about to do something absurd or dangerous. you may be referred to as the &#34;mom friend&#34; within your friend group&#151;perhaps a title you embrace with zeal (baking cookies every week and encouraging your friends to sleep at reasonable hours), or perhaps one you resent slightly. you may also have an attachment to one or more NBTs, who you feel particularly duty-bound to protect. (is this a healthy relationship? only time will tell.)"
  },
  nbf: {
    title: "TIER THREE SUB",
    alignment: "nice beta feral",
    image: "art/nbf.png",
    description: "a simp with an underlying sense of menace. you are extremely loyal to those you admire and care about, which can give way to possessiveness and jealousy if you're not careful. you will act on what you believe in, but your motivations are foggy at best, and you may often find yourself doing good deeds for bad reasons. because you care so deeply about what other people think of you, you compare yourself to others constantly, and you may not have the energy to focus on more than one or two people at a time&#151;this could lead to a neurotic spiral where you obsess over your interactions with a select few people and isolate yourself from the rest."
  },
  nbt: {
    title: "I'M BABY",
    alignment: "nice beta tame",
    image: "art/nbt.png",
    description: "the edenic apotheosis of purity and devotion. at the farthest end of the tame/feral spectrum, you are &#34;true baby&#34;&#151;soft and eager-to-please, unmarred by cynicism or greed, to be protected at all costs. if the T/F results are more evenly split, you are more likely a &#34;pseudo-baby&#34; (or &#34;simp&#34;)&#151;you have clear goals and motivations, perhaps even selfish ones, but you ultimately lack the edge that defines the NBF.<br><br>in either case, you are likely to be self-sacrificial, putting the needs of others over your own every time. you may spend a lot of time worrying if people genuinely like you, or convincing yourself that your constant good deeds (or gift-giving, or creative output) are the only reason people value you as a person."
  },
  maf: {
    title: "NIGHTMARE",
    alignment: "mean alpha feral",
    image: "art/maf.png",
    description: "oh no. what will you do next. you are an unabashed maelstrom of impulsive decision-making and (probably ironic) aggression. will you start learning to throw knives? hack into your friend's twitter and start mass-posting fancams of perry the platypus? or&#151;god forbid&#151;COMPLIMENT SOMEONE?<br><br>because of your sporadic behavior (and maybe low attention span), you're unlikely to hold a grudge unless someone does something truly unforgivable. it's very possible that someone has done this to you in the past, unfortunately, but under most circumstances you don't actually feel even a fraction of the ferocity you project towards anyone. you do enjoy watching your friends squirm as you make a cursed joke very loudly in a library, though."
  },
  mat: {
    title: "SHARPAY EVANS",
    alignment: "mean alpha tame",
    image: "art/mat.png",
    description: "you are often the center of attention, and you have a flair for the dramatic&#151;maybe you have trouble expressing yourself without magnifying your emotions almost to the point of parody. your larger-than-life personality means you are quick to make both close friends and bitter enemies, and you will hold a grudge until the end of time. you have a strong competitive drive, which means you are likely very skilled at the things that interest you, but you have trouble taking the back seat. you would strongly consider dying for your friends. on wednesdays, you wear pink."
  },
  mbf: {
    title: "GOBLIN",
    alignment: "mean beta feral",
    image: "art/mbf.png",
    description: "the grotesque, malformed super-chirgin. a bundle of chaos tempered by fear, you are likely reclusive with a quiet explosiveness only known to your close friends. you probably aspire to be NAF, but insecurity or awkwardness has made your &#34;nice&#34; qualities manifest as submissive, and your &#34;alpha&#34; qualities as sarcastic and rabid. you may have a habit of overthinking or underthinking (or both) your behavior in your attempt to ascend to the ultimate personality type. also, your sleep schedule is terrible."
  },
  mbt: {
    title: "INCEL",
    alignment: "mean beta tame",
    image: "art/mbt.png",
    description: "emotions in a bottle. you often feel that the world is unfair to you, but you are unlikely to take action on those feelings. it's possible that you find it difficult to make close friends, because while you've mastered surface-level interactions, you find it challenging to be truly vulnerable without coming across as whiny. if you are upset with someone, there is a 0&#37; chance you will voice your complaints to them&#151;you'll just seethe silently until one of you drops dead. you often find yourself admiring people from afar, and perhaps your loneliness compels you to devote yourself entirely to a non-social craft or activity."
  }
};

let currentQuestion = 0;
let currentType = 0;
let score = [0, 0, 0];
let quizContainer, resultContainer, question, option1, option2, option3, nextButton, image, restartButton;

$(document).ready(function() {
  initElements();
  moveProgressBar();
  generateQuestion(currentQuestion);

  $('input[name="option"]:radio').click(function(e) {
    nextButton.prop('disabled', false);
  });

  nextButton.click(function(e) {
    const t = $('input[name="option"]:checked');
    const tScore = questions[currentQuestion]["answer" + (t.val()).toString() + "Val"];
    for (let i = 0; i < score.length; i++) score[i] += tScore[i];
    t.prop('checked', false);
    if (currentQuestion == questions.length - 1) getResults();
    else {
      if (currentQuestion == questions.length - 2) nextButton.html("Finish");
      currentQuestion++;
      generateQuestion(currentQuestion);
    }
  });

  restartButton.click(function() {
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
  option3 = $('.option3');
  option4 = $('.option4');
  nextButton = $('.next');
  restartButton = $('.restart');
  image = $("#quiz_image");
}

function generateQuestion(i) {
  const q = questions[i];

  nextButton.prop('disabled', true);
  image.attr("src", q.image);
  currentType = q.type;
  question.html(`${i + 1}. ${q.question}`);
  option1.html(q.answer1);
  option2.html(q.answer2);
  option3.html(q.answer3);
  option4.html(q.answer4);
}

function getResults() {
  let r = '';
  //randomizes
  for (let i = 0; i < score.length; i++)
    if (score[i] === 0) score[i] = Math.round(Math.random()) * 2 - 1;
  r += (score[0] > 0) ? 'n' : 'm';
  r += (score[1] > 0) ? 'a' : 'b';
  r += (score[2] > 0) ? 'f' : 't';
  quizContainer.hide();
  resultContainer.show();
  const a = alignments[r];

  $('.result_title').html("<span style='background-color: var(--salmon)'>" + r.toUpperCase() + ": " + a.title + "</span>");
  $('#result_image').attr("src", a.image);
  $('.result_alignment').html(a.alignment);
  $('.result_body').html(a.description);
}

function moveProgressBar() {
  let getPercent = 4 / 100;
  let getProgressWrapWidth = $('.progress-wrap').width();
  let progressTotal = getPercent * getProgressWrapWidth;
  $('.progress-bar').stop().animate({
    left: progressTotal
  }, 10);
}
