const Contact = function () {
  return (
    <>
      <h1 className="font-bold text-3xl p-2 my-4"> Contact Us Page </h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input type="text" placeholder="message" className="border p-2 m-2" />
        <button className="border border-black bg-gray-100 rounded-lg p-2 m-2">
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Contact;
