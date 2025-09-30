import Image, { type StaticImageData } from "next/image";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaGlobe, FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface LinktreeCardProps {
    name: string;
    role?: string;
    profilepic?: StaticImageData;
    linkedin: string;
    twitter: string;
    github: string;
    instagram?: string;
    email?: string;
    website?: string;
}

const LinktreeCard = ({
    name,
    role,
    profilepic,
    linkedin,
    twitter,
    github,
    instagram,
    email,
    website,
}: LinktreeCardProps) => {
    return (
        <div className="w-full max-w-[350px] mx-auto">
            {/* Large Portrait Card */}
            <div
                className="flex flex-col items-center p-6 bg-transparent rounded-xl
        border border-[#2d2d2d]/20 shadow-[0_4px_12px_rgba(187,134,252,0.1)]
        hover:shadow-[0_8px_20px_rgba(187,134,252,0.2)] transition-all"
            >
                {/* Large Profile Image (Portrait) */}
                <div className="w-64 h-64 mb-4 rounded-lg overflow-hidden
        bg-gradient-to-br from-[#2d2d2d] to-[#333] flex items-center justify-center">
                    {profilepic ? (
                        <Image
                            src={profilepic}
                            alt={name}
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-[#2d2d2d]">
                            <span className="text-4xl font-bold">{name[0]}</span>
                        </div>
                    )}
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white">{name}</h2>
                    {role && (
                        <p className="text-[#bb86fc] text-sm mt-1">{role}</p>
                    )}
                </div>

                {/* Social Icons Only - Large */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {linkedin && (
                        <Link
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </Link>
                    )}
                    {twitter && (
                        <Link
                            href={twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </Link>
                    )}
                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaGithub className="w-6 h-6" />
                        </Link>
                    )}
                    {instagram && (
                        <Link
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                    )}
                    {email && (
                        <Link
                            href={`mailto:${email}`}
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </Link>
                    )}
                    {website && (
                        <Link
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[#1e1e1e] hover:bg-[#bb86fc]/20
              text-[#bb86fc] hover:text-white transition-colors"
                        >
                            <FaGlobe className="w-6 h-6" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LinktreeCard;
