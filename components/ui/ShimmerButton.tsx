import React from 'react'

const ShimmerButton = ({ title, icon, position, handleClick, otherClasses }: { title: string, icon?: React.ReactNode, position?: string, handleClick?: () => void, otherClasses?: string }) => {
    return (
        <button onClick={handleClick} className={`w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black-100 focus:ring-offset-2 focus:ring-offset-black-100 md:mt-8 gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>
    )
}

export default ShimmerButton