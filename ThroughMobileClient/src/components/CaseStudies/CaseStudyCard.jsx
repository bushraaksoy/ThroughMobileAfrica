const CaseStudyCard = ({ study }) => {
    return (
        <div className="rounded-[35px] w-80 h-[400px] border border-brand-4 flex flex-col backdrop-blur-md overflow-hidden shadow-lg max-sm:w-72">
            <img
                src={study?.thumbnail}
                alt="Case Study Image"
                className="w-full h-[250px] object-cover "
            />
            <div className="px-2 pt-2 pb-5 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-sm font-semibold text-stone-800">
                        {study?.title}
                    </h2>
                    <p className="text-[11px] text-stone-700">
                        {study?.description}
                    </p>
                </div>
                <button className=" mt-auto ml-auto py-1 px-3 text-xs rounded-full bg-brand-4 text-white">
                    View Study
                </button>
            </div>
        </div>
    );
};

export default CaseStudyCard;
