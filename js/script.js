$(document).ready(function() {

    var vue = new Vue({
        el: '#vue',
        data: {
            works: [
                {
                    "name": "Демидов",
                    "link": "demidov",
                    "technologies": "HTML CSS JS Vue.js, PHP",
                    "description": "Производство и продажа металлопроката",
                    "image": "1.svg",
                    "type": "site"
                },
                {
                    "name": "Lab",
                    "link": "lab",
                    "technologies": "HTML CSS JS",
                    "description": "Отделочные материалы",
                    "image": "2.svg",
                    "type": "landing"
                },
                {
                    "name": "Эпоха",
                    "link": "karkas",
                    "technologies": "HTML CSS JS",
                    "description": "Каркасные дома",
                    "image": "3.svg",
                    "type": "landing"
                },
                {
                    "name": "Gallery11",
                    "link": "gallery11",
                    "technologies": "HTML CSS JS Vue.js, PHP",
                    "description": "Design center",
                    "image": "4.svg",
                    "type": "site"
                },
                {
                    "name": "LBC Group",
                    "link": "lbc_small",
                    "technologies": "HTML CSS JS",
                    "description": "Производство и монтаж быстровозводимых ангаров",
                    "image": "5.svg",
                    "type": "landing"
                },
                {
                    "name": "WebMole",
                    "link": "webmole",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "VPN Protection & anonymity",
                    "image": "6.svg",
                    "type": "landing"
                },
                {
                    "name": "Гарант",
                    "link": "garant",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Автоломбард",
                    "image": "7.svg",
                    "type": "site"
                },
                {
                    "name": "Play light",
                    "link": "playlight",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Дизайнерские световые решения в интерьере и экстерьере",
                    "image": "8.svg",
                    "type": "site"
                },
                {
                    "name": "Светлые идеи",
                    "link": "idias",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Дизайнерские световые решения в интерьере и экстерьере",
                    "image": "9.svg",
                    "type": "site"
                },
                {
                    "name": "Steretto",
                    "link": "steretto",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Ансамбль солистов Московского симфонического оркестра Министерства обороны",
                    "image": "10.svg",
                    "type": "site"
                },
                {
                    "name": "Matrix",
                    "link": "alpha",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Fully customisable helmet",
                    "image": "11.svg",
                    "type": "site"
                },
                {
                    "name": "Book and travel",
                    "link": "tourism",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Туристичeское агентство класса премиум",
                    "image": "12.svg",
                    "type": "site"
                },
                {
                    "name": "Rewts",
                    "link": "rewts",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Trees and gardens",
                    "image": "13.svg",
                    "type": "site"
                },
                {
                    "name": "Matrix",
                    "link": "helms",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Moto helms",
                    "image": "11.svg",
                    "type": "site"
                },
                {
                    "name": "Blackbelt",
                    "link": "blackbelt228",
                    "technologies": "HTML CSS JS",
                    "description": "Комплексный cервис обнаружения компьютерных атак",
                    "image": "15.svg",
                    "type": "landing"
                },
                {
                    "name": "Locationbook",
                    "link": "locationbook",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Сервис по подбору локаций для проведения рекламных и киносъемок",
                    "image": "16.png",
                    "type": "site"
                },
                {
                    "name": "Rim taxi",
                    "link": "audi",
                    "technologies": "HTML CSS JS",
                    "description": "Аренда Audi R8 в Риме",
                    "image": "17.svg",
                    "type": "landing"
                },
                {
                    "name": "Blaze",
                    "link": "moto",
                    "technologies": "HTML CSS JS",
                    "description": "Helmet design",
                    "image": "18.svg",
                    "type": "landing"
                },
                {
                    "name": "CSKA",
                    "link": "cska",
                    "technologies": "HTML CSS JS, PHP",
                    "description": "Продажа билетов",
                    "image": "19.svg",
                    "type": "site"
                },
                {
                    "name": "Псковская Ольгинская гимназия",
                    "link": "school",
                    "technologies": "HTML CSS JS",
                    "description": "Частная школа",
                    "image": "20.svg",
                    "type": "landing"
                },
            ],
            page_1: true,
            page_2: false,
            block_1: true,
            block_2: true,
            block_3: true,
            block_4: true,
            block_5: true,
            block_6: true,
        },
        mounted: function() {

        },
        methods:{
            showPage(id) {
                if (id == 1) {
                    this.page_1 = !this.page_1;
                }

                if (id == 2) {
                    this.page_2 = !this.page_2;

                    if (this.page_2) {
                        $('body, html').animate({
                            scrollTop: 0
                        }, 800);
                    }
                }
            },

        }
    });

});
