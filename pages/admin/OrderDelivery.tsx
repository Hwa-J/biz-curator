import SidebarItem from "@/components/admin/SidebarItem";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import Orderdelivery from "@/components/admin/OrderDelivery";

export default function OrderDelivery() {
    return (
        <div className="flex h-screen">
            <SidebarItem />
            <div className="ml-80 w-[1600px]">
                <AdminHeader />
                <AdminSearch />
                <Orderdelivery />
            </div>
        </div>
    )
}