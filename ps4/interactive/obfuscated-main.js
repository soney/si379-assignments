function _0x26f5(_0x270f52,_0x591cf6){const _0x5d7db0=_0x5d7d();return _0x26f5=function(_0x26f540,_0xedab13){_0x26f540=_0x26f540-0x11b;let _0x234e30=_0x5d7db0[_0x26f540];return _0x234e30;},_0x26f5(_0x270f52,_0x591cf6);}const _0x41e3cf=_0x26f5;function _0x5d7d(){const _0x177612=['incorrect','removeEventListener','append','10715730tvvqmT','innerText','response','597416ViZqag','add','now','innerHTML','1601655Fxpflb','true','92fxzetM','createElement','classList','querySelector','map','checked','#seconds-left','input','click','1024856RoAhpz','#progress-bar','156NTQxAc','3dmMzPD','42bnkNcb','correct','selected','#score','text','105981dQxHID','disabled','setAttribute','1314igijsF','remove','11385wWQKIh','round','Correct!','type','value','removeAttribute','json','9649845dsneKX','Seconds\x20left:\x20','question','Game\x20over!','label','#current-question-feedback','name','Sorry;\x20you\x20didn\x27t\x20get\x20it!'];_0x5d7d=function(){return _0x177612;};return _0x5d7d();}(function(_0x14a038,_0x380453){const _0x5aaac1=_0x26f5,_0x1e6bca=_0x14a038();while(!![]){try{const _0xc5530b=parseInt(_0x5aaac1(0x13b))/0x1*(-parseInt(_0x5aaac1(0x129))/0x2)+-parseInt(_0x5aaac1(0x141))/0x3*(-parseInt(_0x5aaac1(0x12f))/0x4)+parseInt(_0x5aaac1(0x146))/0x5*(-parseInt(_0x5aaac1(0x144))/0x6)+-parseInt(_0x5aaac1(0x13c))/0x7*(parseInt(_0x5aaac1(0x138))/0x8)+-parseInt(_0x5aaac1(0x11b))/0x9+parseInt(_0x5aaac1(0x126))/0xa+-parseInt(_0x5aaac1(0x12d))/0xb*(-parseInt(_0x5aaac1(0x13a))/0xc);if(_0xc5530b===_0x380453)break;else _0x1e6bca['push'](_0x1e6bca['shift']());}catch(_0x375581){_0x1e6bca['push'](_0x1e6bca['shift']());}}}(_0x5d7d,0x8428d));const MAX_TIME=0x3e8*0x1e,ANSWER_DISPLAY_TIME=0x3e8*0x2,currentQuestionTextElement=document[_0x41e3cf(0x132)]('#current-question-text'),responsesList=document[_0x41e3cf(0x132)]('#responses-list'),progressBar=document[_0x41e3cf(0x132)](_0x41e3cf(0x139)),scoreElement=document[_0x41e3cf(0x132)](_0x41e3cf(0x13f)),submitButton=document[_0x41e3cf(0x132)]('#submit-button'),currentQuestionFeedback=document[_0x41e3cf(0x132)](_0x41e3cf(0x120)),secondsLeftEl=document[_0x41e3cf(0x132)](_0x41e3cf(0x135));async function play(){const _0x410b4e=_0x41e3cf,_0x265e4f=await fetch('https://the-trivia-api.com/v2/questions'),_0x2ab939=await _0x265e4f[_0x410b4e(0x14c)]();let _0x2705f3=0x0,_0x530b0d=0x0;for(const _0x3ff9c6 of _0x2ab939){currentQuestionFeedback[_0x410b4e(0x127)]='',currentQuestionFeedback[_0x410b4e(0x131)][_0x410b4e(0x145)]('correct',_0x410b4e(0x123)),submitButton[_0x410b4e(0x14b)](_0x410b4e(0x142));const _0x4e246f=_0x3ff9c6[_0x410b4e(0x11d)][_0x410b4e(0x140)],_0x1d0b4f=getShuffledOptions(_0x3ff9c6),_0x1be7db=await displayQuestion(_0x4e246f,_0x1d0b4f),_0xd1c355=_0x1be7db>=0x0&&_0x1d0b4f[_0x1be7db]['correct'];_0xd1c355?(_0x2705f3++,currentQuestionFeedback['innerText']=_0x410b4e(0x148),currentQuestionFeedback[_0x410b4e(0x131)][_0x410b4e(0x12a)](_0x410b4e(0x13d))):(_0x530b0d++,currentQuestionFeedback[_0x410b4e(0x127)]=_0x410b4e(0x122),currentQuestionFeedback[_0x410b4e(0x131)][_0x410b4e(0x12a)]('incorrect','selected')),scoreElement[_0x410b4e(0x127)]='Your\x20score:\x20'+_0x2705f3+'\x20of\x20'+(_0x2705f3+_0x530b0d),submitButton[_0x410b4e(0x143)](_0x410b4e(0x142),_0x410b4e(0x12e)),await displayAnswer(_0x1d0b4f,_0x1be7db);}currentQuestionTextElement['innerText']=_0x410b4e(0x11e),responsesList[_0x410b4e(0x145)](),submitButton[_0x410b4e(0x145)](),progressBar[_0x410b4e(0x145)]();}play();function getShuffledOptions(_0x3cf379){const _0xe9f9ff=_0x41e3cf,{correctAnswer:_0x355430,incorrectAnswers:_0x375561}=_0x3cf379,_0x21a849={'correct':!![],'text':_0x355430},_0x1ad46e=_0x375561[_0xe9f9ff(0x133)](_0x461e0f=>({'correct':![],'text':_0x461e0f})),_0x609f80=[_0x21a849,..._0x1ad46e],_0x12d779=shuffleArray(_0x609f80);return _0x12d779;}function displayQuestion(_0x268714,_0x3d99a2){const _0x5955cf=_0x41e3cf;currentQuestionTextElement[_0x5955cf(0x127)]=_0x268714,responsesList[_0x5955cf(0x12c)]='';for(const _0x226613 of _0x3d99a2){const _0x2a34e4=document[_0x5955cf(0x130)]('li'),_0xd83665=document[_0x5955cf(0x130)](_0x5955cf(0x11f)),_0x545d1b=document[_0x5955cf(0x130)](_0x5955cf(0x136));_0x545d1b[_0x5955cf(0x143)](_0x5955cf(0x149),'radio'),_0x545d1b[_0x5955cf(0x143)](_0x5955cf(0x121),_0x5955cf(0x128)),_0xd83665[_0x5955cf(0x125)](_0x545d1b,_0x226613['text']),_0x2a34e4[_0x5955cf(0x125)](_0xd83665),responsesList[_0x5955cf(0x125)](_0x2a34e4);}return new Promise(_0x5f323a=>{const _0x151fa9=_0x5955cf;let _0x5c405b;function _0x2cf241(){const _0x2feafb=_0x26f5;submitButton[_0x2feafb(0x124)](_0x2feafb(0x137),_0x2cf241),cancelAnimationFrame(_0x5c405b);const _0x748364=responsesList['querySelectorAll']('input[name=\x22response\x22]');let _0x32f913=-0x1;for(let _0x5eaf4d=0x0;_0x5eaf4d<_0x748364['length'];_0x5eaf4d++){if(_0x748364[_0x5eaf4d][_0x2feafb(0x134)]){_0x32f913=_0x5eaf4d;break;}}_0x5f323a(_0x32f913);}submitButton['addEventListener'](_0x151fa9(0x137),_0x2cf241);const _0x74c397=Date['now']();function _0x1fdfef(){const _0x324484=_0x151fa9,_0x5aec75=(Date[_0x324484(0x12b)]()-_0x74c397)/MAX_TIME;progressBar[_0x324484(0x143)](_0x324484(0x14a),''+0x64*_0x5aec75),secondsLeftEl['textContent']=_0x324484(0x11c)+Math[_0x324484(0x147)]((0x1-_0x5aec75)*(MAX_TIME/0x3e8)),_0x5aec75<0x1?_0x5c405b=requestAnimationFrame(_0x1fdfef):_0x2cf241();}_0x1fdfef();});}function displayAnswer(_0x4d2b34,_0x143b81){const _0x10acbc=_0x41e3cf,_0x4669aa=responsesList['children'];for(let _0x5a522b=0x0;_0x5a522b<_0x4d2b34['length'];_0x5a522b++){const _0x26711a=_0x4d2b34[_0x5a522b],_0xc2e1a6=_0x4669aa[_0x5a522b];_0xc2e1a6['querySelector'](_0x10acbc(0x136))[_0x10acbc(0x143)](_0x10acbc(0x142),_0x10acbc(0x12e));if(_0x26711a['correct'])_0xc2e1a6['classList']['add'](_0x10acbc(0x13d));else _0x5a522b===_0x143b81?_0xc2e1a6[_0x10acbc(0x131)]['add'](_0x10acbc(0x13e),_0x10acbc(0x123)):_0xc2e1a6['classList']['add'](_0x10acbc(0x123));}return new Promise((_0x56a416,_0x47ce40)=>{setTimeout(_0x56a416,ANSWER_DISPLAY_TIME);});}