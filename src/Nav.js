import logo from './logo-bookmark.svg'
import hamburger from './icon-hamburger.svg'


export default function Nav(){
    return(

<nav className='nav' >

<div>
<img src={logo}  alt="logo" />
</div>

<div>
<img src={hamburger}  alt="logo" />
</div>
</nav>



    )
}