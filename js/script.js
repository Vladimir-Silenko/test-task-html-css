let time = document.querySelectorAll('.time')

function hideButtons() {
    return time = Array.from(time).map(item => {
        item.querySelector('.show-more').addEventListener('click', function () {
            a = Array.from(item.querySelectorAll('.hidden')).map(i => {
                i.classList.toggle('show')
            })

        })
        // -----------
        if (item.childNodes.length > 11) {
            item.querySelector('.show-more').style.display = 'inline-block'
            for (let i = 0; i < item.querySelectorAll('.time__btn').length; i++) {
                if (i > 3) {
                    item.querySelectorAll('.time__btn')[i].classList.add('hidden')
                }
            }

        }
    })


}


hideButtons()

