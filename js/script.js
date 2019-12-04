const mainDiv = $('<div></div>').addClass('wrapper');
mainDiv.appendTo('body');

const input = $('<input>').attr({
  'id': 'searchInput',
  'type': 'text',
  'placeholder': 'Search(16pt)'
});
input.appendTo(mainDiv);

const imgsMainWrap = $('<div></div>').addClass('imgsWrapper');
imgsMainWrap.appendTo(mainDiv);

const captions = [
  '',
  'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
  'The lake was so calm today. We had a great view of the snow on the mountains from here.',
  'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
  'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
  'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
  'Fall is coming, I love when the leaves on the trees start to change color.',
  'I drove past this plantation yesterday, everything is so green!',
  'My summer vacation to the Oregon Coast. I love the sandy dunes!',
  'We enjoyed a quiet stroll down this countryside lane.',
  'Sunset at the coast! The sky turned a lovely shade of orange.',
  'I did a tour of a cave today and the view of the landscape below was breathtaking.',
  'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
]


// input.on('keyup', function() {  
//   // const inputValue = $(input).val().toLowerCase();
//   const inputValue = $(this).val().toLowerCase();
//   imgsMainWrap.children().hide();

//   const links = imgsMainWrap.find("a").filter("[data-title*='" + inputValue + "']");
//   if (links.length > 0) {
//     links.parent().show();
//   }
//   if(inputValue === ''){
//       imgsMainWrap.children().show();
//   }  
// });

input.on('keyup', function() {  
  let links = $('.imgsWrapper a');
  links.each(function(index) { 
    const inputValue = $(input).val().toLowerCase();
    if($(this).attr('data-title').toLowerCase().indexOf(inputValue) != -1) {
      $(links).hide();
      $(this).show();
    }else {
      $(this).hide();
    }
  });
});



for (let i = 1; i <= 12; i++) {
  const innerImgWrapper = $('<div></div>').addClass('innerImgWrapper');
  $(innerImgWrapper).appendTo(imgsMainWrap);

  const links = $('<a></a>').attr({
    'href': 'photos/0' + [i] + '.jpg',
    'data-lightbox': 'images',
    'data-title': captions[i],
  });
  if (i > 9) {
    links.attr('href', 'photos/' + [i] + '.jpg');
  }
  $(links).appendTo(innerImgWrapper);
  
  const img = $('<img>').attr({
    'src': 'photos/0' + [i] + '.jpg'
  });
  if (i > 9) {
    img.attr({
      'src': 'photos/' + [i] + '.jpg'
    });
  }
  $(img).appendTo(links);
 }

lightbox.option();
