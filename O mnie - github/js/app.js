document.addEventListener("DOMContentLoaded", function () {

    $(function () {

        $('.toggle').click(function(e) {
            e.preventDefault();

            const $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });

        $(function() {

            window.setTimeout(function() {
                $('.accordion__horizontal').css('opacity', '1');
            }, 2000);

            $('.accordion__horizontal__item').addClass('default');

            $('.accordion__horizontal__item').on('click', function() {

                const e = $(".accordion__horizontal > .accordion__horizontal__item");
                if(e.hasClass('expand')){
                    e.removeClass('expand');
                } else { $(this).addClass('expand'); }

            })
        })



    });
});
