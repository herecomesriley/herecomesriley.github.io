showhide()

function showhide() {
    const luna = document.getElementById('luna');
    const eclipse = document.getElementById('eclipse');
    
    if(window.innerWidth <= 1270) {
        luna.style.display = 'none';
        eclipse.style.display = 'none';

        document.getElementById('contents').style.display = 'none';

        pageflex(true)
    } else if(window.innerWidth < 1500) {
        luna.style.display = 'block';
        eclipse.style.display = 'none';

        document.getElementById('contents').style.display = 'block';

        pageflex(false)
    } else {
        luna.style.display = 'block';
        eclipse.style.display = 'block';

        document.getElementById('contents').style.display = 'block';

        pageflex(false)
    }
}

function pageflex(bool) {
    const pages = document.getElementsByClassName('page')
    if(bool == true) {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.width = '90%';
            document.getElementById('site').style.minWidth = 'auto';
        }
    } else {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.width = '1000px';
            document.getElementById('site').style.minWidth = '1500px';
        }
    }
}

window.onresize = showhide;