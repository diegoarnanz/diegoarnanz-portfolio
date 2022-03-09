'use strict'


// variables
let r = document.querySelector(':root')

const cursor     = document.querySelector('.cursor')
const cursorIn     = document.querySelector('.cursor.in')
const punto      = document.querySelector('.punto')
const logo       = document.querySelector('.header__logo')
const li         = document.querySelectorAll('.nav__li')
const projectsLi = document.querySelectorAll('.work__li')
const projects   = document.querySelectorAll('.work__a')
const imagebox   = document.querySelector('.images')
const images     = document.querySelectorAll('.images__img')
const themes     = document.querySelector('.themes__switch')
const slider     = document.querySelector('.themes__slider')
const span       = document.querySelectorAll('.work__span')
const scroll     = document.querySelector('.scroll')
const enlaces    = document.querySelectorAll('a.panel') 
const slideUno   = document.querySelector('.uno')
const slideDos   = document.querySelector('.dos')
const slideTres  = document.querySelector('.tres')
const work       = document.querySelector('.work')
const workBox    = document.querySelector('.work__box')






// funciones
let setLight = () => {
    r.style.setProperty('--fondo', '#D9AB81');
    r.style.setProperty('--gris', '#1b393b');
}

let setDark = () => {
    r.style.setProperty('--fondo', '#1b393b');
    r.style.setProperty('--gris', '#D9AB81');
}

let mostrarslide = () => {
    slideUno.classList.add('activo')
    slideDos.classList.add('activo')
    slideTres.classList.add('activo')
}

let mostrarLi = (e) => {
    window.addEventListener('scroll', () => {
        let pixel       = window.scrollY
        let altoV       = window.innerHeight
        let distWork    = work.offsetTop
        let distWorkBox = workBox.offsetTop
        let dist        = e.offsetTop + distWork + distWorkBox + ( 5 * 16 )
        let detectar    = dist - (altoV / 1.3)
        
        if (pixel >= detectar){
            e.classList.add('activo')
        }else{
            e.classList.remove('activo')
        }
    })
}






// eventos

// GENERAL

// window.addEventListener('mousemove', (e) => {
//     console.log( e )
//     let x = e.clientX
//     let y = e.clientY
//     cursor.style.transform = `translate(${x - (1.9*16)}px, ${y - (2*16)}px)`
//     cursorIn.style.transform = `translate(${x - (0.5*16)}px, ${y - (0.5*16)}px)`
// })

// RETRASAR CARGA
enlaces.forEach(( enlace , i )=>{
    enlaces[i].addEventListener('click', e => {
        e.preventDefault()

        let ruta = enlaces[i].href

        mostrarslide()

        setTimeout(() => {
            window.location.href = ruta
        }, 1300);
    }) 
})

// INDEX
// DESACTIVAR HOVER AL CLICAR SCROLL
if( document.body.classList.contains('index')){

    projectsLi.forEach( (projectLi, i ) => {
        mostrarLi( projectsLi[i] )
    })

    scroll.addEventListener('click', () => {
        workBox.classList.add('set')
        setTimeout( () => {
            workBox.classList.remove('set')
        }, 1500);
    })  
    
    projects.forEach( (project, i) => {
        projects[i].addEventListener('mouseover', () => {
    
            imagebox.classList.add('activo')
    
            images.forEach( (img, j) => {
                images[j].classList.remove('activo')
            })
            images[i].classList.add('activo')
            
            projects.forEach( (project, j) => {
                projects[j].classList.add('activo')
            })
            projects[i].classList.remove('activo')
    
        })
    })
    
    projects.forEach( (project, i) => {
        projects[i].addEventListener('mouseout', () => {
    
            imagebox.classList.remove('activo')
            
            projects.forEach( (project, j) => {
                projects[j].classList.remove('activo')
            })
            span.forEach( (cadaSpan, j) => {
                span[j].classList.remove('activo')
            }) 
        })
    })
}





    //MOVIMIENTO HEADER
    if(document.body.classList.contains('about')){

    const headerH1 = document.querySelector('.left')
    const headerH2 = document.querySelector('.right')
    const headerImage = document.querySelector('.header__image')
    const headerImg = document.querySelector('.header__img')

    // let x = window.matchMedia("(max-width: 920px)")
    
        window.addEventListener('scroll', () => {

            if (window.matchMedia("(min-width: 920px)").matches){
                let pixel = window.scrollY
                headerH1.style.transform = `translateX(${pixel / 4}px)`
                headerH2.style.transform = `translateX(-${pixel / 4}px)`
                headerImg.style.transform = `scale(${1 + (pixel / 3000)})`
                headerImage.style.transform = `translateY(${pixel / 6}px)`    
            }
        })
    }
            












