import { useEffect, useState } from "react";
import { Candidate } from "../mockdata";

interface CandidateInfoProps extends Candidate {
    selected: boolean;
    extraInfo?: boolean;
}
const CandidateInfo = ({
    firstName, 
    lastName, 
    education, 
    country, 
    tags, 
    selected,
    extraInfo,
}: CandidateInfoProps) => {
    const [candidateSelected, setCandidateSelected] = useState(selected);
    useEffect(() => setCandidateSelected(selected), [selected])

    return (  
        <div 
            onClick={() => setCandidateSelected(prev => !prev)}
            className="w-full flex items-start justify-between py-4 border-b border-[#F2F2F2]"
        >
            <div className="flex items-center gap-6">
                <input 
                    type="checkbox" 
                    checked={candidateSelected}
                    className="h-4 w-4 accent-[#1D4ED8]" 
                />
                <div className="py-[13px] px-[14px] rounded-full bg-[#EDF4FF] text-[#D0E1FF] text-xl font-semibold">
                    {firstName.slice(0, 1) + lastName.slice(0, 1)}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">{firstName + " " + lastName}</span>
                    <span className="text-[10px] font-medium">{country}</span>
                    <span className="text-[10px] font-light">{education}</span>
                    <div className="flex gap-2 text-[8px] text-[#1D4ED8]">
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </div>
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <div 
                                key={index} 
                                className="py-[2px] px-[10px] rounded-[16px] bg-[#F3FAFC] text-[8px] font-medium text-[#037092]"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {extraInfo &&
                <div className="flex gap-2 text-[10px] text-[#305DC6]">
                    <div className="py-1 px-2 rounded-[16px] bg-[#F7F8FD] flex gap-1">
                        <img src="/media-play-circle.svg" alt="Video" />
                        <span>4</span>
                    </div>
                    <div className="py-1 px-4 rounded-[16px] bg-[#F7F8FD] flex gap-1">
                        <img src="/blue-notebook.svg" />
                        <span>5 Programs</span>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default CandidateInfo;