import Image from "next/image";

interface CardProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    imgsrc: string;
    variant?: "horizontal" | "vertical";
    classList?: string;
}

export const Card = ({ children, title, subtitle, imgsrc, variant, classList }: CardProps) => {
    return (
        <article className={`flex gap-4 text-white items-center ${variant === "horizontal" ? "flex-row" : "flex-col"} ${classList}`}>
            <Image
                className="rounded-3xl"
                src={imgsrc}
                alt={title}
                width={300}
                height={300}
            />
            <div className={`flex gap-2 flex-col`}>
                <header>
                    <h4 className="text-2xl">{title}</h4>
                    <p className="font-bold">{subtitle}</p>
                </header>
                <section>
                    {children}
                </section>
            </div>
        </article>
    )
}