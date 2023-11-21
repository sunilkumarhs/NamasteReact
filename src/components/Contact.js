const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl my-2">Contact-Us</h1>
        <h3 className="text-slate-400 text-xl">
          Welcome to Contact-Us page using react-router-dom
        </h3>
      </div>

      <div className="mx-2 my-8 p-2">
        <h1 className="font-semibold text-xl text-slate-500 my-2 text-center">
          Feel Free to write any quaries
        </h1>
        <form className="border-2 border-double border-slate-800 mx-80 p-3 rounded-xl bg-slate-200">
          <h1 className="text-center font-semibold text-lg">
            Please fill the below boxes
          </h1>
          <input
            type="text"
            placeholder="name"
            className="border-2 border-collapse p-2 my-6 mx-6 text-lg rounded-lg"
          />
          <input
            type="text"
            placeholder="mail-id"
            className="border-2 border-collapse p-2 my-4 text-lg w-6/12 rounded-lg"
          />
          <textarea
            placeholder="message"
            className="border-2 border-collapse p-2 ml-6 w-11/12 text-lg rounded-lg"
          />
          <button className="border-2 border-slate-500 text-xl bg-slate-600 rounded-lg p-2 text-white mt-6 mx-60 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
