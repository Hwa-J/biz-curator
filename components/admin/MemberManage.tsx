import { useMemberManageDetail } from "@/apis/adminMemberManage";



export default function AdminMemberManage() {

    const { data, isLoading, error } = useMemberManageDetail();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    return (
        <>
            {/* <SearchForm onSearch={handleSearch} api={deliveryApi} /> */}
            <div className="w-[1500px] rounded-[10px] h-[630px] relative mx-[60px] bg-[#fff] mt-[15px]">
                <div className="w-[1400px] mx-auto pt-[1px]">
                    <table className="w-full">
                        <thead>
                            <tr className="border">
                                {/* <th className="px-10 py-5 border-r">No.</th> */}
                                <th className="px-10 py-5 border-r">아이디(email)</th>
                                <th className="px-10 py-5 border-r">상호명</th>
                                <th className="px-10 py-5 border-r">사업자 번호</th>
                                <th className="px-10 py-5 border-r">담당자 번호</th>
                                <th className="px-10 py-5 border-r">담당자 이름</th>
                                <th className="px-10 py-5 border-r">주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.histories?.map((i, index) => (
                                <tr
                                    className="border text-center"
                                    key={index}>
                                    {/* <OrderCanceInfo value={i.} /> */}
                                    <MemberManageInfo value={i.userName} />
                                    <MemberManageInfo value={i.businessName} />
                                    <MemberManageInfo value={i.businessNumber} />
                                    <MemberManageInfo value={i.managerPhoneNumber} />
                                    <MemberManageInfo value={i.manager} />
                                    <MemberManageInfo value={i.address} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type MemberManageInfoProps = {
    value?: string | number;
}

function MemberManageInfo({ value }: MemberManageInfoProps) {
    return (
        <>
            <td>{value}</td>
        </>
    )
}