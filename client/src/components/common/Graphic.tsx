export default function Graphic() {
    return (
        <div className="md:w-1/2 relative">
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          {/* Abstract graphic */}
          <div className="absolute inset-0 rounded-2xl bg-white shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* User avatars melayang */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12"></div>
            </div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8"></div>
            </div>
          </div>
        </div>
      </div>
    )
}