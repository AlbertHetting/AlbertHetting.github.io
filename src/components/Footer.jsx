import "./FooterStyle.css";

export default function Footer(){



            return(


            <div className="FooterCon">
                <footer>

                <div className="Contact">
                    <h2> Contact </h2>
                    <div className="line4"></div>
                    <h1>Email: Albert@hetting.dk</h1>
                    <h1>Phone: +45 50 45 15 04</h1>
                    <h1>Email work: Albert@wifinowevents.com</h1>
                </div>



                <div className="Socials">

                        <h2>Socials</h2>
                        <div className="line5"></div>

                        <div className="Social1">
                        <img src="../public/SocialIcons/Github.png" href="https://github.com/AlbertHetting"/>
                        <a href="https://github.com/AlbertHetting">Github</a>
                        </div>


                         <div className="Social2">
                        <img src="../public/SocialIcons/Instagram.png" href="https://www.instagram.com/albert_hetting/"/>
                        <a href="https://www.instagram.com/albert_hetting/">Instagram</a>
                        </div>


                         <div className="Social3">
                        <img src="../public/SocialIcons/LinkedIn.png" href="https://www.linkedin.com/in/alberthetting/"/>
                        <a href="https://www.linkedin.com/in/alberthetting/">Linkedin</a>
                        </div>

                </div>


                <div className="Contact">
                    <h2> Downloads </h2>
                    <div className="line4"></div>
               
                      <a className="button2"                              
                        href={`${import.meta.env.BASE_URL}public/CVALBERTHETING2025.jpg`}
                        download>
                        Download CV
                     </a>



                </div>


                </footer>

            </div>

            )






}