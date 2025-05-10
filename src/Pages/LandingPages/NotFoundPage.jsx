import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#552583] text-white text-center px-6 py-10">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7DCNDfgNg9y9p5EpT_iE7RsECcTsZMPmKw&s" 
        alt="LeBron James" 
        className="rounded-full mb-6 w-32 h-32 object-cover shadow-xl border-4 border-[#FDB927]" 
      />
      <h1 className="text-5xl font-extrabold text-[#FDB927] mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">The link you followed might be broken or the page has been removed.</p>
      <p className="mt-4">
        <a href="/" className="text-[#FDB927] underline font-semibold hover:text-white">Go back to the homepage</a>
      </p>
    </div>
  );
}

export default NotFoundPage;
