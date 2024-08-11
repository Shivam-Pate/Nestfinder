import React from 'react';
import about from '../assets/about.jpeg';

export default function About() {
  return (
    <div className='bg-stone-900 h-screen'>
    <div className=" flex flex-col md:flex-row p-3 bg-stone-900 gap-3 ">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={about} className="h-[700px]  rounded-lg shadow-md" alt="About Nest Finder" />
      </div>
      <div className="w-full md:w-1/2 flex  flex-col justify-center px-5 text-white">
        <div className="about-us-section p-6 bg-stone-900 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">About Nest Finder</h2>
          <p className="text-lg mb-4">
            <strong>Nest Finder</strong> is a premier real estate agency with a reputation for excellence in helping clients navigate the complex world of buying, selling, and renting properties. We pride ourselves on being a trusted partner for those seeking to find their dream home or investment property in the most desirable neighborhoods.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-lg mb-4">
            At Nest Finder, our mission is to turn real estate dreams into reality. We are committed to offering our clients expert guidance, personalized service, and an in-depth understanding of the local market. Whether you're a first-time homebuyer, an experienced investor, or someone looking to rent, we tailor our services to meet your unique needs and goals.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Why Choose Nest Finder?</h3>
          <ul className="list-disc list-inside text-lg mb-4">
            <li><strong>Expertise in the Local Market:</strong> Our agents are seasoned professionals with deep roots in the communities we serve. We have a comprehensive understanding of market trends, neighborhood dynamics, and property values, ensuring you make informed decisions.</li>
            <li><strong>Personalized Service:</strong> We believe that no two clients are alike. That’s why we take the time to understand your individual needs and preferences.</li>
            <li><strong>Seamless Process:</strong> Buying, selling, or renting a property can be stressful, but it doesn't have to be. Our team is dedicated to making the process as smooth and straightforward as possible.</li>
            <li><strong>Strong Negotiation Skills:</strong> Our agents are skilled negotiators who work tirelessly to secure the best possible terms for our clients.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
