import instagramcopy from '../instagramcopy.png';
import snapchatcopy from '../snapchatcopy.png';
import tikkytokcopy from '../tikkytokcopy.png';
import twittercopy from '../twittercopy.png';
import pinterestcopy from '../pinterestcopy.png';


const Footer = () => {
    
    return ( 

        <>

        <hr/>
        

            <div class="footer-content">

                <br></br>


            <h3>MyMoon</h3>
            {/* <h3>Follow us on social media!</h3> */}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

            <ul class="socials">

                 
                 <li><img src={instagramcopy} alt = "Productimg" width={50} /> </li>

                <li><img src={snapchatcopy} alt = "Productimg" width={50}/></li>

                <li><img src={tikkytokcopy} alt = "Productimg" width={50}/></li>

                <li><img src={twittercopy} alt = "Productimg" width={50}/></li>

                <li><img src={pinterestcopy} alt = "Productimg" width={50}/></li> 

                {/* <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li> */}

            </ul>

            </div>

            <div class="footer-bottom">

            <p> &copy; <a href="/">MyMoon</a> </p>

            <div class="footer-menu">

                <ul class="f-menu">

                <li>Home</li>

                <li>About</li>

                <li>Contact</li>

                </ul>

            </div>

            </div>

        </>
     );
}
 
export default Footer;