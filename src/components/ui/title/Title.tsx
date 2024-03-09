import { titleFont } from "@/config/fonts";


interface Props {
    title: string;
    quantity?: number;
    subtitle?: string;
    className?: string;
}

export const Title = ({ title, quantity, subtitle, className }: Props) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}>{title} {quantity && <span className="font-light text-xl">({quantity})</span>}</h1>
            {
                subtitle && (
                    <h3 className="text-xl mb-10">{subtitle}</h3>
                )
            }
        </div>
    )
}
