import { useLoaderData, useParams } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const ServiceDetails = () => {
  const { id } = useParams();
  const intID = parseInt(id);
  const allServiceDetails = useLoaderData();

  const singleServiceDetails = allServiceDetails.find(
    (service) => service.id === intID
  );
  const { details, headline, image, title } = singleServiceDetails;

  return (
    <div className="md:p-12 p-2 bg-slate-200">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        <div>
          {" "}
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          {" "}
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          {" "}
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          {" "}
          <img className="w-full" src={image} alt="" />
        </div>
      </div>
      <div className="md:space-y-3 mt-4">
        <h2
          data-aos={"zoom-in"}
          data-aos-duration="1000"
          className="md:text-4xl text-xl  text-center"
        >
          {title}
        </h2>
        <h2 className="md:text-4xl text-xl font-bold text-center">
          <TypeAnimation
            sequence={[`${headline}`, 3000]}
            speed={{ type: "keyStrokeDelayInMs", value: 99 }}
            omitDeletionAnimation={true}
            cursor={false}
            repeat={1}
          />
        </h2>
        <p className="md:text-xl block text-justify ">
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={[`${details}`, 1000]}
            speed={{ type: "keyStrokeDelayInMs", value: 55 }}
            omitDeletionAnimation={true}
            cursor={false}
            repeat={3}
          />
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
