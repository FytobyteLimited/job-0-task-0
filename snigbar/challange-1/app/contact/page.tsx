import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 py-8 my-20">
      <div className="text-center space-y-6 w-11/12 md:w-3/5">
        <h1 className="text-3xl md:text-5xl">Contact Us</h1>
        <p className="text-lg font-light w-4/5 mx-auto">
          Drop us a line to start your project or simply just say Hello!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12 md:w-4/5 mx-auto mt-4 gap-4 md:gap-2">
        <div className="space-y-4 w-full text-center md:text-left">
          <h1 className="text-2xl">We are Ready</h1>
          <p className="text-xl md:text-3xl font-semibold">
            Let&apos;s Connect
          </p>
          <div className="space-y-1">
            <p className="md:text-lg font-semibold">Head-quarters:</p>
            <p>
              Indonesia, Jakarta <br />
              Phone: (+62) 82260362579 <br />
              Email: mfahlevi740@gmail.com <br />
            </p>
          </div>
        </div>
        {/* contact us form */}
        <form action="#" className="space-y-8 w-full">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-primary-dark text-white dark:bg-white dark:text-primary-dark rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
