import { getPatents } from '@/lib/api';

export default async function PatentsPage() {
  const patents = await getPatents();

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">专利成果</h1>
        
        <div className="space-y-8">
          {patents.map((patent) => (
            <div key={patent.id} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold text-gray-900">{patent.title}</h2>
                    {patent.url && (
                      <a
                        href={patent.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        查看专利
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">
                    专利号：{patent.patentNumber} | 状态：{patent.status}
                  </p>
                  <p className="text-gray-600">
                    发明人：{patent.inventors.join(', ')}
                  </p>
                  <p className="text-gray-600">
                    申请日期：{patent.filingDate}
                    {patent.grantDate && ` | 授权日期：${patent.grantDate}`}
                  </p>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">专利摘要</h3>
                    <p className="text-gray-700">{patent.abstract}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 