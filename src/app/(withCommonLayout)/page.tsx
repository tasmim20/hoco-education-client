import ParentSection from "@/components/UI/HomePage/ParentSection/ParentSection";
import Tailored from "@/components/UI/HomePage/Tailored/Tailored";
import Courses from "@/components/UI/HomePage/Courses/Courses";
import AnotherHero from "@/components/UI/HomePage/HeroSection/AnotherHero";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Partner from "@/components/UI/HomePage/Partner/Partner";

import TryBestSection from "@/components/UI/HomePage/TryBestSection/TryBestSection";
import Work from "@/components/UI/HomePage/Work/Work";
import HomeSchooling from "@/components/UI/HomeSchooling/HomeSchooling";
import SkilledInstructors from "@/components/UI/HomePage/SkilledInstructor/SkilledInstructor";
import StatsSection from "@/components/UI/HomePage/StatsSection/page";
import StudentTestimonial from "@/components/UI/HomePage/StudentTestimonial/StudentTestimonial";

const HomePage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <AnotherHero />
      <StatsSection />
      <HomeSchooling />
      <Courses />
      <ParentSection />
      <Tailored />

      <SkilledInstructors />
      <StudentTestimonial />
      <Work />
      <TryBestSection />
      <Partner />
    </>
  );
};

export default HomePage;

{
  /* <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Image src={LazyGif} alt="Lazy GIF" width={300} height={300} />
              <Typography variant="body2" sx={{ fontStyle: "italic", mt: 2 }}>
                If you are lazy 😴 like me to create a new account😫 ,
                <br /> then join using the following credentials:
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  <strong>Admin:</strong> tasmimrahman@gmail.com / 123456
                </Typography>
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                <strong>Student:</strong> tasmim20@gmail.com / 12345678
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                <strong>Instructor:</strong> rahman20@gmail.com / 12345678
              </Typography>
            </Box>
          </Grid> */
}
