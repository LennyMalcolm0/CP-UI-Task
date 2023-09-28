const SideNavbar = () => {
    return (  
        <nav className="h-full w-fit py-6 px-3 bg-white flex flex-col gap-[80px] justify-between 
            custom-scroll-bar overflow-auto shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)]"
        >
            <div>
                <div className="h-12 w-12 mb-8">
                    <img src="/side-navbar/company-logo.svg" alt="Logo" />
                </div>
                <div className="flex flex-col gap-6">
                    {navItems.map((item, index) => (
                        <div key={index} className="p-3 hover:bg-[#E9EFFF] rounded-[8px] cursor-pointer">
                            <img src={item.imageSrc} alt={item.altText} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="p-3 hover:bg-[#E9EFFF] rounded-[8px] cursor-pointer">
                    <img src="/side-navbar/settings.svg" alt="Settings" />
                </div>
                <div className="p-3 hover:bg-[#E9EFFF] rounded-[8px] mt-6">
                    <div className="h-6 w-6 bg-[#D7E5FD] text-[10px] font-semibold 
                    text-[#B1CDFD] grid place-content-center rounded-full">AS</div>
                </div>
            </div>
        </nav>
    );
}
 
export default SideNavbar;

const navItems = [
    {
        imageSrc: "/side-navbar/navigation-house-01.svg",
        altText: "Home"
    },
    {
        imageSrc: "/side-navbar/users-group.svg",
        altText: "Users"
    },
    {
        imageSrc: "/side-navbar/calendar-calendar-check.svg",
        altText: "Date"
    },
    {
        imageSrc: "/side-navbar/communication-share-android.svg",
        altText: "Share"
    },
    {
        imageSrc: "/file-document.svg",
        altText: "File"
    },
    {
        imageSrc: "/side-navbar/notebook.svg",
        altText: "Doc"
    },
    {
        imageSrc: "/side-navbar/interface-heart-01.svg",
        altText: "Liked"
    },
    {
        imageSrc: "/side-navbar/arrow-chevron-right-md.svg",
        altText: "Back"
    },
]