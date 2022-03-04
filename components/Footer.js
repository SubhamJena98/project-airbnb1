import Image from "next/image"


function Footer() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
                <div className="space-y-3 text-xs text-gray-800">
                    <h5 className="font-bold ">ABOUT</h5>
                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Letter from our founders</p>
                    <p>ALearn about new features</p>
                    <p>Airbnb luxe</p>
                    <p>Careers</p>
                </div>

                <div className="space-y-3 text-xs text-gray-800">
                    <h5 className="font-bold ">COMMUNITY</h5>
                    <p>Accessibilty</p>
                    <p>This is not a real site</p>
                    <p>Its a Awesome clone</p>
                    <p>Referrals accepted</p>
                    <p>React Developer</p>
                </div>

                <div className="space-y-3 text-xs text-gray-800">
                    <h5 className="font-bold ">HOST</h5>
                    <p>Subham Jena</p>
                    <p>Presents</p>
                    <p>Airbnb-Clone</p>
                    <p>Made with Next js</p>
                    <p>Join Now</p>
                </div>

                <div className="space-y-3 text-xs text-gray-800">
                    <h5 className="font-bold ">SUPPORT</h5>
                    <p>Help Center</p>
                    <p>Safety information</p>
                    <p>Cancellation options</p>
                    <p>Our COVID-19 Response</p>
                    <p>Supporting people with disabilities</p>
                    <p>Report a neighbourhood concern</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 h-30 space-y-5">
                <div className="text-center">
                    <p className="mt-5">&copy; {new Date().getFullYear()} Airbnb-Clone, Inc.</p>
                </div>
                <div className="text-center">
                    <p className="font-bold">MADE BY SUBHAM JENA</p>
                </div>
                <div className="justify-center flex space-x-6 pb-10 text-center">
                
                    <a href="https://www.facebook.com/subham.jena.501/">
                        <Image
                            className="cursor-pointer hover:scale-105 transition transform duration-150"
                            src="/images/facebook.png"
                            alt="facebook"
                            height="30"
                            width="30"
                        />
                        </a>

                        <a href="https://www.instagram.com/____mr_subham____/">
                        <Image
                            className="hover:scale-105 transition transform duration-150 cursor-pointer"
                            src="/images/instagram.png"
                            alt="instagram"
                            height="30"
                            width="30"
                        />
                        </a>

                        <a href="https://www.linkedin.com/in/subham-kumar-jena-b4042614b/">
                        <Image
                            className="hover:scale-105 transition transform duration-150 cursor-pointer"
                            src="/images/Linkedin.png"
                            alt="linkedin"
                            height="30"
                            width="30"
                        />
                        </a>

                        <a href="https://github.com/SubhamJena98">
                        <Image
                            className="hover:scale-105 transition transform duration-150 cursor-pointer"
                            src="/images/github.png"
                            alt="github"
                            height="30"
                            width="30"
                        />
                        </a>

                </div>
            </div>


        </div>

    )
}

export default Footer