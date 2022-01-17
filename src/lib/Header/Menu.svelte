<script lang="ts" context="module">
    export interface MenuOptions{
        main: MenuOptionContent;
        subpages?: MenuOptionContent[];
    }
    export interface MenuOptionContent{
        title: string;
        link: string;
    }
</script>
<script lang="ts">
    import menu from '../../json/menu.json';

    export let website_name : string = "TopMascotas";

    export let selectedOption :  string = "";

    let options : MenuOptions[] = menu;

    let menuVisible = true;

    let innerWidth = 0;

    let toggleMenu = () => {
        menuVisible = !menuVisible;
    }

    let reload = (link : string) => {
        if (window.location.pathname+window.location.search === link) location.reload();
    }

    $: {
        if (innerWidth <= 768) menuVisible = false;
        else menuVisible = true;
    }

</script>
<svelte:window bind:innerWidth={innerWidth}/>


<nav>
    <div class="container">
    <ul class="nav-list">
        <li class="nav-logo">
        <div class="logo">
            <i class="fab fa-sass" href="/"><a style="all:unset;" href="/">{website_name}</a></i>
        </div>
        <div class="btn" id="nav-toggle" on:click={toggleMenu}>
                <div class="menu_line"></div>
                <div class="menu_line"></div>
                <div class="menu_line"></div>
        </div>
        </li>

        {#each options as option}
        <div class="nav-link {selectedOption === option.main.title? "selectedItem" : ""}" style="display: {menuVisible? "block" : "none"};">{option.main.title}<div class="fa fa-chevron-up"></div>
            {#if option.subpages.length > 0}
            <ul class="nav-drop">
                {#each option.subpages as subpage}
                <!--<a class="menu_subitem" href="{subpage.link}" on:click="{() => {reload(subpage.link)}}">
                    {subpage.title}
                </a>-->
                <a sveltekit:prefetch class="menu_subitem" href="{subpage.link}">{subpage.title}</a>

                {/each}
            </ul>
            {/if}
        </div>
        {/each}


    </ul>
    </div>
</nav>

<style type="text/scss">

    $menu-color-light: rgba(hotpink, 0.2);
    $menu-color: hotpink;
    $menu-color-selected: rgb(192, 20, 106);
    $shadow-color: #e1e5ee;
    $text-color: black;
    $break-point: 768px;

    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@300&display=swap");

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    .selectedItem{
        color: $menu-color-selected;
        text-shadow: 0px 0px 16px #42053f;
    }
    .menu_line{
        display: block;
        width: 20px;
        height: 3px;
        background-color: #c5c5c5;
        border-radius: 10px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .container {
    max-width: 1000px;
    padding: 0 4rem;
    margin: 0 auto;
    }

    ul,
    li , .menu_subitem {
        text-decoration: none;
        list-style: none;
        text-shadow: none;
    }

    nav {
    z-index: 3;
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 16px $shadow-color;
    font-family: "Poppins", sans-serif;
    background: white;
    .nav-list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .nav-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: auto;
        .logo {
            font-size: calc(1em + 1vw);
            cursor: pointer;
            transition: color 0.2s;
            &:hover,
            &:focus {
            color: $menu-color;
            text-shadow: 0 0 3px $menu-color;
            }
        }
        #nav-toggle {
            display: none;
        }
        }
        .nav-link {
        flex-shrink: 0;
        flex-grow: 0;
        font-weight: bold;
        padding: 1.5rem 1.8rem;
        position: relative;
        margin-left: 10px;
        cursor: pointer;
        i {
            position: absolute;
            right: 0;
            top: 40%;
            transition: transform 0.3s;
        }

        &:after {
            position: absolute;
            content: "";
            width: 0%;
            height: 0.3em;
            background: $menu-color;
            border-radius: 4px;
            bottom: 1em;
            left: 1.6em;
            transition: width 0.3s;
        }
        &:hover::after {
            width: 60%;
        }
        &:hover {
            ul {
            opacity: 1;
            visibility: visible;
            }
            i {
            transform: rotate(180deg);
            }
        }

        .nav-drop {
            position: absolute;
            top: 4rem;
            box-shadow: 0 4px 16px $shadow-color;
            background-color: white;
            border-radius: 4px;
            border: 1px solid $shadow-color;
            width: 12rem;
            padding: 0.5rem;
            margin-left: -1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transition: 300ms ease-out;
            .menu_subitem {
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.1s;
            &:hover,
            &:focus {
                z-index: 50;
                background: $menu-color-light;
            }
            }
        }
        }
    }
    .btn {
        margin-left: 30px;
        border: none;
        outline: transparent;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background: lighten($menu-color, 25);
        color: darken($menu-color, 25);
        font-family: inherit;
        font-size: inherit;
        font-weight: bold;
        cursor: pointer;
        transition: 0.1s;
        &:hover {
        background: lighten($menu-color, 15);
        }
        &:focus {
        text-shadow: 0 0 18px $menu-color;
        outline: 4px solid lighten($menu-color, 20);
        }
        &:active {
        transform: scale(0.98);
        }
    }
    }

    // ========================= RESPONSEVIE =========================

    // always show nav link and items above break point
    @media screen and(min-width: $break-point) {
    nav {
        .nav-list {
        .nav-link {
            display: flex !important;
        }
        }
    }
    }

    // hide nav link and items below break point and show toggle btn
    @media screen and(max-width: $break-point) {
    .container {
        padding: 0;
    }
    .btn{
        margin-right: 10px;
        position: absolute;
        display: block;
        right: 0;
    }
    .logo{
        margin-left: 10px;
    }
    nav {
        padding: 1rem 0;
        .nav-list {
        display: block;
        .nav-logo {
            #nav-toggle {
            display: block;
            }
            .logo{
                font-size: 1.5rem;
            }
        }
        .nav-link {
            padding: 1.5rem 0;
            i {
            position: absolute;
            right: 1rem;
            top: 1.8rem;
            }
            .nav-drop {
            top: 1rem;
            box-shadow: unset;
            width: unset;
            margin-left: -1rem;
            opacity: 0;
            visibility: hidden;
            }
            &:after {
            top: 3em;
            left: 0.08em;
            transition: width 0.3s;
            }
            &:hover::after {
            width: 4em;
            }
            &:hover {
            ul {
                position: relative;
                opacity: 1;
                visibility: visible;
            }
            }
        }
        }
    }
    }

</style>