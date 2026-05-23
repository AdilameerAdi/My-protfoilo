import { useState, useEffect } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    securityCode: "",
  });

  const [errors, setErrors] = useState({});
  const [generatedCode, setGeneratedCode] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const generateCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCode(code);
  };

  useEffect(() => {
    generateCode();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (formData.securityCode.toLowerCase() !== generatedCode.toLowerCase())
      newErrors.securityCode = "Security code is incorrect";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const whatsappNumber = "923007029003";
      const text = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Message: ${formData.message}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");

      // Show success message
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 4000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        securityCode: "",
      });
      generateCode();
    }
  };

  return (
    <>
      <div>
        {/* Success Toast */}
        {successMessage && (
          <div className="fixed top-6 right-6 left-6 sm:left-auto sm:w-96 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in-top z-50">
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm opacity-90">Opening WhatsApp. We'll respond within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Main container */}
        <div className="w-11/12 mx-auto py-8">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Get in touch <span className="text-teal-500">With me</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Have any questions or suggestions? I'd love to hear from you. Send me a message and I'll respond as quickly as possible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-md border border-teal-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-[#41A5B0]">Quick Contact</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Email</p>
                  <a href="mailto:adilameeradi@gmail.com" className="text-[#41A5B0] hover:underline font-medium break-all">
                    adilameeradi@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Primary Phone</p>
                  <a href="tel:+923007029003" className="text-[#41A5B0] hover:underline font-medium">
                    +92 300 7029003
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Alternate Phone</p>
                  <a href="tel:+923499781283" className="text-[#41A5B0] hover:underline font-medium">
                    +92 349 9781283
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-auto">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-lg space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none input-focus-animation"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none input-focus-animation"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+92 300 1234567"
                    className="w-full border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none input-focus-animation"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                  <select
                    name="country"
                    className="w-full border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none input-focus-animation"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Your Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  className="w-full border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none resize-none input-focus-animation"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Security Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Security Code *</label>
                <div className="flex gap-3 items-end">
                  <div className="border-2 border-gray-300 bg-gray-100 px-4 py-3 rounded-lg min-w-fit">
                    <span className="font-mono text-lg font-bold tracking-widest text-gray-800">{generatedCode}</span>
                  </div>
                  <input
                    type="text"
                    name="securityCode"
                    placeholder="Enter the code"
                    className="flex-1 border-2 border-gray-200 focus:border-[#41A5B0] p-3 rounded-lg transition-colors duration-200 focus:outline-none"
                    value={formData.securityCode}
                    onChange={handleChange}
                  />
                </div>
                {errors.securityCode && <p className="text-red-500 text-sm mt-1">{errors.securityCode}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg btn-glow"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-top {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in-top {
          animation: slide-in-top 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
