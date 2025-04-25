import { getResearch } from '@/lib/api';
import { ResearchProject } from '@/types/research';

export default async function ResearchPage() {
  const research = await getResearch() as ResearchProject[];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">研究项目</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">研究团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 这里可以添加团队成员信息 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
            <h3 className="text-lg font-semibold text-gray-900">团队成员姓名</h3>
            <p className="text-gray-600">职位/角色</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">研究设施</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">实验室设备</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>设备名称 1</li>
              <li>设备名称 2</li>
              <li>设备名称 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">软件工具</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>工具名称 1</li>
              <li>工具名称 2</li>
              <li>工具名称 3</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 