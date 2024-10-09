export default function Contact() {
    return (<div className="forms max-w-lg mx-auto px-4 py-8">
        <h1 className="p-heading animation text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="form">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
            <input type="text" id="name" className="w-full p-2"
required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
            <input type="email" id="email"  className="w-full p-2"
required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message:</label>
            <textarea id="message" className="w-full p-2"
required></textarea>
          </div>
          <div className="flex justify-center">
          <button className="bttn w-full md:w-1/3 mx-auto block" type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
  