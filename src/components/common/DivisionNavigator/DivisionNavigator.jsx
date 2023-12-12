import { useNavigate } from "react-router-dom";
import seatsList from '../../../assets/data/seatsList/seatsList'
function DivisionNavigator({page}) {
    const navigate = useNavigate()

    const handleDivisionChange = (e) => {
        navigate(`/seats/${e?.target?.value}`)
    }

    return (
        <div className={`grid grid-cols-2 lg:${page==='seatNavigation'?'grid-cols-2':'grid-cols-4'} gap-4 md:gap-8 p-2`}>
            {
                seatsList?.map((division, i) => (
                    <div key={i} className="relative">
                        <select
                            onChange={handleDivisionChange}
                            className="w-full border rounded-lg border-[#0000003D] bg-primary-light p-2 text-base font-normal cursor-pointer"
                        >
                            <option className="cursor-pointer" value="select">{division?.text}</option>
                            {
                                division?.seats?.map((option, i) => (
                                    <option key={i} value={option?.seatNo}>{option?.seatName}</option>
                                ))
                            }
                        </select>
                    </div>
                ))
            }
        </div>
    )
}

export default DivisionNavigator