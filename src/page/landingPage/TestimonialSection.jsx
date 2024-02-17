import { FlexBox, SectionContainer } from "@/components/util/index.util";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { manImg } from "../../assets/index.assets";

const testimonials = [
  {
    name: "John Doe",
    imgUrl: manImg,
    profession: "Software Engineer",
    aboutApp:
      "Using this app has greatly improved my productivity. It's a game-changer for anyone in the tech industry!",
  },
  {
    name: "Alice Smith",
    imgUrl: manImg,
    profession: "Marketing Specialist",
    aboutApp:
      "As a marketer, I appreciate the simplicity and effectiveness of this tool. It has streamlined my workflow and boosted campaign results.",
  },
  {
    name: "David Brown",
    imgUrl: manImg,
    profession: "Fitness Trainer",
    aboutApp:
      "I use this app to keep track of my clients' progress. It's user-friendly and helps me stay organized, making my job much easier.",
  },
  {
    name: "Emily Chen",
    imgUrl: manImg,
    profession: "Graphic Designer",
    aboutApp:
      "The creative possibilities with this app are endless. It has become an essential part of my design process, allowing me to bring my ideas to life.",
  },
  {
    name: "Michael Rodriguez",
    imgUrl: manImg,
    profession: "Entrepreneur",
    aboutApp:
      "This app has streamlined my business operations. It's intuitive, efficient, and has saved me a lot of time, allowing me to focus on growth.",
  },
  {
    name: "Sophia Patel",
    imgUrl: manImg,
    profession: "Student",
    aboutApp:
      "As a student, staying organized is key. This app has become my go-to for note-taking and project management. It keeps me on top of my studies.",
  },
  {
    name: "Chris Evans",
    imgUrl: manImg,
    profession: "Chef",
    aboutApp:
      "In the culinary world, precision is everything. This app helps me plan my menus, track inventory, and maintain the quality my customers expect.",
  },
  {
    name: "Olivia Martinez",
    imgUrl: manImg,
    profession: "Travel Blogger",
    aboutApp:
      "Documenting my travels is a breeze with this app. It's the perfect companion for capturing and sharing my adventures with my audience.",
  },
  {
    name: "Daniel Kim",
    imgUrl: manImg,
    profession: "Financial Analyst",
    aboutApp:
      "As a numbers person, I appreciate the analytical tools this app provides. It has become an invaluable asset in my day-to-day financial analysis.",
  },
  {
    name: "Ava Thompson",
    imgUrl: manImg,
    profession: "Teacher",
    aboutApp:
      "This app has transformed my lesson planning. It's user-friendly, visually appealing, and has enhanced the learning experience for my students.",
  },
];

const TestimonialSection = () => {
  return (
    <SectionContainer maxWidth="max-w-[1000px]">
      <h2 className=" text-3xl py-3">Our testimonials</h2>
      <Carousel>
        <CarouselContent className="">
          {testimonials.map(({ name, imgUrl, profession, aboutApp }) => (
            <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="p-3 h-[300px] overflow-hidden">
                <FlexBox direction="flex-col">
                  <img src={imgUrl} alt="man" width={100} />
                  <FlexBox direction="flex-col">
                    <h3 className="text-2xl leading-3">{name}</h3>
                    <p className="text-zinc-500 text-sm">{profession}</p>
                  </FlexBox>
                </FlexBox>
                <p>{aboutApp}</p>
              </Card>
            </CarouselItem>
          ))}
          {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3 border pl-4">
            ...
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 border pl-4">
            ...
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 border pl-4">
            ...
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionContainer>
  );
};

export default TestimonialSection;
