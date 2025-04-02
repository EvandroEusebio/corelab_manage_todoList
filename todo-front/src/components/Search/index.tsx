import * as React from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SearchIcon from "@/assets/icons/searchIcon";


function Search({ className }: React.ComponentProps<"search">) {
    return (
        <div className={`flex items-center gap-2 border-1 border-gray-300  ${className}`}>
            <Input
                placeholder="Pesquisar notas"
                type="text"
                className="border-0 w-full focus-visible:border-none focus-visible:ring-[none]  text-[9px] text-[#4F4F4D]"
            />
            <Button variant="ghost" className="hover:bg-[none] hover:text-[none] cursor-pointer">
                <SearchIcon className="w-[13px] h-[13px]" color="#9E9E9E" />
            </Button>
        </div>
    );
}

export default Search;
