import Link from "next/link";

function Navigation(){
    return (
        <>
            <nav className="flex bg-teal-600 drop-shadow-lg h-16 items-center text-lg text-pink-50 font-mono">
                <div className="basis-1/4 justify-center px-20">
                    <div><a>Company Name</a></div>
                </div>
                <div className="basis-1/2"></div>
                <div className="flex basis-1/4 justify-around px-5">
                    <div>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div><a>About</a></div>
                    <div><a>Posts</a></div>
                </div>
            </nav>
        </>
    )
}

function Body(){
    return (
        <>
            <div className="flex flex-col items-center ml-64 mr-64 mt-8 mb-8 p-3 bg-white border-2 border-teal-600">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold underline">
                    Hello world!
                    </h1>
                </div>
                <div>
                    <p>Welcome to this website! We are testing Tailwind CSS. Please click the button below if you like the site</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Like!
                    </button>
                </div>
                <div>
                    -{` `}Developer P
                </div>
            </div>
        </>
    )
}

export default function FirstPost() {
    return (
        <>
            <div className="bg-teal-100 h-screen w-screen">
                <Navigation />
                <Body />
            </div>
        </>
    );
  }  