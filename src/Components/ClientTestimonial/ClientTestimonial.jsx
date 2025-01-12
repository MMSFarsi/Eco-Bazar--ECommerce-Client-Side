import { Fade, Slide } from "react-awesome-reveal";

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
      designation: "Frequent Buyer",
    },
    {
      id: 3,
      name: "NEYMAR",
      feedback:
        "Exceptional customer service and fantastic deals. It’s my go-to app for organic groceries!",
      image: "https://i.ibb.co.com/txP417Z/603-neymar.gif",
      designation: "Loyal Customer",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="text-center mb-8">
        <Slide direction="down" triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Client Testimonial
          </h2>
        </Slide>
        <Fade delay={300} triggerOnce>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here’s what our happy clients have to say about our services.
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Fade key={testimonial.id} triggerOnce>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center space-y-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 italic">"{testimonial.feedback}"</p>
              <span className="text-green-500 text-sm font-medium">
                {testimonial.designation}
              </span>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonial;
