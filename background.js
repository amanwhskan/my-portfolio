const resumelists = document.querySelectorAll('.resume-list');
const resumeboxs = document.querySelectorAll('.resume-box');
resumelists.forEach((lists,idx)=>{
    lists.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        lists.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeboxs[idx].classList.add('active');
    });
});
