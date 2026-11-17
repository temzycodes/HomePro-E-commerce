const Contact = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="w-[90%] mx-auto text-center py-12">
        <p className="text-sm uppercase tracking-[3px] font-semibold text-[#1E6E73]">
          Get In Touch
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#14293E]">
          We'd Love to Hear From You
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
          Have a question about our products or need assistance?
          Send us a message, and we'll be happy to help.
        </p>
      </section>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#14293E] text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold">
            Let's Talk
          </h2>
          <p className="mt-4 text-gray-300 leading-7">
            We're here to help you with your questions and enquiries
            about HomePro Smart Living.
          </p>
          <div className="mt-10">
            <h3 className="font-semibold text-lg">
              How can we help?
            </h3>
            <p className="mt-3 text-gray-300 leading-7">
              Whether you're exploring our products or need help
              with an enquiry, use the form to reach out to us.
            </p>
          </div>
        </div>
        <form className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#14293E]">
            Send Us a Message
          </h2>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E6E73]"
            />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E6E73]"
            />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              defaultValue=""
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E6E73]"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option>Product Enquiry</option>
              <option>Order Assistance</option>
              <option>General Enquiry</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E6E73] resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-[#1E6E73] hover:bg-[#18595D] text-white py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
