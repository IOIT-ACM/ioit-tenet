import Image, { type StaticImageData } from "next/image";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface SocialMediaIconProps {
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
}

const SocialMediaIcon = ({ Icon, href }: SocialMediaIconProps) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 rounded-full bg-transparent text-gray-400
    hover:text-[#bb86fc] hover:bg-[#2d2d2d] transition-colors"
    >
        <Icon className="w-5 h-5" />
    </Link>
);

interface TeamCardProps {
    name: string;
    role?: string;
    profilepic?: StaticImageData;
    linkedin: string;
    twitter: string;
    github: string;
    behance?: string;
}

const TeamCard = ({
    name,
    role,
    profilepic,
    linkedin,
    twitter,
    github,
}: TeamCardProps) => {
    return (
        <div
            className="flex flex-col items-center p-4 bg-transparent rounded-lg
      hover:bg-[#1e1e1e]/20 transition-all border border-[#2d2d2d]/30
      shadow-[0_2px_6px_rgba(187,134,252,0.1)] hover:shadow-[0_4px_12px_rgba(187,134,252,0.2)]"
        >
            {/* Tight Profile Image Container */}
            <div className="w-52 h-52 mb-3 rounded-lg overflow-hidden
      bg-gradient-to-br from-[#2d2d2d] to-[#333]">
                {profilepic ? (
                    <Image
                        src={profilepic}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center
          text-gray-400 bg-[#2d2d2d]">
                        <span className="text-xl font-bold">{name[0]}</span>
                    </div>
                )}
            </div>

            {/* Compact Name & Role */}
            <div className="text-center mb-2.5">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                {role && (
                    <p className="text-[#bb86fc] text-base font-medium">{role}</p>
                )}
            </div>

            {/* Tight Social Links */}
            <div className="flex gap-2 ">
                <SocialMediaIcon href={linkedin} Icon={FaLinkedin} />
                <SocialMediaIcon href={twitter} Icon={FaTwitter} />
                <SocialMediaIcon href={github} Icon={FaGithub} />
                <SocialMediaIcon href={github} Icon={FaInstagram} />
            </div>
        </div>
    );
};

export default TeamCard;
