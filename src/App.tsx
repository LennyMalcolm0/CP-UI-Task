import { useState } from 'react';
import CandidateInfo from './component/CandidateInfo';
import CriteriaDropdown from './component/CriteriaDropdown';
import SideNavbar from './component/SideNavbar'
import { candidates } from './mockdata';
import SearchBar from './component/SearchBar';

function App() {
  const [candidatesInfoState, setCandidatesInfoState] = useState(candidates);
  const [selectAllCandidates, setSelectAllCandidates] = useState(false);

  return (
    <main className="w-screen h-[100dvh] bg-[#F9FAFF] flex leading-normal overflow-hidden">
        <SideNavbar />
        <div className="h-full w-full px-8 pt-8 flex gap-8 max-w-[1500px] mx-auto">
            <section className="w-[385px]">
                <h2 className="text-xl text-[#1D4ED8] font-semibold">London Internship Program</h2>
                <h6 className="text-xs text-[#c48a8a] font-light mt-2">London</h6>

                <SearchBar 
                    candidatesInfo={candidates}
                    setCandidatesInfoState={setCandidatesInfoState}
                />

                <div className="w-full bg-white rounded-[8px] text-sm text-[#0B0B0B] overflow-hidden">
                    <div className="w-full px-4 py-[18px] border-b border-[] flex items-center justify-between">
                        <div className="font-medium">Filters</div>
                        <div className="font-light text-xs">0 Selected</div>
                    </div>
                    {filterItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="w-full px-4 py-[18px] border-b border-[#F2F2F2] flex items-center justify-between cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <img src="/file-document.svg" />
                                <span>{item}</span>
                            </div>
                            <img src="/arrow-caret-down.svg" alt="arrow" />
                        </div>
                    ))}
                    <div className="w-full px-4 py-[18px] flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-2">
                            <img src="/file-document.svg" />
                            <span>Advanced Filter</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grow flex flex-col">
                <div className="w-full h-10 flex justify-between">
                    <CriteriaDropdown />
                    
                    <div className="h-full flex gap-2">
                        {applicationActions.map((actionItems, index) => (
                            <img 
                                key={index} 
                                src={actionItems}
                                className="h-full py-2 px-2 rounded-[8px] bg-white border-[0.5px] 
                                border-[#ECECEC] shadow-[0px_4px_25px_0px_rgba(141,141,141,0.05)]"
                            />
                        ))}
                        <div className="flex gap-[2px] rounded-[8px] overflow-hidden">
                            <span className="h-full px-4 flex items-center text-[13px] text-white bg-[#1D5ECD]">
                                Move To Video Interview
                            </span>
                            <div className="h-full px-3 flex items-center bg-[#1D5ECD]">
                                <img src="/application/expand-more.svg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grow overflow-y-scroll overflow-x-hidden custom-scroll-bar 
                    flex flex-col pb-2 mt-[45px] rounded-[16px] bg-white"
                >
                    <div className="px-4 sticky top-0 bg-white ">
                        <div className="py-4 border-b border-[#F2F2F2] flex items-center justify-between text-sm">
                            <div className="flex items-center gap-8">
                                <input 
                                    type="checkbox" 
                                    value={"yes"}
                                    onChange={() => setSelectAllCandidates(prev => !prev)}
                                    className="h-4 w-4 accent-[#1D4ED8]" 
                                />
                                <div className="text-[#1D4ED8] font-semibold">234 Candidates</div>
                            </div>
                            <div className="flex items-center">
                                <div className="px-4 text-[#1D4ED8] font-medium">Qualified</div>
                                <div className="w-[1px] h-3 bg-[#F3F3F4]" />

                                <div className="px-4 text-[#0B0B0B] flex items-center gap-2">
                                    <span>Task</span>
                                    <span className="py-[1px] px-[6px] rounded-full bg-[#F7F8FD] text-[10px] text-[#22215B]">25</span>
                                </div>
                                <div className="w-[1px] h-3 bg-[#F3F3F4]" />

                                <div className="px-4 text-[#0B0B0B] flex items-center gap-2">
                                    <span>Disqualified</span>
                                    <span className="py-[1px] px-[6px] rounded-full bg-[#F7F8FD] text-[10px] text-[#22215B]">78</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {candidatesInfoState.map((candidate, index) => (
                        <div key={index} className="px-4 cursor-pointer hover:bg-[#F9FAFF]">
                            <CandidateInfo 
                                {...candidate} 
                                selected={selectAllCandidates}
                                extraInfo={Boolean((index + 3) % 4)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </main>
  )
}

export default App

const filterItems = [ "Personal Information", "Education", "Work Experience", "Activity Filter" ];
const applicationActions = [ 
  "/application/artboard-211.svg",
  "/application/user-close.svg",
  "/application/user-check.svg",
  "/application/user-voice.svg",
  "/application/communication-mail.svg",
];
