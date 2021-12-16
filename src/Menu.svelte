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


    let menu = [
        {
            main : {
                title : "Perros",
                link : "./"
            },
            subpages : [
                {
                    title : "Camas",
                    link : "./"
                },
                {
                    title : "Juguetes",
                    link : "./"
                },
                {
                    title : "Comida",
                    link : "./"
                },
            ]
        },
        {
            main : {
                title : "Gatos",
                link : "./"
            },
            subpages : [
                {
                    title : "Camas",
                    link : "./"
                },
                {
                    title : "Juguetes",
                    link : "./"
                },
                {
                    title : "Comida",
                    link : "./"
                },
            ]
        },
        {
            main : {
                title : "Aves",
                link : "./"
            },
            subpages : [
                {
                    title : "Camas",
                    link : "./"
                },
                {
                    title : "Juguetes",
                    link : "./"
                },
                {
                    title : "Comida",
                    link : "./"
                },
            ]
        },
        {
            main : {
                title : "Roedores",
                link : "./"
            },
            subpages : [
                {
                    title : "Camas",
                    link : "./"
                },
                {
                    title : "Juguetes",
                    link : "./"
                },
                {
                    title : "Comida",
                    link : "./"
                },
            ]
        }
    ]
    export let website_name : string = "TopMascotas"
    export let options : MenuOptions[] = menu;

    let menuVisible = true;

    let innerWidth = 0;

    let toggleMenu = () => {
        menuVisible = !menuVisible;
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
            <i class="fab fa-sass">{website_name}</i>
        </div>
        <button class="btn" id="nav-toggle" on:click={toggleMenu}>
                <div class="menu_line"></div>
                <div class="menu_line"></div>
                <div class="menu_line"></div>
        </li>
        {#if menuVisible}
        {#each options as option}
        <li class="nav-link">{option.main.title}<i class="fa fa-chevron-up"></i>
            <ul class="nav-drop">
                {#each option.subpages as subapage}
                <li>{subapage.title}</li>
                {/each}
            </ul>
        </li>
        {/each}
        {/if}

    </ul>
    </div>
</nav>

<style type="text/scss">

    $menu-color-light: rgba(hotpink, 0.2);
    $menu-color: hotpink;
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
    li {
    list-style: none;
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
        gap: 2rem;
        .nav-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: auto;
        .logo {
            font-size: 2.5rem;
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
            li {
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
        .outline {
        background: inherit;
        border: 2px solid lighten($menu-color, 25);
        }
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
        .nav-item {
            display: flex !important;
        }
        .nav-link {
            display: flex !important;
        }
        }
    }
    }

    // hide nav link and items below break point and show toggle btn
    @media screen and(max-width: $break-point) {
    nav {
        padding: 1rem 0;
        .nav-list {
        display: block;
        .nav-logo {
            #nav-toggle {
            display: block;
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