const _0x16ed45=_0x5ba7;(function(_0x3e4b34,_0x22ae20){const _0x261e41=_0x5ba7,_0x2d394e=_0x3e4b34();while(!![]){try{const _0x294584=parseInt(_0x261e41(0x16e))/0x1+-parseInt(_0x261e41(0x162))/0x2*(-parseInt(_0x261e41(0x171))/0x3)+-parseInt(_0x261e41(0x165))/0x4*(parseInt(_0x261e41(0x167))/0x5)+-parseInt(_0x261e41(0x16d))/0x6+-parseInt(_0x261e41(0x168))/0x7+-parseInt(_0x261e41(0x16c))/0x8*(-parseInt(_0x261e41(0x176))/0x9)+parseInt(_0x261e41(0x160))/0xa;if(_0x294584===_0x22ae20)break;else _0x2d394e['push'](_0x2d394e['shift']());}catch(_0x118306){_0x2d394e['push'](_0x2d394e['shift']());}}}(_0x3296,0x4820b));const WORD_LENGTH=0x5,inputEl=document[_0x16ed45(0x15e)]('#guess-inp');function _0x5ba7(_0x3ac340,_0x38f91d){const _0x32968c=_0x3296();return _0x5ba7=function(_0x5ba74f,_0x500f77){_0x5ba74f=_0x5ba74f-0x15e;let _0x4afe01=_0x32968c[_0x5ba74f];return _0x4afe01;},_0x5ba7(_0x3ac340,_0x38f91d);}let correctAnswer='';inputEl[_0x16ed45(0x166)](_0x16ed45(0x164),!![]),showInfoMessage(_0x16ed45(0x161)),getRandomAnswer(_0x4f9422=>{const _0x5b9441=_0x16ed45;correctAnswer=_0x4f9422,inputEl['removeAttribute'](_0x5b9441(0x164)),clearInfoMessage(),inputEl[_0x5b9441(0x170)]();}),inputEl[_0x16ed45(0x174)]('keydown',_0x3b260c=>{const _0x2049cb=_0x16ed45;if(_0x3b260c[_0x2049cb(0x180)]===_0x2049cb(0x17d)){const _0x4bc24b=inputEl[_0x2049cb(0x173)];if(_0x4bc24b['length']!==WORD_LENGTH)showInfoMessage(_0x2049cb(0x16f)+WORD_LENGTH+_0x2049cb(0x169));else _0x4bc24b===correctAnswer?(showInfoMessage(_0x2049cb(0x177)+correctAnswer+'\x22.'),inputEl[_0x2049cb(0x166)](_0x2049cb(0x164),!![]),displayGuessFeedback(_0x4bc24b)):(inputEl[_0x2049cb(0x173)]='',isValidWord(_0x4bc24b,_0x13d53b=>{const _0x5d3bc6=_0x2049cb;_0x13d53b?displayGuessFeedback(_0x4bc24b):showInfoMessage('\x22'+_0x4bc24b+_0x5d3bc6(0x179));}));}else clearInfoMessage();});function _0x3296(){const _0x3420df=['toUpperCase','Enter','appendChild','add','key','querySelector','classList','8348210omuBtK','Loading...','3916oVZqRK','createElement','disabled','26444EcZILg','setAttribute','265TfnQHj','1644937RWZzKY','\x20letters\x20long.','span','guess','33576lzGkSZ','2625222JjdvVD','319044seLjKw','Your\x20guess\x20must\x20be\x20','focus','207WYhkLD','correct','value','addEventListener','includes','63oWkwtq','You\x20win!\x20The\x20answer\x20was\x20\x22','length','\x22\x20is\x20not\x20a\x20valid\x20word.','innerText','letter'];_0x3296=function(){return _0x3420df;};return _0x3296();}function displayGuessFeedback(_0x3d9bec){const _0x5a2f13=_0x16ed45,_0x1559ad=document['querySelector']('#guesses'),_0x35ca19=document[_0x5a2f13(0x163)]('div');_0x35ca19[_0x5a2f13(0x15f)][_0x5a2f13(0x17f)](_0x5a2f13(0x16b));for(let _0x39e1a5=0x0;_0x39e1a5<_0x3d9bec[_0x5a2f13(0x178)];_0x39e1a5++){const _0x24c509=_0x3d9bec[_0x39e1a5][_0x5a2f13(0x17c)](),_0x5c3c37=correctAnswer[_0x39e1a5][_0x5a2f13(0x17c)](),_0x3f6422=document[_0x5a2f13(0x163)](_0x5a2f13(0x16a));_0x3f6422[_0x5a2f13(0x17a)]=_0x24c509,_0x35ca19[_0x5a2f13(0x17e)](_0x3f6422);if(_0x24c509===_0x5c3c37)_0x3f6422[_0x5a2f13(0x15f)]['add'](_0x5a2f13(0x172));else correctAnswer['toUpperCase']()[_0x5a2f13(0x175)](_0x24c509)?_0x3f6422[_0x5a2f13(0x15f)][_0x5a2f13(0x17f)]('present'):_0x3f6422[_0x5a2f13(0x15f)][_0x5a2f13(0x17f)]('absent');_0x3f6422['classList'][_0x5a2f13(0x17f)](_0x5a2f13(0x17b));}_0x1559ad[_0x5a2f13(0x17e)](_0x35ca19);}