import SidebarItem from "@/components/admin/SidebarItem";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminProductModify from "@/components/admin/ProductModify";



export default function ProductModify() {
    return (
        <div className="flex bg-[#ebedee]">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminProductModify list={[]} />
            </div>
        </div>
    )
}