import Link from 'next/link';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col space-y-2  justify-center items-center   bg-white overflow-hidden">
      <div className='m-auto  h-full min-h-[400px] shadow-lg flex flex-col  space-y-3 justify-center items-center p-4 rounded-md'>
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <p className="text-3xl font-medium">
          Sorry, the page you're looking for can't be found.
        </p>
        <Link 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded text-xl"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;