import Image from "next/image";

const PortFolio = ({ isUserKorean }: { isUserKorean: boolean }) => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I&#39;ve done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web1.png"}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web2.png"}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web3.png"}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web4.png"}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web5.png"}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={"/web6.png"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PortFolio;
