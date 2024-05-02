import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {title,id,  headline} = service; 

   

    return (
        <div>

       


            <div  className="space-y-1 text-center">
                <h2 className="text-3xl font-bold shadow-2xl text-center">{title}</h2>
                <h3 className="text-xl text-center">{headline}</h3>
                <Link to={`/service/${id}`}><button className="btn btn-outline btn-primary w-full rounded-none border-x-0 text-xl mt-2">More Info</button></Link>
            </div>

        </div>
    );
};

export default Service;