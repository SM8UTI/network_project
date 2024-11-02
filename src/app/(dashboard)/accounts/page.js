import IconDropdown from "@/components/icon-dropdown";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import SelectDropdown from "@/components/select-dropdown";
import ToggleHeader from "@/components/toggle-header";
import { ChevronDown } from "lucide-react";
import { FileInput } from "lucide-react";

export default function Accounts({}) {
  const iconDropdownOptions = ["Profile", "Billing", "Team", "Subscription"];

  return (
    <div>
      <Navbar title="Accounts" />
      <ToggleHeader pageName="Account List" className=" p-6">
        <SelectDropdown className="min-w-28" />
        <SelectDropdown className="min-w-28" />
        <Searchbar displayText="🔍 Account/Email Address" />
        <IconDropdown
          className="border-green-500 min-w-20"
          options={iconDropdownOptions}
        >
          <FileInput size={18} />
          <ChevronDown size={18} />
        </IconDropdown>
      </ToggleHeader>
    </div>
  );
}
