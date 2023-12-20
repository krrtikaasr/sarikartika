import React from 'react';
import InstagramIcon from "../../../public/icons8-instagram.svg";
import GithubIcon from "../../../public/github-142-svgrepo-com.svg";
import TwitterIcon from "../../../public/twitter-svgrepo-com.svg";
import TiktokIcon from "../../../public/tiktok-svgrepo-com.svg";
import Link from "next/link";
import Image from 'next/image';


const EmailSec = () => {
    const githubUrl = "https://github.com/krrtikaasr";
    const instagramUrl = "https://www.instagram.com/krrtikasr?igshid=OGQ5ZDc2ODk2ZA==";
    const twitterUrl = "https://x.com/veryverykaa?t=34WeOEEIQSnH2F1_Kfusew&s=08";
    const tiktokUrl = "https://www.tiktok.com/@dvxxcyz?_t=8iJGeXCJv8h&_r=1";
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-800 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s have a talk!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-mb">
                {""}
                Have a question, suggestion, or just want to say hello?  <br></br>
                I&apos;d love to hear from you. Reach out through any of the <br></br> social media on the right side of this text. You can also <br></br> contact me on my phone number above. <br></br>
                
            </p> 
        </div>
        <div>
            <form className="flex flex-col">
                <div className='mb-6'>
                    <h5 className="text-xl font-bold text-white my-2">Find me on</h5>
                    <div className='socials flex flex-row gap-2'>
                        <Link href={githubUrl}>
                            <Image src={GithubIcon} alt='Github Icon' width={50} height={50} className='filter brightness-0 invert'/>
                        </Link>
                        <Link href={instagramUrl}>
                            <Image src={InstagramIcon} alt='Instagram Icon' width={50} height={50} className='filter brightness-0 invert'/>
                        </Link>
                        <Link href={twitterUrl}>
                            <Image src={TwitterIcon} alt='twitter Icon' width={50} height={50}/>
                        </Link>
                        <Link href={tiktokUrl}>
                            <Image src={TiktokIcon} alt='Tik Tok Icon' width={50} height={50} className='filter brightness-0 invert'/>
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    </section>
  ) 
}

export default EmailSec