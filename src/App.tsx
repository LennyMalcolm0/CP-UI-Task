import SideNavbar from './component/SideNavbar'

function App() {
  return (
    <main className="w-screen h-[100dvh] bg-[#F9FAFF] flex leading-normal overflow-x-hidden">
      <SideNavbar />
      <div className="w-full px-8 pt-8 flex gap-8 max-w-[1500px] mx-auto">
        <section className="w-[385px]">
          <h2 className="text-xl text-[#1D4ED8] font-semibold">London Internship Program</h2>
          <h6 className="text-xs text-[#0B0B0B] font-light mt-2">London</h6>

          <div className="relative w-full mt-8 mb-6">
            <input 
              type="text" 
              placeholder="Serach by name, edu, exp or #tag"
              className="h-12 w-full px-9 bg-white border border-[#F3F3F3] rounded-[8px] 
              text-sm text-[#9AA6AC] focus:border-[#B1CDFD] focus:outline-none"
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

        <section className="grow">
          <div className="w-full h-10 flex justify-between">
            <div className="h-full w-[320px] px-4 rounded-[16px] bg-white flex items-center 
              justify-between shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
            >
              <h3 className="font-semibold text-[#1D4ED8]">Opportunity Browsing</h3>
              <img src="public\dark-arrow-caret-down.svg" alt="arrow" className="h-6" />
            </div>
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
