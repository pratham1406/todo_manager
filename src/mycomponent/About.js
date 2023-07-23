import React from 'react';
import imagepath1 from './11.jpg';
import imagepath2 from './2.jpg';
import imagepath3 from './33.jpg';
import './About.css'

export default function About() {
  let design = {
    imageHeight: "500px",
    width:"100%"
  };
 let cont={
  "height":"20%"
 }

  return (
    <>
    
    
      <div id="carouselExampleCaptions" className="carousel slide" style={cont}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagepath1} className="d-block" style={{ height: design.imageHeight,width: design.width }} alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h5>ALWAYS</h5>
             
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagepath2} className="d-block w-100" style={{ height: design.imageHeight,width: design.width }} alt="..." />
           
          </div>
          <div className="carousel-item">
            <img src={imagepath3} className="d-block w-100" style={{ height: design.imageHeight,width: design.width }} alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h5>HAVE TOO</h5>
             
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  




     
    <div className='shree '>
    
    <div className='container py-3'>
    <h2 className='text-center '>About me</h2>
       <p className='my-3'>
Hello! My name is mikey, and I am a curious soul with an insatiable appetite for learning and exploring the world around me. I hail from a small town nestled amidst picturesque landscapes, where the beauty of nature has always been a constant source of inspiration for me.

As an avid traveler, I have had the opportunity to wander through diverse cultures, witnessing the enchanting tapestry of human experiences. Each journey has left an indelible mark on my heart, fostering a deep appreciation for the intricacies of life and the rich diversity of our planet.

Beyond my love for travel, I am a passionate advocate for environmental conservation. Nature's splendor has kindled in me a sense of responsibility to protect and preserve it for future generations. I actively participate in local conservation initiatives, engaging in activities like tree-planting drives and beach clean-ups.

Apart from my adventurous spirit, I find solace in the realm of literature and arts. Books have been my constant companions, allowing me to delve into new worlds and empathize with characters from different walks of life. Writing is my creative outlet, where I can pen down my thoughts, observations, and musings about the wonders of existence.

In my free time, you'll often find me immersed in a canvas, exploring the therapeutic power of colors and shapes. Art, for me, is not just a form of expression but a way to connect with my inner self and create something meaningful.

Professionally, I am a software engineer, relishing the challenges of problem-solving and turning ideas into reality through coding. Technology's ever-evolving landscape intrigues me, and I thrive on embracing innovations that can make a positive impact on society.

Beyond my pursuits and endeavors, I cherish spending time with my family and friends, sharing laughter and creating cherished memories together. They are my pillars of strength, offering unwavering support throughout my journey.

In a world of constant change, I believe in the power of kindness and compassion. Empathy has been a guiding light in my life, reminding me to walk in the shoes of others and foster understanding.

My life's philosophy revolves around embracing the beauty of imperfection and celebrating the uniqueness of every individual. It is through the interplay of our differences that we create a harmonious symphony of humanity.

So, this is me – a curious, adventurous, and compassionate soul, weaving stories and memories along the intricate threads of life's tapestry. The journey continues, and I eagerly await the new chapters yet to be written.</p>
    </div>
    </div>
    </>
  );
}
