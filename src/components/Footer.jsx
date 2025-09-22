export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] text-[#22262A]">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Branding */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/Icon.png" alt="E-Comm Logo" className="w-8 h-8" />
            <span className="font-poppins font-bold text-[20px]">E-Comm</span>
          </div>
          <p className="text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Middle - Follow Us */}
        <div>
          <h3 className="font-semibold text-[18px] mb-3">Follow Us</h3>
          <p className="text-sm text-gray-700 mb-3">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex gap-4">
            <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
          </div>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="font-semibold text-[18px] mb-3">Contact Us</h3>
          <p className="text-sm text-gray-700">
            E-Comm, 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-300 py-8">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Information", "Service", "My Account", "Our Offers"].map((title) => (
            <div key={title}>
              <h4 className="font-semibold text-[16px] mb-4">{title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img
              src="/Payment.png"
              alt="Payment Methods"
              className="w-[212px] h-[23px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
