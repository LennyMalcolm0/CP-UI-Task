import { useState, useRef, useEffect } from "react";

const CriteriaDropdown = () => {
    const [dropdownValue, setDropdownValue] = useState("Opportunity Browsing");
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideQuestionBox = (event: MouseEvent) => {
            if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutsideQuestionBox);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideQuestionBox);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (  
        <div className="relative">
            <div 
                onClick={() => setShowDropdown(prev => !prev)}
                className="h-full w-[320px] px-4 rounded-t-[16px] bg-white flex items-center 
                justify-between shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)] cursor-pointer"
            >
                <h3 className="font-medium text-[#1D4ED8]">{dropdownValue}</h3>
                <img 
                    src="/dark-arrow-caret-down.svg" 
                    alt="arrow" 
                    className={`h-6 ${showDropdown && "rotate-180"}`} 
                />
            </div>

            {showDropdown && 
                <div 
                    ref={dropdownRef} 
                    className="w-full absolute mt-2 bg-white rounded-b-[16px] text-sm text-[#0B0B0B] border-none
                    max-h-[70dvh] overflow-y-auto custom-scroll-bar shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
                >
                    {dropdownItems.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                setDropdownValue(item.title);
                                setShowDropdown(false);
                            }}
                            className={`group h-[72px] px-4 border-b border-[#F2F2F2] flex items-center justify-between cursor-pointer
                                hover:bg-[#EDF2FF] ${dropdownValue === item.title && "text-[#1D4ED8] font-medium bg-[#EDF2FF]"} `
                            }
                        >
                            <span className="group-hover:text-[#1D4ED8] group-hover:font-medium">{item.title}</span>
                            <span className={`px-[10px] py-[2px] rounded-full text-xs font-medium group-hover:text-[#1D4ED8] group-hover:bg-[#D1DDFF] 
                                ${dropdownValue === item.title ? "text-[#1D4ED8] bg-[#D1DDFF]" : "text-[#444] bg-[#F8F8F8]"} `}
                            >
                                {item.quatity}
                            </span>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default CriteriaDropdown;

const dropdownItems = [
    {
        title: "Applied",
        quatity: 1745
    },
    {
        title: "Shortlisted",
        quatity: 435
    },
    {
        title: "Technical Interview",
        quatity: 124
    },
    {
        title: "Opportunity Browsing",
        quatity: 243
    },
    {
        title: "Video Interview I",
        quatity: 25
    },
    {
        title: "Video Interview II",
        quatity: 227
    },
    {
        title: "Video Interview III",
        quatity: 34
    },
    {
        title: "Offer",
        quatity: 43
    },
    {
        title: "Withdrawn",
        quatity: 178
    },
]