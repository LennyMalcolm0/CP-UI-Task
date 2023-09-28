import { SetStateAction } from "react";
import { Candidate } from "../mockdata";

interface SearchBarProps {
    candidatesInfo: Candidate[];
    setCandidatesInfoState: React.Dispatch<SetStateAction<Candidate[]>>;
}
const SearchBar = ({candidatesInfo, setCandidatesInfoState}: SearchBarProps) => {
    const searchItems = (e: React.ChangeEvent<HTMLInputElement>) => {
		const lowercasedInputValue = e.target.value.trim().toLowerCase();

		if (lowercasedInputValue === "") setCandidatesInfoState(candidatesInfo);

		const filteredData = candidatesInfo.filter((dataItem) => {
			const entries = Object.entries(dataItem);
			
			return entries.some(([key, value]) => {
                if (key === "firstName" || key === "lastName") {
                    const fullName = `${dataItem.firstName} ${dataItem.lastName}`;
                    return fullName.toLowerCase().indexOf(lowercasedInputValue) !== -1;
                } else if (key !== "tags") {
                    return value?.toString().toLowerCase().indexOf(lowercasedInputValue) !== -1;
                } else {
                    return dataItem.tags.some(tag => tag.toLowerCase().includes(lowercasedInputValue));
                }
			});
		});

		setCandidatesInfoState(filteredData);
	};

    return (  
        <div className="relative w-full mt-8 mb-6">
            <input 
                type="text" 
                placeholder="Serach by name, edu, exp or #tag"
                className="h-12 w-full px-9 bg-white border border-[#F3F3F3] rounded-[8px] 
                text-sm text-[#9AA6AC] focus:border-[#B1CDFD] focus:outline-none"
				onChange={(e) => {
					searchItems(e);
				}}
            />
            <img 
                src="/search-magnifying-glass.svg" 
                className="absolute top-1/2 -translate-y-1/2 left-3" 
            /> 
            <img 
                src="/circle-warning.svg" 
                className="absolute top-1/2 -translate-y-1/2 right-3" 
            />
        </div>
    );
}
 
export default SearchBar;