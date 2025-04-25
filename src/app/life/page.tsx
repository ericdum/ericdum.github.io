import { getLife } from '@/lib/api';

export default async function LifePage() {
  const life = await getLife();

  return (
    <div className="space-y-8">
      {life.interests.map((category) => (
        <section key={category.category} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    访问链接
                  </a>
                )}

                {item.events && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">演讲经历</h4>
                    <div className="space-y-3">
                      {item.events.map((event) => (
                        <div key={event.name} className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900">{event.name}</h5>
                          <p className="text-gray-700">{event.topic}</p>
                          <p className="text-gray-600 text-sm">{event.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.gallery && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">摄影作品</h4>
                    <div className="space-y-3">
                      {item.gallery.map((photo) => (
                        <div key={photo.title} className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900">{photo.title}</h5>
                          <p className="text-gray-600 text-sm">
                            {photo.location} | {photo.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.recentTrips && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">旅行足迹</h4>
                    <div className="space-y-3">
                      {item.recentTrips.map((trip) => (
                        <div key={trip.destination} className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-semibold text-gray-900">{trip.destination}</h5>
                          <p className="text-gray-600 text-sm">{trip.date}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {trip.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 