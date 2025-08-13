const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const section = document.querySelectorAll('.section');
const resumelists = document.querySelectorAll('.resume-list');
const resumeboxs = document.querySelectorAll('.resume-box');
const projectList = document.querySelectorAll('.project-list');
const projectboxs = document.querySelectorAll('.project-box');
navs.forEach((nav, idx)=>{
    nav.addEventListener('click',()=>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;
         document.querySelector('.section.active').classList.remove('active');
        section[idx].classList.add('active');

        const array = Array.from(section);
        const arrSec= array.slice(1,-1);
        arrSec.forEach(arrSec =>{ 
            if (arrSec.classList.contains('active')) {
                section[4].classList.add('action-contact');
            }
        });
        if (section[0].classList.contains('active')) {
            section[4].classList.remove('action-contact');
        }
    }); 
});
resumelists.forEach((lists,idx)=>{
    lists.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        lists.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeboxs[idx].classList.add('active');
    });
});
projectList.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.project-list.active').classList.remove('active');
        list.classList.add('active');

       document.querySelector('.project-box.active').classList.remove('active');
        projectboxs[idx].classList.add('active');
    });
});
setTimeout(() => {
    section[4].classList.remove('active');
}, 1500);
