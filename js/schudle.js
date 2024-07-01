const main_1 = document.getElementById('main-1');
const main_2 = document.getElementById('main-2');
const main_3 = document.getElementById('main-3');

const day_1_1 = document.getElementById('day-1-1');
const day_2_2 = document.getElementById('day-2-2');
const day_1 = document.getElementById('day-1');
const day_2 = document.getElementById('day-2');
const day_3 = document.getElementById('day-3');
const day_4 = document.getElementById('day-4');
const day_5 = document.getElementById('day-5');
const day_6= document.getElementById('day-6');

day_2_2.addEventListener('click',()=>{
    day_1_1.classList.remove('test-1-1')
    day_2_2.classList.add('test-1-1')
   
    day_2.classList.remove('hidden')
    day_1.classList.add('hidden')

})
day_1_1.addEventListener('click',()=>{
   
    day_2_2.classList.remove('test-1-1')
    day_1_1.classList.add('test-1-1')
    day_1.classList.remove('hidden')
    day_2.classList.add('hidden')
})

 main_2.addEventListener('click',()=>{
    main_1.classList.remove('table-active')
    main_3.classList.remove('table-active')
   
    main_2.classList.add('table-active')

    day_2_2.classList.remove('test-1-1')
    day_1_1.classList.add('test-1-1')


    day_1.classList.add('hidden')
    day_2.classList.add('hidden')
    day_4.classList.add('hidden')
    day_5.classList.add('hidden')
    day_6.classList.add('hidden')
    
    day_3.classList.remove('hidden')
    day_2_2.addEventListener('click',()=>{
        day_1_1.classList.remove('test-1-1')
        day_2_2.classList.add('test-1-1')
       
        
        day_2.classList.add('hidden')
        day_4.classList.remove('hidden')
        day_3.classList.add('hidden')
        day_5.classList.add('hidden')
        day_6.classList.add('hidden')

    })

    day_1_1.addEventListener('click',()=>{
   
        day_2_2.classList.remove('test-1-1')
        day_1_1.classList.add('test-1-1')
        day_3.classList.remove('hidden')
        day_4.classList.add('hidden')
        day_1.classList.add('hidden')
        day_5.classList.add('hidden')
        day_6.classList.add('hidden')
     
    })


    

})


main_1.addEventListener('click',()=>{
    main_3.classList.remove('table-active')
    main_2.classList.remove('table-active')
    main_1.classList.add('table-active')

    day_2_2.classList.remove('test-1-1')
    day_1_1.classList.add('test-1-1')


    day_3.classList.add('hidden')
    day_2.classList.add('hidden')
    day_4.classList.add('hidden')
    day_5.classList.add('hidden')
    day_6.classList.add('hidden')
    
    day_1.classList.remove('hidden')

    day_2_2.addEventListener('click',()=>{
        day_1_1.classList.remove('test-1-1')
        day_2_2.classList.add('test-1-1')
       
        
        day_1.classList.add('hidden')
        day_2.classList.remove('hidden')
        day_3.classList.add('hidden')
        
        day_4.classList.add('hidden')
        day_5.classList.add('hidden')
        day_6.classList.add('hidden')

    })

    day_1_1.addEventListener('click',()=>{
   
        day_2_2.classList.remove('test-1-1')
        day_1_1.classList.add('test-1-1')
        day_1.classList.remove('hidden')
        day_4.classList.add('hidden')
        day_2.classList.add('hidden')
        day_3.classList.add('hidden')
        day_5.classList.add('hidden')
        day_6.classList.add('hidden')
     
    })


})
main_3.addEventListener('click',()=>{
    main_1.classList.remove('table-active')
    main_2.classList.remove('table-active')
    main_3.classList.add('table-active')

    day_2_2.classList.remove('test-1-1')
    day_1_1.classList.add('test-1-1')


    day_3.classList.add('hidden')
    day_2.classList.add('hidden')
    day_4.classList.add('hidden')
    day_1.classList.add('hidden')
    day_6.classList.add('hidden')
    
    day_5.classList.remove('hidden')

    day_2_2.addEventListener('click',()=>{
        day_1_1.classList.remove('test-1-1')
        day_2_2.classList.add('test-1-1')
       
        
        day_2.classList.add('hidden')
        day_6.classList.remove('hidden')
        day_3.classList.add('hidden')
        
        day_4.classList.add('hidden')
        day_5.classList.add('hidden')
        day_1.classList.add('hidden')

    })

    day_1_1.addEventListener('click',()=>{
   
        day_2_2.classList.remove('test-1-1')
        day_1_1.classList.add('test-1-1')
        day_5.classList.remove('hidden')
        day_4.classList.add('hidden')
        day_1.classList.add('hidden')
        day_3.classList.add('hidden')
        day_6.classList.add('hidden')
        day_2.classList.add('hidden')
     
    })
})

let a= window.innerWidth;
          const nav = document.getElementById('navbar_height')
          
          if(a<=768){
            // location.reload();
              nav.removeAttribute('id');
          }

          AOS.init({
            offset: 200,
            duration:1000
          });