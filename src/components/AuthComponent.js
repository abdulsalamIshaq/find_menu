function AuthComponent(props) {
    return (
        <>
            <div className="bg-white p-3 text-center">
                <span className="text-xl font-bold">Find Menu</span>
            </div>
            <div className="m-auto px-6 md:w-1/2 py-6">
                <div className="bg-desertSand h-24 rounded-xl"></div>
                <span className={`text-center block ${(props.subtitle)? 'pt-5': 'py-4'} font-semibold text-2xl`}>{props.title}</span>
                {(props.subtitle) ?
                    <span className="text-center pb-3 text-[#604E37] block font-semibold text-sm">{ props.subtitle }</span>
                : ''}
                { props.children }
            </div>
        </>

    );
}

export default AuthComponent;