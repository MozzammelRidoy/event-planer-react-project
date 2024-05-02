
const Pakage = ({pakage}) => {
    const {title,image, packages} = pakage; 
    return (
        <div data-aos="zoom-in" data-aos-duration="1500" className="grid grid-cols-5">
           <div className="relative col-span-2">
           <img className="image-full " src={image} alt="" />
            <p className=" bottom-0 w-full text-center absolute transform py-2 text-white font-bold    bg-black bg-opacity-40">{title}</p>
           </div>
           <div className="col-span-3 border leading-none flex flex-col justify-evenly bg-black text-white bg-opacity-100  md:p-4 p-1 border-s-0">
           {
                packages.map(pakage => <div key={pakage.id}><p> <span className="md:text-3xl  font-bold">${pakage.price}</span><span className="text-xs tracking-tighter	md:tracking-normal md:text-sm">/{pakage.name}</span></p></div>)
            }
           </div>
        </div>
    );
};

export default Pakage;