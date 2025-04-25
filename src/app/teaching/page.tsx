import { getCourses } from '@/lib/api/teaching';

export default async function TeachingPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">教学理念</h2>
        <div className="prose max-w-none space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">双世界认知</h3>
            <p className="text-blue-800">
              在当今时代，每个人都必须理解两个世界：物理世界和虚拟世界。计算机科学是理解虚拟世界的入口，它不仅仅是一门技术，更是认识新世界的钥匙。通过计算机教育，我们帮助学生建立对数字世界的认知框架，培养在双世界中自如切换的能力。
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-3">AI时代的思维培养</h3>
            <p className="text-green-800">
              在AI快速发展的时代，许多传统知识和技能正在被重新定义。我们更注重培养学生的逻辑思维、创新思维和批判性思维。这些是人类独特的精神财富，是AI无法替代的核心竞争力。我们的目标是帮助学生发展这些关键能力，成为AI时代的思考者和创造者。
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">AI协同教育</h3>
            <p className="text-purple-800">
              我们设计的每个课堂任务都考虑AI的参与，但目标都是培养AI无法独立完成的能力。我们鼓励学生将AI作为工具，而不是依赖。通过精心设计的任务，我们帮助学生发展独特的创造力和解决问题的能力，成为能够与AI协同工作，但保持人类独特价值的人才。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">教学课程</h1>
        
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                <div className="flex items-center space-x-2">
                  {course.grade.map((grade) => (
                    <span
                      key={`${course.id}-${grade}`}
                      className="px-2 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
                    >
                      {grade}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    {course.type}
                  </span>
                </div>
              </div>
              <div className="prose max-w-none mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">课程介绍</h3>
                <p className="text-gray-700">
                  {course.description || '暂无课程描述'}
                </p>
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-2">课程目标</h4>
                  <p className="text-gray-700">{course.target}</p>
                </div>
                {course.resources && course.resources.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">课程资源</h4>
                    <div className="space-y-2">
                      {course.resources.map((resource, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="text-md font-medium text-gray-900 mb-1">{resource.title}</h5>
                          <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            访问资源 →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {course.chapters.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">课程大纲</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {course.chapters.map((chapter) => (
                      <li key={chapter.id}>
                        {chapter.title}
                        {chapter.description && (
                          <span className="text-gray-500 text-sm ml-2">
                            - {chapter.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">学生评价</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700 italic">
              "课程内容深入浅出，老师讲解清晰，让我受益匪浅。"
            </p>
            <p className="text-gray-600 text-sm mt-2">- 学生姓名，2023</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700 italic">
              "老师非常注重实践，课程设计合理，学到了很多实用的知识。"
            </p>
            <p className="text-gray-600 text-sm mt-2">- 学生姓名，2023</p>
          </div>
        </div>
      </section>
    </div>
  );
} 