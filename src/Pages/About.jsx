import homeImage from '../assets/homeImage.jpg'
import heroImage from '../assets/heroImage.png'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-[80px] w-full items-center">
        <div className="w-full md:w-1/2 min-h-[400px] md:h-[500px] bg-[#14293E] text-white flex flex-col justify-center px-6 sm:px-10 md:px-[5%] py-12">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              About HomePro<br/> Smart Living
            </h2>
            <p className="max-w-[650px] text-base sm:text-lg leading-7 sm:leading-8 mt-4">
              HomePro Smart Living is your trusted partner in discovering
              high-quality home appliances that simplify everyday living. 
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-[#1E6E73] text-white rounded-xl px-5 py-3 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/products')}>Shop Now</button>
              <button className="bg-transparent border border-white text-white rounded-xl px-5 py-3 cursor-pointer text-sm sm:text-base" onClick={() => navigate('/products')}>Explore Products</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] bg-[#14293E]">
            <img className="w-full h-full object-contain" src={heroImage} alt="Home appliances"/>
          </div>
        </div>
        <section className="w-[90%] mx-auto py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#1E6E73]">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#14293E] leading-tight">
                The Story Behind HomePro
              </h2>
              <p className="mt-6 text-gray-600 leading-8 text-base">
                HomePro Smart Living was built around a simple idea: everyday
                living should be easier. We believe the right home appliances
                can simplify daily tasks, improve convenience, and make a
                house feel more like home.
              </p>
              <p className="mt-4 text-gray-600 leading-8 text-base">
                Our goal is to make discovering appliances for your everyday
                needs a simple and enjoyable experience.
              </p>
            </div>
            <div className="w-full md:w-1/2">
                <img src={homeImage} alt="Home appliances for modern living" className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"/>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-[#1E6E73]">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E6E73]">
                What Drives Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#14293E]">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-8">
                At HomePro, our mission is to make everyday living easier and
                more enjoyable through innovative home appliances. We strive
                to provide products that combine functionality, design, and
                technology, helping our customers create a comfortable and
                efficient home environment.
              </p>
            </div>
            <div className="bg-[#14293E] p-8 md:p-10 rounded-2xl shadow-sm">
              <p className="text-sm font-semibold uppercase text-[#64B7B5]">
                Where We're Going
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-300 leading-8">
                Our vision is to be a trusted partner in every home, offering
                appliances that enhance everyday life. We aim to continuously
                improve our product offerings and make smarter, more convenient
                living accessible to everyone.
              </p>
            </div>
          </div>
        </section>
        <section className="w-[90%] mx-auto my-16">
          <div className="bg-[#14293E] rounded-2xl px-6 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Make Your Home Smarter?
            </h2> 
            <p className="mt-5 max-w-2xl mx-auto text-gray-300 leading-7">
              Discover appliances that bring convenience, comfort, and
              simplicity to your everyday life.
            </p>
            <button onClick={() => navigate('/products')} className="mt-8 bg-[#1E6E73] hover:bg-[#18595D] text-white rounded-xl py-3 px-8 transition duration-300 cursor-pointer">Explore Products</button>

          </div>
        </section>
    </div>
  )
}

export default About