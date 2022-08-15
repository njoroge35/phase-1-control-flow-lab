function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let  result

          if (someNumber > 2500) {
            result = 'No can do.'
          } else if (someNumber > 400 && someNumber < 2000) {
            result = 'That will be twenty bucks.'
          } else if (someNumber > 2000 && someNumber < 2500) {
            result = 'I will gladly take your thirty bucks.'
          } else if (someNumber < 400) {
            result = 'This one is on me!'

             if (someNumber === 400) {
              result = 'This one is one me!'
            }
         }
     return result
        }

        function ternaryCheckCity(goodLoc){
          // Write your code here!
        
          let result
        
          goodLoc === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.'
        
            // if (goodLoc === 'NYC') {
            //   result = 'Ok, sounds good.'
            // }
        
            // else {
            //     result = 'No go.'
            // }
        
            return result
        
        }
        
        function switchOnCharmFromTip(tipKind){
          // Write your code here!
        
        let result
        
          switch (tipKind) {
            case 'generous':
              result = 'Thank you so much.';
              break;
            case 'not as generous':
              result = 'Thank you.';
              break;
            default:
              result = 'Bye.';
              break;
          }
        
          // if (tipKind === 'not as generous') {
          //   result = 'Thank you.'
          // }
        
          // if (tipKind === '')
        
          return result
        
        }