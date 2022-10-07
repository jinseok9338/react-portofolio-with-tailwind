import Image from "next/image";

const ServicesOffer = ({ isUserKorean }: { isUserKorean: boolean }) => {
  const serviceDetails = [
    {
      src: "/design.png",
      title: "Backend",
      description: "Creating a backend server that integrates the Database",
      koreanDescription: "서버 관리 및 데이터 베이스 통합을 위한 스택",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "Nest.js",
        "Fast-api",
        "MongoDb",
        "Postgres SQL",
        "Prisma",
        "TypeOrm",
        "Rust",
      ],
    },
    {
      src: "/code.png",
      title: "Cloud",
      description:
        "Creating an infrastructure for your dream project with ease",
      koreanDescription:
        "프로젝트의 빠른 배포와 계속적인 배포와 개발 (CD/CI)을 위한 스택",
      skills: [
        "GCP",
        "AWS",
        "Firebase",
        "Docker",
        "Kubernetes",
        "Git",
        "Terraform",
      ],
    },
    {
      src: "/consulting.png",
      title: "Web Application",
      description:
        "Not only designing a beautiful website, but building an application that runs and feels smooth",
      koreanDescription: "웹 어플리케이션을 위한 프레임워크 및 스택",
      skills: [
        "Typescript",
        "Rust",
        "Next.js",
        "Svelte",
        "Yew",
        "React",
        "Solid.js",
      ],
    },
  ];

  const Title = () => {
    if (isUserKorean) {
      return (
        <div>
          <h3 className="text-3xl py-1 dark:text-white">스택 및 스킬</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Ever since I started my journey as a developer, I have always had a
            keen interest in web and how we can not live without web. That is
            why I put emphasis on three things that are core to my journey as a
            developer.
            <span className="text-teal-500">백엔드 , </span>
            <span className="text-teal-500">Cloud, </span>
            and
            <span className="text-teal-500">
              {" "}
              WebAssembly and Web Application
            </span>
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Here are the skills that I can offer
          </p>
        </div>
      );
    }
    return (
      <div>
        <h3 className="text-3xl py-1 dark:text-white">My skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Ever since I started my journey as a developer, I have always had a
          keen interest in web and how we can not live without web. That is why
          I put emphasis on three things that are core to my journey as a
          developer.
          <span className="text-teal-500">Backend , </span>
          <span className="text-teal-500">Cloud, </span>
          and
          <span className="text-teal-500">
            {" "}
            WebAssembly and Web Application
          </span>
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Here are the skills that I can offer
        </p>
      </div>
    );
  };

  return (
    <section>
      <Title />
      <div className="lg:flex gap-10">
        {serviceDetails.map((service) => (
          <div
            className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
            key={service.src}
          >
            <Image
              src={service.src}
              width={100}
              height={100}
              alt=""
              className="hover:animate-small_bounce"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 ">{service.title}</h3>
            <p className="py-2">
              {!isUserKorean ? service.description : service.koreanDescription}
            </p>
            <h4 className="py-4 text-teal-600">Skills</h4>
            {service.skills.map((skill) => (
              <p className="text-gray-800 py-1" key={skill}>
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffer;
