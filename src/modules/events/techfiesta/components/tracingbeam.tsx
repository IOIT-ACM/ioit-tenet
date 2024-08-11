"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from '@/components/ui/tracing-beam';

export const TracingBeamDemo = () => {
  return (
    <TracingBeam className="px-6 py-36  text-neutral-50">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className="text-xl mb-4 ">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Product Management / Consulting Conference",
    description: (
      <>
        <p>
          Join industry leaders to explore the latest trends in product management
          and consulting strategies. Network with professionals and gain insights
          into effective decision-making and product development.
        </p>
      </>
    ),
    badge: "Business",
    image:
      "https://plus.unsplash.com/premium_photo-1661593062495-08c945c2e077?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How Data is used in Business Intelligence Conference",
    description: (
      <>
        <p>
          Discover how data analytics drives business decisions. Learn from
          experts about the integration of big data and business intelligence
          to transform organizational strategies.
        </p>
      </>
    ),
    badge: "Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Capture the Flag",
    description: (
      <>
        <p>
          Test your cybersecurity skills in a competitive environment. Engage
          with like-minded individuals in this thrilling Capture the Flag event
          designed for both beginners and experts.
        </p>
      </>
    ),
    badge: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web - 3 Conference",
    description: (
      <>
        <p>
          Explore the future of the internet with Web3 technologies. Learn about
          blockchain, decentralized applications, and the new wave of digital
          innovation shaping the world.
        </p>
      </>
    ),
    badge: "Technology",
    image:
      "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fun games (AR/VR, coding games)",
    description: (
      <>
        <p>
          Dive into the world of augmented and virtual reality with interactive
          games and coding challenges. Experience cutting-edge technology in a
          fun and engaging way.
        </p>
      </>
    ),
    badge: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LLM's Application in Industry Conference",
    description: (
      <>
        <p>
          Discover how Large Language Models are revolutionizing industries.
          Gain insights into their applications in automating processes and
          enhancing customer experiences.
        </p>
      </>
    ),
    badge: "AI",
    image:
      "https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Drone / Robotics Workshop",
    description: (
      <>
        <p>
          Participate in hands-on workshops to learn about the latest in drone
          and robotics technology. Build and program your own devices with
          expert guidance.
        </p>
      </>
    ),
    badge: "Engineering",
    image:
      "https://plus.unsplash.com/premium_photo-1661727577908-1221ff42dcf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gen AI (LLM) Development Workshop",
    description: (
      <>
        <p>
          Engage in a comprehensive workshop on developing and deploying
          generative AI models. Learn the techniques and tools for building
          powerful language models.
        </p>
      </>
    ),
    badge: "AI",
    image:
      "https://images.unsplash.com/photo-1675557570482-df9926f61d86?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Drone / Robotics Display",
    description: (
      <>
        <p>
          Witness the cutting-edge innovations in drone and robotics
          technology. Enjoy demonstrations from industry leaders showcasing
          their latest projects.
        </p>
      </>
    ),
    badge: "Exhibition",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
