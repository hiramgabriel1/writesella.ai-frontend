export function Logo({size}: Readonly<{size: string | null;}>) {
    return (
        <svg className={"size-"+size} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="16" fill="#221646" />
            <rect x=".5" y=".5" width="47" height="47" rx="15.5" stroke="url(#a)" strokeOpacity=".25" />
            <path d="M27.693 15.384c-4.078 0-12.247-3.306-12.247-7.384h-.06a12.31 12.31 0 0 0 12.307 12.308 7.385 7.385 0 1 1-7.385 7.387A12.306 12.306 0 0 0 8 15.388v.06c4.078 0 7.384 8.165 7.385 12.244a12.307 12.307 0 1 0 12.308-12.308" fill="#fff" />
            <defs>
                <linearGradient id="a" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}