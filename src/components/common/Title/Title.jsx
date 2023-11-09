function Title({ text, underline = 'type2' }) {

    if (underline === 'type1') {
        return (
            <h4
                className="text-center relative pb-1 text-2xl font-bold leading-relaxed after:w-[25%] after:bottom-[1px] after:left-[38%] after:absolute after:h-[1px] after:bg-[#3764eb] before:w-[12%] before:h-[3px] before:bg-[#3764eb] before:absolute before:bottom-0 before:left-[44%]"
            >
                {text || 'No title'}
            </h4>
        )
    }

    else if (underline === 'type2') {
        return (
            <h4
                className='text-center relative py-4 px-3 pb-3 text-2xl font-bold before:w-[12%] before:h-[3px] before:bg-[#3764eb] before:absolute before:bottom-[1px] before:left-[44%] after:w-[25%] after:h-[1px] after:bg-[#3764eb] after:absolute after:bottom-[1px] after:left-[38%]'
            >
                {text || 'No title'}
            </h4>
        )
    }

}

export default Title