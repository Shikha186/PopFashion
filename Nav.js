import './nav.css';

function Nav() {
    return(
            <div className='nav'>
                <div>POP</div>
                <div>KPOP</div>
                <div>CLOTHING TYPES</div>
                <div>ACCESSORIES</div>
                <div>Meme T-SHIRTS</div>
                <div className="icon">
                    <div  className='i'><i class="fa-regular fa-user"></i></div>
                    <div className='i'><i class="fa-regular fa-heart"></i></div>
                    <div className='i'><i class="fa-solid fa-cart-shopping"></i></div>
                </div>
            </div>
    );
}

export default Nav;