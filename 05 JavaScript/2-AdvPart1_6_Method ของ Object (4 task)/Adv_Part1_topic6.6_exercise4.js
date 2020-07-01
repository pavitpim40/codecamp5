/* ####### ดัดแปลง Code ############

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

#######  จากที่เรียกแบบนี้ ########
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

######### ให้เรียกแบบนี้ได้ #########
ladder.up().up().down().showStep(); // 1

*/


let ladder = {
    step: 0,
    up() {
      this.step++;
      return ladder  // ใช้ return this ก็ได้ 
    },
    down() {
      this.step--;
      return ladder // ใช้ return this ก็ได้ 
    },
    showStep: function() { // shows the current step
      alert( this.step ); 
      return ladder // ใช้ return this ก็ได้ 
    }
  };
  
  ladder.up().up().down().showStep();