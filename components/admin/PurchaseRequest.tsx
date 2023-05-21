import { useGetPurchaseDetail } from "@/apis/adminPurchase"

export default function AdminPurchaseRequest() {
    const { data, isLoading, error } = useGetPurchaseDetail();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: </div>;
    }
    return (
        <>
            <div className="w-[1500px] rounded-[10px] h-[630px] relative mx-[60px] bg-[#fff] mt-[15px]">
                <div className="w-[1400px] mx-auto pt-[1px]">
                    <table className="w-full mt-10 text-center">
                        <thead>
                            <tr className="border">
                                <th className="px-5 py-3 border-r">의뢰번호</th>
                                <th className="px-10 py-5 border-r">구매희망품목</th>
                                <th className="px-10 py-5 border-r">제품성분명</th>
                                <th className="px-10 py-5 border-r">제품수량</th>
                                <th className="px-10 py-5 border-r">견적수량희망일</th>
                                <th className="px-10 py-5 border-r">제품배송희망일</th>
                                <th className="px-10 py-5 border-r">직통번호</th>
                                <th className="px-10 py-5 border-r">승인여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.histories.map((i, index) => (
                                <tr
                                    className="border text-center"
                                    key={index}>
                                    <PurchaseInfo value={i.id} />
                                    <PurchaseInfo value={i.category} />
                                    <PurchaseInfo value={i.productDetail} />
                                    <PurchaseInfo value={i.quantity} />
                                    <PurchaseInfo value={i.desiredEstimateDate} />
                                    <PurchaseInfo value={i.desiredDeliveryDate} />
                                    <PurchaseInfo value={i.directPhoneNumber} />
                                    <PurchaseInfo value={i.state} />

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

type PurchaseInfoProps = {
    value?: string | number;
}

function PurchaseInfo({ value }: PurchaseInfoProps) {
    return (
        <>
            <td className="border">{value}</td>
        </>
    )
}