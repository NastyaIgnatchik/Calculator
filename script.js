let str = ''
let arr = ['+','-','*','/','.'];

let btn = document.getElementsByTagName('button')
Array.from(btn).forEach((btn)=> { 
  btn.addEventListener('click', function(btn){
    if(arr.includes(this.value)) {
      if(arr.includes(str.split('').pop())) {
          console.log('operator already exist');
          return str
      }
      str += this.value
    }

    else if (this.value ==='=' && str !== '') {
      str = eval(str)
    }
    else if (this.value ==='C' ) {
      str = ''
    }

    else str += this.value;
let result = document.getElementById('result')
result.innerText = str
  })
})