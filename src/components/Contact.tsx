import { 
  useState,
  ChangeEvent,
  FormEvent
} from 'react'
import { motion } from 'framer-motion'
import Select from 'react-select';
import countryList from 'react-select-country-list';
import emailjs from '@emailjs/browser';


interface FormData {
  profession: string;
  country: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
}

interface EmailJSTemplateParams {
  to_emails: string;
  first_name: string;
  last_name: string;
  from_email: string;
  profession: string;
  country: string;
  company_name: string;
  phone: string;
  note: string;
  [key: string]: string; // This adds the index signature
}

const Contact = () => {

    // Form state
    const [formData, setFormData] = useState<FormData>({
      profession: '',
      country: '',
      companyName: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      note: ''
    });
  
    // Loading and success states
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    // Professions list - you can customize this
    const professions: string[] = [
      "Fabricator",
      "Manufacturer",
      "Installer",
      "General Contractor",
      "Project Manager",
      "Developer",
      "Architect",
      "Structural Engineer",
      "MEP Engineer",
      "Site Supervisor",
      "Construction Foreman",
      "Procurement Specialist",
      "Supply Chain Manager",
      "Operations Manager",
      "Quality Control Inspector",
      "Construction Consultant",
      "BIM Specialist",
      "Logistics Coordinator"
    ];
  
    // Convert countries object to array
    const countryOptions = countryList().getData().map(country => ({
      value: country.value,
      label: country.label
    }));
  
    const professionOptions = professions.map(profession => ({
      value: profession,
      label: profession
    }));
  
    const formatOptionLabel = ({ value, label }: {value: string, label: string}) => (
      <div className="flex items-center">
        <img
          src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
          alt={label}
          className="mr-2"
        />
        <span>{label}</span>
      </div>
    );
  
    // Handle input changes
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
  
    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
      
      try {
        // Replace these values with your actual EmailJS service, template, and user IDs
        const serviceId: string = 'service_64bb84r';
        const templateId: string = 'template_uli6m8b';
        const userId: string = '_k2-bwIcrrX_ZxyD6';
        
        const templateParams: EmailJSTemplateParams = {
          to_emails: 'konstantin@maestro-tech.com', // Multiple recipients
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_email: formData.email,
          profession: formData.profession,
          country: formData.country,
          company_name: formData.companyName,
          phone: formData.phone,
          note: formData.note
        };
        
        await emailjs.send(serviceId, templateId, templateParams, userId);
        
        setIsSuccess(true);
        setFormData({
          profession: '',
          country: '',
          companyName: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          note: '',
        });
      } catch (err) {
        console.error('Error sending email:', err);
        setError('Failed to send your request. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <section className="section relative overflow-hidden bg-background min-h-screen flex items-center" id="contact">
          <div
            className='grid w-full lg:grid-cols-2 justify-items-center mt-24 lg:mt-28 mb-16'
          >
            <div
              className='hidden lg:flex flex-col w-fit justify-between items-start gap-8 text-left px-3'
            >
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className='flex flex-col gap-3'
                >
                  <h1 className="text-5xl md:text-7xl text-white">
                    Interested in solving your problems with Maestro Pilot?
                  </h1>
                  <h1 className="text-5xl md:text-7xl text-gray-300">
                    Get started with filling out the form below and we will get you in contact with our team.
                  </h1>
                </motion.div>
            </div>
            {isSuccess ? (
              <div className="bg-[#1E1E1E] border-l-2 border-gray-600 text-white p-4 mb-6" role="alert">
                <p className="font-medium">Thank you for your submission!</p>
                <p>We'll be in touch with you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 bg-[#1E1E1E] border border-white hover:bg-[#FF4300] text-white py-2 px-4 rounded"
                  type="button"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className='flex w-full justify-center items-center px-3'
                >
                  <form onSubmit={handleSubmit} className='space-y-1 lg:space-y-3'>
                    {/* Profession Selection */}
                    <div>
                      <label htmlFor="profession" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        What describes your role in the project delivery?
                      </label>
                      <Select
                        id="profession"
                        name="profession"
                        options={professionOptions}
                        value={countryOptions.find(option => option.label === formData.profession)}
                        onChange={(option) => handleChange({
                          target: { name: 'profession', value: option?.label || '' }
                        } as any)}
                        placeholder="Select your job title"
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: '#1E1E1E',
                            borderColor: 'rgb(209, 213, 219)',
                            textAlign: 'left',
                            boxShadow: 'none',
                            '&:hover': {
                              borderColor: '#FF4300'
                            }
                          }),
                          option: (base, { isFocused, isSelected }) => ({
                            ...base,
                            backgroundColor: isFocused ? '#FF4300' : '#1E1E1E',
                            textAlign: 'left',
                            color: isFocused ? 'white' : isSelected ? 'white' : 'rgb(209, 213, 219)',
                            '&:hover': {
                              backgroundColor: '#FF4300',
                            }
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: 'white'
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: '#1E1E1E',
                            "&::-webkit-scrollbar": {
                              width: "8px"
                            },
                            "&::-webkit-scrollbar-track": {
                              background: "#1E1E1E"
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "white",
                              borderRadius: "4px"
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                              background: "white"
                            }
                          }),
                          menuList: (base) => ({
                            ...base,
                            // These are important for the scrollbar styling to work
                            "&::-webkit-scrollbar": {
                              width: "8px"
                            },
                            "&::-webkit-scrollbar-track": {
                              background: "#1E1E1E"
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "white",
                              borderRadius: "4px"
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                              background: "#4b5563"
                            }
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: 'rgb(209, 213, 219)'
                          }),
                        }}
                        required
                      />
                    </div>
                    
                    {/* Country Selection */}
                    <div>
                      <label htmlFor="country" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Country
                      </label>
                      <Select
                        id="country"
                        name="country"
                        options={countryOptions}
                        value={countryOptions.find(option => option.label === formData.country)}
                        onChange={(option) => handleChange({
                          target: { name: 'country', value: option?.label || '' }
                        } as any)}
                        formatOptionLabel={formatOptionLabel}
                        placeholder="Select your country"
                        className="basic-select"
                        classNamePrefix="select"
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: '#1E1E1E',
                            borderColor: 'rgb(209, 213, 219)',
                            textAlign: 'left',
                            boxShadow: 'none',
                            '&:hover': {
                              borderColor: '#FF4300'
                            }
                          }),
                          option: (base, { isFocused, isSelected }) => ({
                            ...base,
                            backgroundColor: isFocused ? '#FF4300' : '#1E1E1E',
                            textAlign: 'left',
                            color: isFocused ? 'white' : isSelected ? 'white' : 'rgb(209, 213, 219)',
                            '&:hover': {
                              backgroundColor: '#FF4300',
                            }
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: 'white'
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: '#1E1E1E',
                            "&::-webkit-scrollbar": {
                              width: "8px"
                            },
                            "&::-webkit-scrollbar-track": {
                              background: "#1E1E1E"
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "white",
                              borderRadius: "4px"
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                              background: "white"
                            }
                          }),
                          menuList: (base) => ({
                            ...base,
                            "&::-webkit-scrollbar": {
                              width: "8px"
                            },
                            "&::-webkit-scrollbar-track": {
                              background: "#1E1E1E"
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "white",
                              borderRadius: "4px"
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                              background: "#4b5563"
                            }
                          }),
                          input: (base) => ({
                            ...base,
                            color: 'white'
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: 'rgb(209, 213, 219)'
                          }),
                          indicatorSeparator: (base) => ({
                            ...base,
                            backgroundColor: 'rgb(209, 213, 219)'
                          }),
                          dropdownIndicator: (base) => ({
                            ...base,
                            color: 'rgb(209, 213, 219)',
                            '&:hover': {
                              color: '#FF4300'
                            }
                          })
                        }}
                        required
                      />
                    </div>
                    
                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className='py-1 lg:py-2 w-full border border-gray-300 rounded-md px-3 bg-background text-white'
                      />
                    </div>
                    
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className='py-1 lg:py-2 w-full border border-gray-300 rounded-md px-3 bg-background text-white'
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className='py-1 lg:py-2 w-full border border-gray-300 rounded-md px-3 bg-background text-white'
                      />
                    </div>
                    
                    {/* Corporate Email */}
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Business Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='py-1 lg:py-2 w-full border border-gray-300 rounded-md px-3 bg-background text-white'
                      />
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='py-1 lg:py-2 w-full border border-gray-300 rounded-md px-3 bg-background text-white'
                      />
                    </div>

                    {/* Note */}
                    <div
                      className='relative'
                    >
                      <label htmlFor="note" className="block mb-2 text-sm text-left font-medium text-gray-600">
                        Tell us about your needs: a bit of context will allow us to hit the ground running
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        required
                        maxLength={280}
                        className='py-1 lg:py-2 w-full border h-16 border-gray-300 rounded-md px-3 bg-background text-white resize-none'
                      />
                      <div className={`absolute bottom-2 right-3 text-xs ${formData.note.length > 250 ? 'text-orange-400' : 'text-gray-400'}`}>
                        {formData.note.length}/280
                      </div>
                    </div>
                    
                    {/* Error message */}
                    {error && (
                      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p>{error}</p>
                      </div>
                    )}

                    {/* Privacy */}
                    <span
                      className='text-sm md:text-base'
                    >
                      Learn more about our
                      {" "}
                      <a href="https://www.maestro-tech.com/cookie-policy/" className="text-white underline"> cookies policy</a>
                      {" "}
                      and
                      {" "}
                      <a href="https://www.maestro-tech.com/privacy-policy/" className="text-white underline"> privacy policy</a>
                    </span>
                    
                    {/* Submit Button */}
                    <div
                      className='mt-6'
                    >
                      <button
                        type="submit"
                        disabled={isLoading}
                        className='w-full bg-[#FF4300] py-1 lg:bg-transparent lg:py-3 border-2 hover:bg-[#FF4300] text-white px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4300] disabled:bg-gray-600'
                      >
                        {isLoading ? 'Submitting...' : 'Schedule a demo'}
                      </button>
                    </div>
                  </form>
                </motion.div>
            )}
          </div>
    </section>
  )
}

export default Contact 