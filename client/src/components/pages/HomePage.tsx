import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Grapich from "../common/Graphic";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Elevate Your Team's{" "}
                  <span className="text-primary">Potential</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Our intuitive user management system helps you organize,
                  track, and optimize your workforce with powerful tools and
                  insightful analytics.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">
                      Real-time updates
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">Secure data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm font-medium">Custom roles</span>
                  </div>
                </div>
              </div>

              <Grapich />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
