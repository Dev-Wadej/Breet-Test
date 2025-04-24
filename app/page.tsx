"use client";
import Header from "@/components/header";
import ScrollFadeIn from "@/components/scroll-fade-in";
import React from "react";
import heroimg from "@/assets/images/hero.png";
import user1 from "@/assets/images/user-1.png";
import emailIllus from "@/assets/svgs/email-illus.svg";
import Image from "next/image";
import BlogCard from "@/components/blog-card";
import { blogContent } from "@/utils/blog";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <main className="font-manrope font-extrabold">
      <Header />
      <section className="mt-28 md:mt-40">
        <div className="mt-8">
          <ScrollFadeIn direction="down">
            <h1 className="text-center text-primary font-medium font-open-sans">
              Blog
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <h2 className="text-center text-primary mt-4  text-4xl sm:text-5xl xl:text-6xl font-normal ">
              Thoughts and words
            </h2>
          </ScrollFadeIn>
        </div>
        <ScrollFadeIn delay={0.17}>
          <div className="max-w-screen-xl mx-3 xl:mx-auto flex flex-col md:flex-row md:items-center gap-6 justify-between mt-12 xl:mt-20">
            <ScrollFadeIn direction="left" className="w-full flex-1">
              <Image
                src={heroimg}
                alt="An illustration of the hero"
                className="w-full"
              />
            </ScrollFadeIn>
            <ScrollFadeIn direction="right" className="flex-1">
              <div className="font-open-sans flex items-center gap-4">
                <span className="font-bold text-primary ">Category</span>
                <span className="font-normal text-gray-500">
                  November 22, 2021
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-light max-w-xl leading-[1.3] mt-5 xl:mt-8">
                Pitch termsheet backing validation focus release.
              </h3>
              <div className="flex items-center gap-3 mt-5 xl:mt-8">
                <Image src={user1} alt="User Image" />
                <span className="font-open-sans font-normal">
                  Chandler Bing
                </span>
              </div>
            </ScrollFadeIn>
          </div>
        </ScrollFadeIn>
      </section>
      <hr className="text-primary/70 h-[1px]  w-full max-w-screen-xl mx-auto my-14" />
      <section className="max-w-5xl  mx-3 lg:mx-auto">
        <ScrollFadeIn direction="down">
          <h2 className="text-primary my-4 mb-6 text-4xl font-normal ">
            Latest news
          </h2>
        </ScrollFadeIn>

        <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 gap-y-16">
          {blogContent.map((content, index) => (
            <ScrollFadeIn
              key={content.description}
              direction="up"
              delay={(index % 3) * 0.1}
            >
              <BlogCard {...content} />
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn direction="up">
          <div className="text-center mt-14">
            <button
              aria-label="Load more"
              className={`font-bold border-2 border-primary text-primary rounded-full py-2.5 px-10  `}
            >
              Load more
            </button>
          </div>
        </ScrollFadeIn>
      </section>

      <ScrollFadeIn direction="up">
        <section className="max-w-screen-xl mx-3 xl:mx-auto bg-primary h-96 rounded-3xl relative overflow-hidden mt-20">
          <span className="absolute top-0 right-0">
            <Image src={emailIllus} alt="SVG" />
          </span>
          <div className="absolute  left-1/2 -translate-x-1/2 w-[22rem] sm:w-[40rem]   md:w-[45rem] h-full flex flex-col items-center justify-center">
            <h2 className="text-center text-white mt-8 text-2xl sm:text-4xl lg:text-5xl font-normal  w-full leading-[1.4] ">
              An enterprise template to ramp up your company website
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center">
              <input
                aria-label="Email"
                type="text"
                placeholder="Your email address"
                className="border-transparent rounded-full bg-white placeholder:text-black text-black text-sm font-medium p-3 px-6 w-72"
              />
              <button
                type="button"
                aria-label="Email CTA"
                className="text-primary bg-secondary rounded-full px-11 p-3 text-sm cursor-pointer hover:scale-95 transition-all active:scale-105"
              >
                Start now
              </button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <Footer />
    </main>
  );
};

export default Page;
