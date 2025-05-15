showhide()

function showhide() {
    const luna = document.getElementById('luna');
    const eclipse = document.getElementById('eclipse');
    
    if(window.innerWidth <= 700) {
        luna.style.display = 'none';
        eclipse.style.display = 'none';

        // document.getElementById('contents').style.display = 'none';

        pageflex(true)
        icons(false)
    } else if(window.innerWidth < 1270) {
        luna.style.display = 'none';
        eclipse.style.display = 'none';

        // document.getElementById('contents').style.display = 'none';

        pageflex(true)
        icons(true)
    } else if(window.innerWidth < 1500) {
        luna.style.display = 'block';
        eclipse.style.display = 'none';

        // document.getElementById('contents').style.display = 'block';

        pageflex(false)
        icons(true)
    } else {
        luna.style.display = 'block';
        eclipse.style.display = 'block';

        // document.getElementById('contents').style.display = 'block';

        pageflex(false)
        icons(true)
    }
}

function pageflex(bool) {
    const pages = document.getElementsByClassName('page')
    if(bool) {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.width = '90%';
            document.getElementById('site').style.minWidth = 'auto';
        }
    } else {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.width = '750px';
            document.getElementById('site').style.minWidth = '1500px';
        }
    }
}

function icons(bool) {
    const icons = document.getElementsByClassName('button-icon');
    if(bool) {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = 'none';
        }
    }
}

window.onresize = showhide;