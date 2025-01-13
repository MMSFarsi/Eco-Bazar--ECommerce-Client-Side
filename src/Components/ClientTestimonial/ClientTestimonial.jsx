import { Fade, Slide } from "react-awesome-reveal";
import testiImg from "/images/testi.png"

const ClientTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "MESSI",
      feedback:
        "This service has completely transformed my shopping experience! The fresh products and fast delivery are unmatched.",
      image: "https://i.ibb.co.com/nz02xr8/images-q-tbn-ANd9-Gc-SQJ2s-ZUUc6xap9g-HYUVi9-LA2-Mnf-G8-7x-F33-Yejf-Ckud-Fpb2vo-AVKP3-K2kg9-RBHVo4g.jpg",
      designation: "Customer",
    },
    {
      id: 2,
      name: "RONALDO",
      feedback:
        "I’ve saved so much money using their discounts. Highly recommend this platform to anyone who loves shopping smart!",
      image: "https://i.ibb.co.com/0D77FX8/Cristiano-Ronaldo-Portugal-2024-4.jpg",
      designation: "Customer",
    },
    {
      id: 3,
      name: "NEYMAR",
      feedback:
        "Exceptional customer service and fantastic deals. It’s my go-to app for organic groceries!",
      image: "https://i.ibb.co.com/txP417Z/603-neymar.gif",
      designation: "Customer",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="text-center mb-8">
        <Slide direction="down" triggerOnce>
        <h2 className="text-3xl font-bold text-center mb-6">Client Testimonials</h2>
        <div className="flex justify-center mb-4">
        <div className="border-t-4 border-green-500 w-20"></div>
      </div>
        </Slide>
    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Fade key={testimonial.id} triggerOnce>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col   space-y-4">
            
        <img className="w-fit" src={testiImg} alt="" />
              <p  className="text-sm text-gray-600 h-20 ">"{testimonial.feedback}"</p>
              
             <div className="flex gap-5">
             <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-1 border-green-500"
              />
                 <div>
                 <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <span className=" text-sm text-gray-600 ">
                {testimonial.designation}
              </span>
                 </div>
             </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonial;
