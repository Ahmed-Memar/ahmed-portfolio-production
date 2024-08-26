
function LoadingCaptcha() {
    return (
    <div className="border border-stone-600/100 shadow bg-neutral-200 rounded-lg px-3 py-5 max-w-screen-sm w-[300px]">
        <div className="animate-pulse flex space-x-4">
            <div className="bg-slate-700 h-7 w-8 rounded-sm"></div>
            <div className="flex justify-between w-full">
                <div className="h-2 w-[80%] bg-slate-700 rounded self-center"></div>
            </div>
        </div>
    </div>
)};

export default LoadingCaptcha;