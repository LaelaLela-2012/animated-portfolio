import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>Laela L</span>
            <div className="social">
                <a href="#"><img src="/whatsapp.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/twitter.png" alt="" /></a>
                <a href="#"><img src="/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar