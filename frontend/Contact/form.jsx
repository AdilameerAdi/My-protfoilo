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

  // Function to generate random 6-character code
  const generateCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCode(code);
  };

  useEffect(() => {
    generateCode(); // generate when form first loads
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
      const whatsappNumber = "923007029003"; // Pakistan code +92
      const text = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Message: ${formData.message}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
      
      // Reset form after sending
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        securityCode: "",
      });
      generateCode(); // new captcha
    }
  };

  return (
    <>
      <div>
        {/* main div*/}
        <div className="w-11/12 mx-auto py-8">
          {/* first div */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                Get in touch <span className="text-teal-500">With me</span>
              </h1>
              <p className="text-gray-600">
                If you have any suggestion or question for my website services,
                please write your query to me. I would like to answer you ASAP.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h1 className="text-xl font-semibold mb-2">Contact Details</h1>
              <p className="text-gray-700">
                <span className="font-semibold">Email: </span> adilameeradi@gmail.com <br />
                <span className="font-semibold">Mobile no: </span> +923007029003 <br />
                <span className="font-semibold">Alternate: </span> +923499781283
              </p>
            </div>
          </div>

          {/* second div - form */}
          <div className="w-auto">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="border p-2 rounded w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border p-2 rounded w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              {/* Phone & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="border p-2 rounded w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <select
                  name="country"
                  className="border p-2 rounded w-full"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Your Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">United Kingdom</option>
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
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                className="border p-2 rounded w-full"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              {/* Security Code */}
              <div className="flex items-center gap-4">
                <div className="border p-2 bg-gray-100">
                  <span className="font-mono text-lg">{generatedCode}</span>
                </div>
                <input
                  type="text"
                  name="securityCode"
                  placeholder="Write Security code here"
                  className="border p-2 rounded w-full"
                  value={formData.securityCode}
                  onChange={handleChange}
                />
              </div>
              {errors.securityCode && <p className="text-red-500 text-sm">{errors.securityCode}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded w-full font-semibold"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
