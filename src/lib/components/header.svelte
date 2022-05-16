<header class="bg-gray-900 container shadow-lg sm:p-1 ">
    <a href="index" class="mx-4 logo"><img class="sm:h-7" src="logo.png" alt="logo"></a>
    <nav class="navbar flex flex-wrap">
        <a href="home" class="active">home</a>
        <a href="about">about</a>
        <a href="menu">menu</a>
        <a href="team">team</a>
        <a href="reservation">reservation</a>
        <a href="blog">blog</a>
    </nav>
    <div class="icon flex flex-wrap">
        <a href="index" id="menu"><i class="fas fa-bars" ></i></a>
        <a href="index"><i class="fas fa-search"></i></a>
        <a href="index"><i class="fas fa-heart"></i></a>
        <a href="index"><i class="fas fa-shopping-cart"></i></a>
    </div>

</header>
<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem 7%;
        display: flex;
        align-items: center;
        justify-content: space-between;
            
    }
    header .logo img{
        height: auto;
    }
    header .navbar a{
        font-size: 1.7rem;
        padding: .5rem 1.5rem;
        color: var(--light-color);
        border: .1rem solid transparent;
    }
    header .navbar a.active,
    header .navbar a:hover {
        color: #fff;
        border: .1rem solid rgba(205,170,124,0.2);
    }
    header .icon a {
        cursor: pointer;
        margin-left: .5rem;
        height: 4.5rem;
        width: 4.5rem;
        background-color: var(--light-color);  
        align-items: center;
        font-size: 1.7rem;
        color:#fff; 
        z-index: 1;
    }
    header .icon a:hover {
		color:#fff;
		background: var(--light-color);
    }
    header .icon #menu{
        display: none;
    }
</style>