import Button from "./Components/Button";

function Landing() {
  return (
    <div className="max-w-full m-16 bg-[#FFFFFF] ">
      <div className="flex justify-between items-center font-montserrat h-72 bg-black">
        <div className=" mb-8 flex flex-col justify-center items-center">
          <img
            src="src\assets\Logo.png"
            alt="Logo"
            className="w-36 h-40 object-cover"
          />
          <span className="text-[''#000000] shadow-sm font-light leading-9 tracking-tight">
            TOOR & STEDS
          </span>
        </div>
        <div className="flex  justify-center ">
          <div className=" ">
            <p className="text-['#000000'] opacity-70 text-base pt-3">
              Choose your category?
            </p>
          </div>
          <div className=" ">
            <Button text="Register" bgColor={"#004AAC"} textColor={"#D8E6F9"} />
            <Button text="Login" bgColor={"#C0CEE1"} textColor={"#373737"} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div className="font-montserrat w-[55%] ml-8">
          <h2 className="bg-['#000000'] font-bold text-[2rem] w-full">
            Empower Your Online Shopping Transactions with{" "}
            <span className="font-light">TOOR & STEDS</span>
          </h2>
          <p className="text-[0.9rem] py-8 font-normal w-[75%]">
            Discover Toor & Steds, your one-stop shop for premium mini tools
            that maximize potential in minimal space.
          </p>
          <button className=" bg-[#A0AEC1] w-[70%] h-[15%] py-2">
            Get Started
          </button>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img
            src="src\assets\image 4.png"
            alt="A boy"
            className="w-[80%] h-full ml-36 object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="w-[45%] flex justify-center items-center ">
          <img src="src/assets/image 5.png" alt="A boy" className="w-[50%]" />
        </div>
        <div className="font-montserrat w-[45%] ">
          <h2 className="bg-['#000000'] font-bold text-[2rem] w-full">
            Why Choose <span className="font-light">TOOR & STEDS</span>
          </h2>
          <p className="text-[0.9rem] py-8 font-normal">
            Experts in Miniaturization: &quot;quotes&quot;At Toor & Steds, we
            &quot;quotes&quot; re passionate about mini tools. We understand the
            unique needs of small projects and have curated a selection of
            high-quality, functional mini tools that get the job done right.
            &quot;quotes&quot;
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="font-montserrat w-[45%] ">
          <h2 className="bg-['#000000'] font-bold text-[2rem] w-full">
            For<span className="font-light">Users</span>
          </h2>
          <p className="text-[0.9rem] py-8 font-normal">
            Start managing your Mini Online Smart Tools expenses the smart way.
            Sign up or log in to access your TOOR & STEDS.
          </p>
          <button className=" bg-[#A0AEC1] w-[100%] h-[15%] py-2">
            Get Started
          </button>
        </div>
        <div className="w-[45%] flex justify-center items-center ">
          <img src="src\assets\image 7.png" alt="A boy" className="w-[70%]" />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="w-[45%] flex justify-center items-center ">
          <img src="src\assets\image 6.png" alt="A boy" className="w-[70%]" />
        </div>
        <div className="font-montserrat w-[45%] ">
          <h2 className="bg-['#000000'] font-bold text-[2rem] w-full">
            For<span className="font-light"> Add cart</span>
          </h2>
          <p className="text-[0.9rem] py-8 font-normal">
            Start managing your Mini Online Smart Tools expenses the smart way.
            Sign up or log in to access your TOOR & STEDS.
          </p>
          <button className=" bg-[#A0AEC1] w-[100%] h-[15%] py-2">
            Log In
          </button>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Landing;
