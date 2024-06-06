import { Tag } from "..";
import Image from 'next/image'

interface HeroProps {
    variant?: "left" | "right";
    title: string;
    tags: string[];
    imgsrc: string;
    classList?: string;
    children: React.ReactNode;
}

export const Hero = ({ variant, title, tags, imgsrc, classList, children }: HeroProps) => {
    return (
        <article className={`flex items-center flex-col-reverse xl:gap-32 sm:gap-16 ${variant === "left" ? "md:flex-row" : "md:flex-row-reverse text-right justify-end"}` + " " + classList}>
            <div>
                <header>
                    <h2 className="text-5xl font-bold tracking-tight text-white mb-4">{title}</h2>
                    <ul className={`flex gap-2 list-none ${variant === "left" ? "justify-start" : "justify-end"}`}>
                    { tags.map((tag, index) => <Tag key={index}>{tag}</Tag>) }
                    </ul>
                </header>
                <section className="mt-4">
                    {children}
                </section>
            </div>
            <Image
                src={imgsrc}
                alt="hero"
                width={1200}
                height={1200}
            />
        </article>
    );
}