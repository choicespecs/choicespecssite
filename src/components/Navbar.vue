<template>
    <header id="navbar">
            <div class="nav-menu-title">
                <h1 style="font-size:24px">Choice Specs</h1>
                <img :src='mobileLogo' alt="website-nav-logo" />
            </div>
            <nav>
                <ul class="nav-menu-list">
                    <li><h4><a href="/">About Me</a></h4></li>
                    <li><h4><a href="/projects">Projects</a></h4></li>
                    <li><h4><a href="/journal">Journal</a></h4></li>
                </ul>
            </nav>
            <aside class="hamburger-wrapper">
                <button class="nav-toggle" @click='toggleMobileMenu' aria-label="toggle navigation">
                    <span class="hamburger"></span>
                </button>
            </aside>
        <aside id="mobile-menu">
            <header class="mobile-menu-img">
                <img class="mobile-menu-logo" :src='largeLogo' alt="large-logo" />
            </header>
            <nav class="mobile-menu-list">
                <ul>
                    <li><h1><a @click="toggleMobileMenu" href="/">About Me</a></h1></li>
                    <li><h1><a @click="toggleMobileMenu" href="/projects">Projects</a></h1></li>
                    <li><h1><a @click="toggleMobileMenu" href="/journal">Journal</a></h1></li>
                </ul>
            </nav>
            <section class="social-media-wrapper">
                <span>Follow me on</span>
                <nav>
                    <ul class="mobile-menu-social-media">
                        <li v-for="obj in social" v-bind:key="obj.id">
                            <a :href='obj.html_url'><img :src='obj.img_url' :alt='`${obj.name}-link`'></a>
                        </li>
                    </ul>
                </nav>
            </section>
        </aside>
    </header>
</template>

<script>
    import social from '../data/social.json'
    export default {
        name: 'Navbar',
        data() {
            return {
                social : social,
                mobileLogo: 'https://choicespecs-website.s3.us-east-2.amazonaws.com/choiceSpecs-transparent.png',
                largeLogo: 'https://choicespecs-website.s3.us-east-2.amazonaws.com/Choice+Specs+Logo.png'
            }
        },
        methods: {
            toggleMobileMenu() {
                document.body.classList.toggle('nav-open');
            }
        },
    };
</script>

<style scoped>
    #navbar {
        height: 70px;
        width: 100%;
        background-color: var(--side-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        position: fixed;
        top: 0;
        -webkit-box-shadow: 5px 8px 22px 1px rgba(0,0,0,0.56); 
        box-shadow: 5px 8px 22px 1px rgba(0,0,0,0.56);
    }

    .nav-menu-title {
        margin-left: 1em;
        height: 100%;
        display:flex;
        flex-direction:row;
        align-items: center;
    }

    h3 {
        font-weight: 700;
    }

    img {
        margin-top: 12px;
        height: 80px;
        width: 80px;
    }

    .hamburger {
        display: block;
        position: relative;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
        background: white;
        width: 2em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
    }

    .hamburger::before,
    .hamburger::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
    }

    .hamburger::before {
        top: 6px;
    }

    .hamburger::after {
        bottom: 6px;
    }

    .nav-toggle {
        padding: 0.5em;
        background: transparent;
        border: 0;
        cursor: pointer;
        position: absolute;
        right: 1em;
        top: 1em;
        z-index: 1000;
    }

    .hamburger-wrapper {
        margin-right: 3em;
        height: 50px;
        width: 50px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        height: 50px;
        width: 50px;
    }

    .nav-open #mobile-menu {
        transform: translateX(0);
    }


    .nav-open {
        overflow-y: hidden;
    }



    #mobile-menu {
        position: fixed;
        background: var(--side-color);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        transform: translateX(100%);
        transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: flex-start;
    }

    #mobile-menu .mobile-menu-logo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .mobile-menu-list {
        margin: 1em 0;
        width: 80%;
        height: fit-content;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        font-size: 20px;
    }

    .mobile-menu-list ul li {
        margin: 1em 0;
    }


    .nav-open .nav-toggle {
        position: fixed;
    }
    
    .nav-open .hamburger {
        transform: rotate(0.625turn);
    }
    
    .nav-open .hamburger::after {
        opacity: 0;
    }
    
    .nav-open .hamburger::before {
        transform: rotate(90deg) translateX(-6px);
    }

    .mobile-menu-img {
        margin-top: 2em;
        width: 80%;
        display:flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .mobile-menu-social-media {
        display:flex;
        gap: 2em;
        align-items:center;
        flex-direction: row;
    }

    .mobile-menu-social-media img{
        width: 41px;
        height: 41px;
        filter: invert(.5);
    }

    .social-media-wrapper {
        display:flex;
        flex-direction:column;
        text-align: center;
        gap: 12px;
        color: #f4f4f4;
    }

    .nav-menu-list {
        display:none;
    }

    @media screen and (min-height: 740px) {
        .mobile-menu-list {
            font-size: 24px;
        }
    }

    @media screen and (min-height: 840px) {
        .mobile-menu-list {
            font-size: 30px;
        }
    }


    @media screen and (min-width: 641px) {
        #navbar {
            z-index: 100;
        }
        .hamburger-wrapper {
            display:none;
        }

        .nav-menu-list {
            margin-right: 1em;
            display:flex;
            flex-direction:row;
            gap: 2em;
            font-weight: 700;
            font-size: 16px;
        }
    }

    @media screen and (min-width: 961px) {
        .nav-menu-list {
            gap: 5em;
        }
    }
  
</style>